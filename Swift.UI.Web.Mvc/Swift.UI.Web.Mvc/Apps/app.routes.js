'use strict';
angLiveStockManager.config(['$routeProvider', '$locationProvider', '$httpProvider', '$provide', function ($routeProvider, $locationProvider, $httpProvider, $provide) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/Apps/Components/Home/Views/Landing.html',
            controller: 'homeController'
        })
        .when('/Home', {
            templateUrl: '/Apps/Components/Home/Views/Home.html',
            controller: 'homeController'
        })
        .when('/About', {
            templateUrl: '/Apps/Components/Home/Views/About.html',
            controller: 'aboutController'
        })
        .when('/Error', {
            templateUrl: '/Apps/Components/Global/Views/Error.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

