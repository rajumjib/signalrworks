
var angLiveStock = angular.module('angLiveStock',
    [
        'ngResource',
        'ui.router',
        //'angular-loading-bar',
        'ngAnimate',
        //'toaster',
        //'infinite-scroll',
        'ui.bootstrap',
        'SignalR',
        'angLiveStockManager'
    ]);

angLiveStock.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]
);