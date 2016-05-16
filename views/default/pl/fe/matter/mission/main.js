app = angular.module('app', ['ngRoute', 'ui.tms', 'matters.xxt']);
app.config(['$controllerProvider', '$locationProvider', function($controllerProvider, $locationProvider) {
	app.provider = {
		controller: $controllerProvider.register
	};
	$locationProvider.html5Mode(true);
}]);
app.controller('ctrlApp', ['$scope', '$location', 'http2', function($scope, $location, http2) {
	$scope.id = $location.search().id;
	$scope.siteId = $location.search().site;
	$scope.back = function() {
		history.back();
	};
	$scope.$on('$routeChangeSuccess', function(evt, nextRoute, lastRoute) {
		if (nextRoute.loadedTemplateUrl.indexOf('/setting') !== -1) {
			$scope.subView = 'setting';
		} else if (nextRoute.loadedTemplateUrl.indexOf('/matter') !== -1) {
			$scope.subView = 'matter';
		}
	});
	http2.get('/rest/pl/fe/matter/mission/get?site=' + $scope.siteId + '&id=' + $scope.id, function(rsp) {
		var mission = rsp.data;
		mission.type = 'mission';
		mission.extattrs = (mission.extattrs && mission.extattrs.length) ? JSON.parse(mission.extattrs) : {};
		$scope.editing = mission;
	});
}]);
app.controller('ctrlSetting', ['$scope', 'http2', '$modal', function($scope, http2, $modal) {
	var modifiedData = {};
	$scope.modified = false;
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
	$scope.submit = function() {
		http2.post('/rest/pl/fe/matter/mission/setting/update?site=' + $scope.siteId + '&id=' + $scope.id, modifiedData, function(rsp) {
			$scope.modified = false;
			modifiedData = {};
		});
	};
	$scope.update = function(name) {
		modifiedData[name] = $scope.editing[name];
		$scope.modified = true;
		$scope.submit();
	};
	$scope.setPic = function() {
		var options = {
			callback: function(url) {
				$scope.editing.pic = url + '?_=' + (new Date()) * 1;
				$scope.update('pic');
			}
		};
		mediagallery.open($scope.siteId, options);
	};
	$scope.removePic = function() {
		var nv = {
			pic: ''
		};
		http2.post('/rest/pl/fe/matter/mission/setting/update?site=' + $scope.siteId + '&id=' + $scope.id, nv, function() {
			$scope.editing.pic = '';
		});
	};
	$scope.$on('xxt.tms-datepicker.change', function(event, data) {
		$scope.editing[data.state] = data.value;
		$scope.update(data.state);
	});
}]);
app.controller('ctrlMatter', ['$scope', '$modal', 'http2', function($scope, $modal, http2) {
	var indicators = {
		registration: {
			title: '在线报名',
			handler: function() {
				$scope.addEnroll('registration');
			}
		},
		signin: {
			title: '签到',
			handler: function() {
				$scope.addSignin();
			}
		},
		group: {
			title: '分组',
			handler: function() {
				$scope.addGroup();
			}
		},
		voting: {
			title: '评价',
			handler: function() {
				$scope.addEnroll('voting');
			}
		},
	};
	$scope.addByIndicator = function(indicator) {
		indicator.handler();
	};
	$scope.addArticle = function() {
		var url = '/rest/pl/fe/matter/article/create?site=' + $scope.siteId + '&mission=' + $scope.id,
			config = {
				proto: {
					title: $scope.editing.title + '-资料'
				}
			};
		http2.post(url, config, function(rsp) {
			location.href = '/rest/pl/fe/matter/article?site=' + $scope.siteId + '&id=' + rsp.data;
		});
	};
	$scope.addEnroll = function(assignedScenario) {
		$modal.open({
			templateUrl: 'templatePicker.html',
			backdrop: 'static',
			windowClass: 'auto-height template',
			controller: ['$scope', '$modalInstance', function($scope2, $mi) {
				$scope2.data = {};
				$scope2.cancel = function() {
					$mi.dismiss();
				};
				$scope2.blank = function() {
					$mi.close();
				};
				$scope2.ok = function() {
					$mi.close($scope2.data);
				};
				$scope2.chooseScenario = function() {};
				$scope2.chooseTemplate = function() {
					if (!$scope2.data.template) return;
					var url;
					url = '/rest/pl/fe/matter/enroll/template/config';
					url += '?scenario=' + $scope2.data.scenario.name;
					url += '&template=' + $scope2.data.template.name;
					http2.get(url, function(rsp) {
						var elSimulator, url;
						$scope2.data.simpleSchema = rsp.data.simpleSchema ? rsp.data.simpleSchema : '';
						$scope2.pages = rsp.data.pages;
						$scope2.data.selectedPage = $scope2.pages[0];
						elSimulator = document.querySelector('#simulator');
						url = 'http://' + location.host;
						url += '/rest/site/fe/matter/enroll/template';
						url += '?scenario=' + $scope2.data.scenario.name;
						url += '&template=' + $scope2.data.template.name;
						url += '&_=' + (new Date()).getTime();
						elSimulator.src = url;
						elSimulator.onload = function() {
							$scope.$apply(function() {
								$scope2.choosePage();
							});
						};
					});
				};
				$scope2.choosePage = function() {
					var elSimulator, page;
					elSimulator = document.querySelector('#simulator');
					config = {
						simpleSchema: $scope2.data.simpleSchema
					};
					page = $scope2.data.selectedPage.name;
					elSimulator.contentWindow.renew(page, config);
				};
				http2.get('/rest/pl/fe/matter/enroll/template/list', function(rsp) {
					var keysOfTemplate;
					$scope2.templates = rsp.data;
					if (assignedScenario) {
						$scope2.data.scenario = $scope2.templates[assignedScenario];
						keysOfTemplate = Object.keys($scope2.data.scenario.templates);
						if (keysOfTemplate.length) {
							$scope2.data.template = $scope2.data.scenario.templates[keysOfTemplate[0]];
							$scope2.chooseTemplate();
						}
						$scope2.fixedScenario = true;
					}
				});
			}]
		}).result.then(function(data) {
			var url, config;
			url = '/rest/pl/fe/matter/enroll/create?site=' + $scope.siteId + '&mission=' + $scope.id;
			config = {
				proto: {
					title: $scope.editing.title + '-报名'
				}
			};
			if (data) {
				url += '&scenario=' + data.scenario.name;
				url += '&template=' + data.template.name;
				if (data.simpleSchema && data.simpleSchema.length) {
					config.simpleSchema = data.simpleSchema;
				}
			}
			http2.post(url, config, function(rsp) {
				location.href = '/rest/pl/fe/matter/enroll?site=' + $scope.siteId + '&id=' + rsp.data.id;
			});
		});
	};
	$scope.addSignin = function() {
		var url = '/rest/pl/fe/matter/signin/create?site=' + $scope.siteId + '&mission=' + $scope.id,
			config = {
				proto: {
					title: $scope.editing.title + '-签到'
				}
			};
		http2.post(url, config, function(rsp) {
			location.href = '/rest/pl/fe/matter/signin?site=' + $scope.siteId + '&id=' + rsp.data.id;
		});
	};
	$scope.addGroup = function() {
		var url = '/rest/pl/fe/matter/group/create?site=' + $scope.siteId + '&mission=' + $scope.id + '&scenario=split',
			config = {
				proto: {
					title: $scope.editing.title + '-分组'
				}
			};
		http2.post(url, config, function(rsp) {
			location.href = '/rest/pl/fe/matter/group?site=' + $scope.siteId + '&id=' + rsp.data.id;
		});
	};
	$scope.open = function(matter) {
		var type = matter.type,
			id = matter.id;
		switch (type) {
			case 'article':
			case 'enroll':
			case 'group':
			case 'signin':
				location.href = '/rest/pl/fe/matter/' + type + '?id=' + id + '&site=' + $scope.siteId;
				break;
		}
	};
	$scope.fetch = function() {
		http2.get('/rest/pl/fe/matter/mission/matter/list?site=' + $scope.siteId + '&id=' + $scope.id + '&_=' + (new Date()).getTime(), function(rsp) {
			var typeCount = {};
			angular.forEach(rsp.data, function(matter) {
				matter._operator = matter.modifier_name || matter.creater_name;
				matter._operateAt = matter.modifiy_at || matter.create_at;
				if (matter.type === 'enroll') {
					typeCount[matter.scenario] ? typeCount[matter.scenario]++ : (typeCount[matter.scenario] = 1);
				} else {
					typeCount[matter.type] ? typeCount[matter.type]++ : (typeCount[matter.type] = 1);
				}
			});
			$scope.matters = rsp.data;
			$scope.indicators = [];
			!typeCount.registration && $scope.indicators.push(indicators.registration);
			!typeCount.signin && $scope.indicators.push(indicators.signin);
			!typeCount.group && $scope.indicators.push(indicators.group);
			!typeCount.voting && $scope.indicators.push(indicators.voting);
		});
	};
	$scope.fetch();
}]);