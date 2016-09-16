
serviceUnitOfWork = function (processFlowService, mostlyUsedService, bookmarkedService, recentlyService, eventHistoryService) {

    function init() { };

    return {
        ProcessFlow: processFlowService,
        MostlyUsed: mostlyUsedService,
        Bookmarked: bookmarkedService,
        Recently: recentlyService,
        EventHistory: eventHistoryService,
    };
};

angLiveStockManager.service('serviceUnitOfWork', ['processFlowService', 'mostlyUsedService', 'bookmarkedService', 'recentlyService', 'eventHistoryService', serviceUnitOfWork]);
