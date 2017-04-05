define(['frame'], function(ngApp) {
    'use strict';
    ngApp.provider.controller('ctrlMain', ['$scope', function($scope) {
        $scope.$on('fromCtrlRecentStickTop', function(event, data) {
            $scope.$broadcast('toCtrlTopList', data);
        });
    }]);
    ngApp.provider.controller('ctrlTop', ['$scope', 'http2', 'noticebox', function($scope, http2, noticebox) {
        var page;
        $scope.page = page = {
            at: 1,
            size: 9,
            j: function() {
                return 'page=' + this.at + '&size=' + this.size;
            }
        };
        $scope.list = function() {
            var url = '/rest/pl/fe/topList?' + page.j();
            http2.get(url, function(rsp) {
                $scope.top = rsp.data.matters;
                $scope.page.total = rsp.data.total;
            })
        };
        $scope.removeTop = function(t, i) {
            var url = '/rest/pl/fe/delTop?site=' + t.siteid + '&id=' + t.matter_id + '&type=' + t.matter_type;
            http2.get(url, function(rsp) {
                $scope.top.splice(i, 1);
                $scope.page.total--;
                noticebox.success('完成')
            })
        };
        $scope.$on('toCtrlTopList', function(event, data) {
            //数据不完全一致，直接调用接口刷新
            $scope.list();
        });
        $scope.list();
    }])
    ngApp.provider.controller('ctrlRecent', ['$scope', '$uibModal', 'http2', 'templateShop', 'noticebox', function($scope, $uibModal, http2, templateShop, noticebox) {
        var _fns = {
            createSite: function() {
                var defer = $q.defer(),
                    url = '/rest/pl/fe/site/create?_=' + (new Date() * 1);

                http2.get(url, function(rsp) {
                    defer.resolve(rsp.data);
                });
                return defer.promise;
            },
            addLink: function(site) {
                http2.get('/rest/pl/fe/matter/link/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/link?site=' + site.id + '&id=' + rsp.data.id;
                });
            },
            addArticle: function(site) {
                http2.get('/rest/pl/fe/matter/article/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/article?site=' + site.id + '&id=' + rsp.data;
                });
            },
            addNews: function(site) {
                http2.get('/rest/pl/fe/matter/news/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/news?site=' + site.id + '&id=' + rsp.data.id;
                });
            },
            addChannel: function(site) {
                http2.get('/rest/pl/fe/matter/channel/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/channel?site=' + site.id + '&id=' + rsp.data.id;
                });
            },
            addEnroll: function(site, scenario) {
                $('body').trigger('click');
                templateShop.choose(site.id, 'enroll', scenario).then(function(choice) {
                    if (choice) {
                        if (choice.source === 'share') {
                            var url, data = choice.data;
                            url = '/rest/pl/fe/matter/enroll/createByOther?site=' + site.id + '&template=' + data.id;
                            http2.get(url, function(rsp) {
                                location.href = '/rest/pl/fe/matter/enroll?site=' + site.id + '&id=' + rsp.data.id;
                            });
                        } else if (choice.source === 'platform') {
                            var url, config, data = choice.data;
                            url = '/rest/pl/fe/matter/enroll/create?site=' + site.id;
                            config = {};
                            if (data) {
                                url += '&scenario=' + data.scenario.name;
                                url += '&template=' + data.template.name;
                                if (data.simpleSchema && data.simpleSchema.length) {
                                    config.simpleSchema = data.simpleSchema;
                                }
                            }
                            http2.post(url, config, function(rsp) {
                                location.href = '/rest/pl/fe/matter/enroll?site=' + site.id + '&id=' + rsp.data.id;
                            });
                        } else if (choice.source === 'file') {
                            var url, data = choice.data;
                            url = '/rest/pl/fe/matter/enroll/createByFile?site=' + site.id;
                            http2.post(url, data, function(rsp) {
                                location.href = '/rest/pl/fe/matter/enroll?site=' + site.id + '&id=' + rsp.data.id;
                            });
                        }
                    } else {
                        var url;
                        url = '/rest/pl/fe/matter/enroll/create?site=' + site.id;
                        http2.post(url, {}, function(rsp) {
                            location.href = '/rest/pl/fe/matter/enroll?site=' + site.id + '&id=' + rsp.data.id;
                        });
                    }
                });
            },
            addSignin: function(site) {
                http2.get('/rest/pl/fe/matter/signin/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/signin?site=' + site.id + '&id=' + rsp.data.id;
                });
            },
            addGroup: function(site) {
                http2.get('/rest/pl/fe/matter/group/create?site=' + site.id + '&scenario=split', function(rsp) {
                    location.href = '/rest/pl/fe/matter/group/main?site=' + site.id + '&id=' + rsp.data.id;
                });
            },
            addLottery: function(site) {
                http2.get('/rest/pl/fe/matter/lottery/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/lottery?site=' + site.id + '&id=' + rsp.data;
                });
            },
            addContribute: function(site) {
                http2.get('/rest/pl/fe/matter/contribute/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/contribute?site=' + site.id + '&id=' + rsp.data.id;
                });
            },
            addMission: function(site) {
                http2.get('/rest/pl/fe/matter/mission/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/mission?site=' + site.id + '&id=' + rsp.data.id;
                });
            },
            addCustom: function(site) {
                http2.get('/rest/pl/fe/matter/custom/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/custom?site=' + site.id + '&id=' + rsp.data;
                });
            },
            addMerchant: function(site) {
                http2.get('/rest/pl/fe/matter/merchant/shop/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/merchant/shop?site=' + site.id + '&id=' + rsp.data;
                });
            },
            addWall: function(site) {
                http2.get('/rest/pl/fe/matter/wall/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/wall?site=' + site.id + '&id=' + rsp.data;
                });
            },
            addAddressbook: function(site) {
                http2.get('/rest/pl/fe/matter/addressbook/create?site=' + site.id, function(rsp) {
                    location.href = '/rest/pl/fe/matter/addressbook?site=' + site.id + '&id=' + rsp.data;

                });
            }
        };

        function addMatter(site, matterType, scenario) {
            var fnName = 'add' + matterType[0].toUpperCase() + matterType.substr(1);
            _fns[fnName].call(_fns, site, scenario);
        }

        var url, page;
        $scope.page = page = {
            at: 1,
            size: 12,
            j: function() {
                return 'page=' + this.at + '&size=' + this.size;
            }
        };
        $scope.matterType = '';
        $scope.list = function(pageAt) {
            var url = '/rest/pl/fe/recent?' + page.j();
            if (pageAt) {
                page.at = pageAt;
            }
            if ($scope.matterType) {
                url += '&matterType=' + $scope.matterType;
            }
            http2.get(url, function(rsp) {
                $scope.matters = rsp.data.matters;
                $scope.page.total = rsp.data.total;
            });
        };
        $scope.open = function(matter, subView) {
            var url = '/rest/pl/fe/matter/' + matter.matter_type;
            if (subView) {
                url += '/' + subView;
            }
            url += '?id=' + matter.matter_id + '&site=' + matter.siteid;
            location.href = url;
        };
        $scope.popoverAddMatter = function() {
            var target = $('#popoverAddMatter');
            if (target.data('popover') === 'Y') {
                target.trigger('hide').data('popover', 'N');
            } else {
                target.trigger('show').data('popover', 'Y');
            }
        };
        $scope.addMatter = function(matterType, scenario) {
            var url = '/rest/pl/fe/site/list?_=' + (new Date() * 1);
            $('#popoverAddMatter').trigger('hide');
            http2.get(url, function(rsp) {
                var sites = rsp.data;
                if (sites.length === 1) {
                    addMatter(sites[0], matterType);
                } else if (sites.length === 0) {
                    createSite().then(function(site) {
                        addMatter(site, matterType, scenario);
                    });
                } else {
                    $uibModal.open({
                        templateUrl: 'addMatterSite.html',
                        dropback: 'static',
                        controller: ['$scope', '$uibModalInstance', function($scope2, $mi) {
                            var data;
                            $scope2.mySites = sites;
                            $scope2.data = data = {};
                            $scope2.ok = function() {
                                if (data.index !== undefined) {
                                    $mi.close(sites[data.index]);
                                } else {
                                    $mi.dismiss();
                                }
                            };
                            $scope2.cancel = function() {
                                $mi.dismiss();
                            };
                        }]
                    }).result.then(function(site) {
                        addMatter(site, matterType, scenario);
                    });
                }
            });
        };
        $scope.stickTop = function(m) {
            var url = '/rest/pl/fe/top?site=' + m.siteid + '&id=' + m.id;
            http2.get(url, function(rsp) {
                noticebox.success('完成置顶');
                $scope.$emit('fromCtrlRecentStickTop', m);
            })
        };
        $scope.list(1);
    }]);
    ngApp.provider.controller('ctrlSite', ['$scope', 'http2', function($scope, http2) {
        var t = (new Date() * 1);
        $scope.create = function() {
            var url = '/rest/pl/fe/site/create?_=' + t;
            http2.get(url, function(rsp) {
                location.href = '/rest/pl/fe/site/setting?site=' + rsp.data.id;
            });
        };
        //区分我的团队和回收站团队属性state ：0 是回收站信息；1是我的团队
        $scope.list = function() {
            $scope.siteType = 1;
            var url = '/rest/pl/fe/site/list?_=' + t;
            http2.get(url, function(rsp) {
                $scope.site1 = rsp.data;
                $scope.sites = rsp.data;
            });
        };
        $scope.setHome = function(site) {
            location.href = '/rest/pl/fe/site/home?site=' + site.id;
        };
        $scope.openConsole = function(site) {
            location.href = '/rest/pl/fe/site?site=' + site.id;
        };
        $scope.recycle = function() {
            //获取回收站信息
            var url = '/rest/pl/fe/site/wasteList?_=' + t;
            http2.get(url, function(rsp) {
                $scope.sites0 = rsp.data;
            });
        };
        $scope.restoreSite = function(site) {
            //恢复删除站点
            var url = '/rest/pl/fe/site/recover?site=' + site.id;
            http2.get(url, function(rsp) {
                location.href = '/rest/pl/fe/site?site=' + site.id;
            })
        };
        $scope.list();
        $scope.recycle();
    }]);
    ngApp.provider.controller('ctrlMission', ['$scope', 'http2', function($scope, http2) {
        var page, filter, filter2, t = (new Date() * 1);
        $scope.page = page = {
            at: 1,
            size: 12,
            j: function() {
                return 'page=' + this.at + '&size=' + this.size;
            }
        };
        $scope.filter = filter = {};
        $scope.filter2 = filter2 = {};
        $scope.open = function(mission, subView) {
            location.href = '/rest/pl/fe/matter/mission/' + subView + '?site=' + mission.siteid + '&id=' + mission.mission_id;
        };
        $scope.listSite = function() {
            var url = '/rest/pl/fe/matter/mission/listSite?_=' + t;
            http2.get(url, function(rsp) {
                $scope.missionSites = rsp.data.sites;
            });
        };
        $scope.list = function() {
            var url = '/rest/pl/fe/matter/mission/listByUser?_=' + t + '&' + page.j();
            http2.post(url, filter, function(rsp) {
                $scope.missions = rsp.data.missions;
                $scope.page.total = rsp.data.total;
            });
        };
        $scope.doFilter = function() {
            angular.extend(filter, filter2);
            $('body').click();
        };
        $scope.cleanFilter = function() {
            filter.byTitle = '';
            $('body').click();
        };
        $scope.$watch('filter', function(nv) {
            if (!nv) return;
            $scope.list();
        }, true);
        $scope.listSite();
    }]);
});
