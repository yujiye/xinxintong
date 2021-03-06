define(['frame'], function(ngApp) {
    ngApp.provider.controller('ctrlMain', ['$scope', 'http2', 'mediagallery', '$uibModal', 'srvTag', 'srvSite', function($scope, http2, mediagallery, $uibModal, srvTag, srvSite) {
        var _oAppRule, _oBeforeRule, modifiedData = {};
        $scope.rule = {};
        $scope.modified = false;
        $scope.urlsrcs = {
            '0': '外部链接',
            '1': '多图文',
            '2': '频道',
            '3': '内置回复',
        };
        $scope.linkparams = {
            '{{openid}}': '用户标识(openid)',
            '{{site}}': '公众号标识',
        };
        var getInitData = function() {
            http2.get('/rest/pl/fe/matter/link/get?site=' + $scope.siteId + '&id=' + $scope.id).then(function(rsp) {
                editLink(rsp.data);
            });
        };
        var editLink = function(link) {
            if (link.params) {
                var p;
                for (var i in link.params) {
                    p = link.params[i];
                    p.customValue = $scope.linkparams[p.pvalue] ? false : true;
                }
            }
            if (link.matter_mg_tag !== '') {
                link.matter_mg_tag.forEach(function(cTag, index) {
                    $scope.oTag.forEach(function(oTag) {
                        if (oTag.id === cTag) {
                            link.matter_mg_tag[index] = oTag;
                        }
                    });
                });
            }
            srvSite.memberSchemaList(link).then(function(aMemberSchemas) {
                $scope.memberSchemas = aMemberSchemas;
                $scope.mschemasById = {};
                $scope.memberSchemas.forEach(function(mschema) {
                    $scope.mschemasById[mschema.id] = mschema;
                });
            });
            $scope.editing = link;
            $scope.rule = _oAppRule = link.entry_rule;
            _oBeforeRule = angular.copy($scope.rule);
            $scope.persisted = angular.copy(link);
            $('[ng-model="editing.title"]').focus();
        };
        window.onbeforeunload = function(e) {
            var message;
            if ($scope.modified) {
                message = '修改还没有保存，是否要离开当前页面？',
                    e = e || window.event;
                if (e) {
                    e.returnValue = message;
                }
                return message;
            }
        };
        $scope.remove = function() {
            http2.get('/rest/pl/fe/matter/link/remove?site=' + $scope.siteId + '&id=' + $scope.id).then(function() {
                location.href = '/rest/pl/fe/site/console?site=' + $scope.siteId;
            });
        };
        $scope.submit = function() {
            http2.post('/rest/pl/fe/matter/link/update?site=' + $scope.siteId + '&id=' + $scope.id, modifiedData).then(function() {
                modifiedData = {};
                $scope.modified = false;
            });
        };

        function chooseGroupApp() {
            return $uibModal.open({
                templateUrl: 'chooseGroupApp.html',
                controller: ['$scope', '$uibModalInstance', function($scope2, $mi) {
                    $scope2.app = $scope.editing;
                    $scope2.data = {
                        app: null,
                        round: null
                    };
                    $scope.editing.mission && ($scope2.data.sameMission = 'Y');
                    $scope2.cancel = function() {
                        $mi.dismiss();
                    };
                    $scope2.ok = function() {
                        $mi.close($scope2.data);
                    };
                    var url = '/rest/pl/fe/matter/group/list?site=' + $scope.editing.siteid + '&size=999&cascaded=Y';
                    $scope.editing.mission && (url += '&mission=' + $scope.editing.mission.id);
                    http2.get(url).then(function(rsp) {
                        $scope2.apps = rsp.data.apps;
                    });
                }],
                backdrop: 'static'
            }).result;
        }

        function setMschemaEntry(mschemaId) {
            if (!_oAppRule.member) {
                _oAppRule.member = {};
            }
            if (!_oAppRule.member[mschemaId]) {
                _oAppRule.member[mschemaId] = {
                    entry: 'Y'
                };
                return true;
            }
            return false;
        };

        function setGroupEntry(oResult) {
            if (oResult.app) {
                _oAppRule.group = { id: oResult.app.id, title: oResult.app.title };
                if (oResult.round) {
                    _oAppRule.group.round = { id: oResult.round.round_id, title: oResult.round.title };
                }
                return true;
            }
            return false;
        };

        function _changeUserScope(ruleScope, oSiteSns) {
            var oEntryRule = $scope.editing.entry_rule;
            oEntryRule.scope = ruleScope;
            $scope.update('entry_rule');
            $scope.submit();
            _oBeforeRule = angular.copy($scope.rule);
        };
        $scope.changeUserScope = function(scopeProp) {
            switch (scopeProp) {
                case 'sns':
                    if ($scope.rule.scope[scopeProp] === 'Y') {
                        if (!$scope.rule.sns) {
                            $scope.rule.sns = {};
                        }
                        if ($scope.snsCount === 1) {
                            $scope.rule.sns[Object.keys($scope.sns)[0]] = { 'entry': 'Y' };
                        }
                    }
                    break;
            }
            _changeUserScope($scope.rule.scope, $scope.sns);
        };
        $scope.removeMschema = function(mschemaId) {
            if (_oAppRule.member[mschemaId]) {
                delete _oAppRule.member[mschemaId];
                $scope.update('entry_rule');
                $scope.submit();
            }
        };
        $scope.editMschema = function(oMschema) {
            if (oMschema.matter_id) {
                if (oMschema.matter_type === 'mission') {
                    location.href = '/rest/pl/fe/matter/mission/mschema?id=' + oMschema.matter_id + '&site=' + $scope.editing.siteid + '#' + oMschema.id;
                } else {
                    location.href = '/rest/pl/fe/site/mschema?site=' + $scope.editing.siteid + '#' + oMschema.id;
                }
            } else {
                location.href = '/rest/pl/fe?view=main&scope=user&sid=' + $scope.editing.siteid + '&mschema=' + oMschema.id;
            }
        };
        $scope.chooseMschema = function() {
            srvSite.chooseMschema($scope.editing).then(function(result) {
                if (setMschemaEntry(result.chosen.id)) {
                    $scope.update('entry_rule');
                    $scope.submit();
                }
            });
        };
        $scope.chooseGroupEditing = function() {
            chooseGroupApp().then(function(result) {
                if (setGroupEntry(result)) {
                    $scope.update('entry_rule');
                    $scope.submit();
                }
            });
        }
        $scope.update = function(names) {
            angular.isString(names) && (names = [names]);
            names.forEach(function(n) {
                modifiedData[n] = $scope.editing[n];
                if (n === 'urlsrc' && $scope.editing.urlsrc != 0) {
                    $scope.editing.open_directly = 'N';
                    modifiedData.open_directly = 'N';
                } else if (n === 'method' && $scope.editing.method === 'POST') {
                    $scope.editing.open_directly = 'N';
                    modifiedData.open_directly = 'N';
                }
                $scope.modified = true;
            });
        };
        $scope.setPic = function() {
            var options = {
                callback: function(url) {
                    $scope.editing.pic = url + '?_=' + (new Date() * 1);
                    $scope.update('pic');
                }
            };
            mediagallery.open($scope.siteId, options);
        };
        $scope.removePic = function() {
            $scope.editing.pic = '';
            $scope.update('pic');
        };
        $scope.addParam = function() {
            http2.get('/rest/pl/fe/matter/link/paramAdd?site=' + $scope.siteId + '&linkid=' + $scope.editing.id).then(function(rsp) {
                var oNewParam = {
                    id: rsp.data,
                    pname: 'newparam',
                    pvalue: ''
                };
                if ($scope.editing.urlsrc === '3' && $scope.editing.url === '9') oNewParam.pname = 'channelid';
                $scope.editing.params.push(oNewParam);
            });
        };
        $scope.updateParam = function(updated, name) {
            // 参数中有额外定义，需清除
            var p = {
                pname: updated.pname,
                pvalue: encodeURIComponent(updated.pvalue),
            };
            http2.post('/rest/pl/fe/matter/link/paramUpd?site=' + $scope.siteId + '&id=' + updated.id, p);
        };
        $scope.removeParam = function(removed) {
            http2.get('/rest/pl/fe/matter/link/removeParam?id=' + removed.id).then(function(rsp) {
                var i = $scope.editing.params.indexOf(removed);
                $scope.editing.params.splice(i, 1);
            });
        };
        $scope.changePValueMode = function(p) {
            p.pvalue = '';
        };
        $scope.tagMatter = function(subType) {
            var oTags;
            oTags = $scope.oTag;
            srvTag._tagMatter($scope.editing, oTags, subType);
        };
        $scope.assignMission = function() {
            var _this = this;
            srvSite.openGallery({
                matterTypes: [{
                    value: 'mission',
                    title: '项目',
                    url: '/rest/pl/fe/matter'
                }],
                singleMatter: true
            }).then(function(missions) {
                var matter;
                if (missions.matters.length === 1) {
                    matter = {
                        id: $scope.id,
                        type: 'link'
                    };
                    http2.post('/rest/pl/fe/matter/mission/matter/add?site=' + $scope.siteId + '&id=' + missions.matters[0].id, matter).then(function(rsp) {
                        var mission = rsp.data;

                        $scope.editing.mission = mission;
                        $scope.editing.mission_id = mission.id;
                        modifiedData['mission_id'] = mission.id;
                        if (!$scope.editing.pic || $scope.editing.pic.length === 0) {
                            $scope.editing.pic = mission.pic;
                            modifiedData['pic'] = mission.pic;
                        }
                        if (!$scope.editing.summary || $scope.editing.summary.length === 0) {
                            $scope.editing.summary = mission.summary;
                            modifiedData['summary'] = mission.summary;
                        }
                        _this.submit();
                    });
                }
            });
        };
        $scope.quitMission = function() {
            var that = this;
            matter = {
                    id: $scope.editing.id,
                    type: 'link',
                    title: $scope.editing.title
                },
                http2.post('/rest/pl/fe/matter/mission/matter/remove?site=' + $scope.siteId + '&id=' + $scope.editing.mission_id, matter).then(function(rsp) {
                    delete $scope.editing.mission;
                    $scope.editing.mission_id = 0;
                    modifiedData['mission_id'] = 0;
                    that.submit();
                });
        };
        $scope.assignNavApp = function() {
            var oOptions = {
                matterTypes: [{
                    value: 'enroll',
                    title: '登记活动',
                    url: '/rest/pl/fe/matter'
                },{
                    value: 'article',
                    title: '单图文',
                    url: '/rest/pl/fe/matter'
                },{
                    value: 'channel',
                    title: '频道',
                    url: '/rest/pl/fe/matter'
                },{
                    value: 'link',
                    title: '链接',
                    url: '/rest/pl/fe/matter'
                }],
                singleMatter: true
            };
            srvSite.openGallery(oOptions).then(function(result) {
                if (result.matters && result.matters.length === 1) {
                    !$scope.editing.config.nav && ($scope.editing.config.nav = {});
                    !$scope.editing.config.nav.app && ($scope.editing.config.nav.app = []);
                    $scope.editing.config.nav.app.push({
                        type: result.matters[0].type,
                        id: result.matters[0].id,
                        title: result.matters[0].title
                    });
                    $scope.update('config');
                }
            });
        };
        $scope.removeNavApp = function(index) {
            $scope.editing.config.nav.app.splice(index, 1);
            if ($scope.editing.config.nav.app.length === 0) {
                delete $scope.editing.config.nav.app;
            }
            $scope.update('config');
        };
        $scope.$watch('editing.urlsrc', function(nv) {
            switch (nv) {
                case '1':
                    if ($scope.news === undefined) {
                        http2.get('/rest/pl/fe/matter/news/list?site=' + $scope.siteId + '&cascade=N').then(function(rsp) {
                            $scope.news = rsp.data.docs;
                        });
                    }
                    break;
                case '2':
                    if ($scope.channels === undefined) {
                        http2.get('/rest/pl/fe/matter/channel/list?site=' + $scope.siteId + '&cascade=N').then(function(rsp) {
                            $scope.channels = rsp.data.docs;
                        });
                    }
                    break;
                case '3':
                    if ($scope.inners === undefined) {
                        http2.get('/rest/pl/fe/matter/inner/list?site=' + $scope.siteId).then(function(rsp) {
                            $scope.inners = rsp.data;
                        });
                    }
                    break;
            }
        });
        getInitData();
    }]);
});