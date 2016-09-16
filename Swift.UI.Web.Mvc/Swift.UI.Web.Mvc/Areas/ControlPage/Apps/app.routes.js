'use strict';
angLiveStock.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$provide', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $provide) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    //$locationProvider.html5Mode(true);

    //$urlRouterProvider.otherwise("/list");

}]);
