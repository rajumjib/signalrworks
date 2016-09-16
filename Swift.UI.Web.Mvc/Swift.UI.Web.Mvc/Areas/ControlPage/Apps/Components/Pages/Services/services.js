(function (app) {
    'use strict';

    // addedextract:dependency:devTest
    // '$http', '$resource', 'serviceHelper'
    app.devTestService.$inject = [ '$q', 'commonLibrary', 'initControlPageUnitOfWork', 'resourceApiControlPageUnitOfWork'];
    // endextract
    // appendextract:dependency

    var angLiveStock = angular.module('angLiveStock');
    
    // addedextract:service:devTest
    angLiveStock.factory('devTestService', app.devTestService);
    // endextract
    // appendextract:service

})(window.app);

