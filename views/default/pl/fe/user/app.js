define(['frame'], function(ngApp) {
    'use strict';
    ngApp.provider.controller('ctrlApp', ['$scope', 'http2', function($scope, http2) {
        var _oPage;
        $scope.page = _oPage = {
            at: 1,
            size: 30,
            j: function() {
                return '&page=' + this.at + '&size=' + this.size;
            }
        };
        //分页
        $scope.doSearch = function() {
            http2.get('/rest/pl/fe/user/appList?uid=' + $scope.userId + _oPage.j()).then(function(rsp) {
                $scope.matters = rsp.data.apps;
                _oPage.total = rsp.data.total || 0;
            });
        };
        $scope.doSearch();
    }]);
});