(function (app) {
    'use strict';

    // addedextract:dependency:devTest
    // '$location', '$routeParams'
    app.devTestController.$inject = ['$scope', '$rootScope', '$stateParams', '$state', '$filter', 'Hub', 'commonLibrary', 'initControlPageUnitOfWork', 'serviceUnitOfWork', 'serviceHelper', 'devTestService'];
    // endextract
    // appendextract:dependency

    var angLiveStock = angular.module('angLiveStock');
    
    // addedextract:controller:devTest
    angLiveStock.controller('devTestController', app.devTestController);
    // endextract
    // appendextract:controller

})(window.app);

