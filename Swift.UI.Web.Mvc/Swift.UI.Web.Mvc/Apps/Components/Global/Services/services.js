(function (app) {
    'use strict';

    // '$http', '$resource'
    app.processFlowService.$inject = ['$q', 'commonLibrary', 'initUnitOfWork', 'serviceHelper', 'resourceApiUnitOfWork', 'logger'];
    app.mostlyUsedService.$inject = ['$q', 'commonLibrary', 'initUnitOfWork', 'serviceHelper', 'resourceApiUnitOfWork', 'logger'];
    app.bookmarkedService.$inject = ['$q', 'commonLibrary', 'initUnitOfWork', 'serviceHelper', 'resourceApiUnitOfWork', 'logger'];
    app.recentlyService.$inject = ['$q', 'commonLibrary', 'initUnitOfWork', 'serviceHelper', 'resourceApiUnitOfWork', 'logger'];
    app.eventHistoryService.$inject = ['$q', 'commonLibrary', 'initUnitOfWork', 'serviceHelper', 'resourceApiUnitOfWork', 'logger'];


    angular.module('angLiveStockManager')
        .factory('processFlowService', app.processFlowService)
        .factory('mostlyUsedService', app.mostlyUsedService)
        .factory('bookmarkedService', app.bookmarkedService)
        .factory('recentlyService', app.recentlyService)
        .factory('eventHistoryService', app.eventHistoryService);

})(window.app);

