'use strict';
angLiveStock.controller('indexController', [
    '$scope',
    '$rootScope',
    '$state',
    function ($scope, $rootScope, $state) {

        $scope.authentication = {};
        $scope.authentication.isAuth = true;

        $scope.totalNotification = 0;

        $scope.logOut = function () {

            $rootScope.authenticated = false;

        };

    }]);