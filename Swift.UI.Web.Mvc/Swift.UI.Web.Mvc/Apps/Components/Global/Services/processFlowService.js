(function (app) {
    'use strict';

    // $http, $resource
    app.processFlowService = function ($q, commonLibrary, initUnitOfWork, serviceHelper, resourceApiUnitOfWork, logger) {

        var NextActions = resourceApiUnitOfWork.NextActions;

        function getNexts(screenId, screenActionId) {
            return NextActions.getNexts({ screenId: screenId, screenActionId: screenActionId });
        };

        function getNext(screenId, screenActionId) {
            return NextActions.getNext({ screenId: screenId, screenActionId: screenActionId });
        };

        return {
            GetNexts: getNexts,
            GetNext: getNext,
        };
    };

})(window.app);

