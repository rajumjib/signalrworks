(function (app) {
    'use strict';

    // $http, $resource
    app.eventHistoryService = function ($q, commonLibrary, initUnitOfWork, serviceHelper, resourceApiUnitOfWork, logger) {

        var ItemEvents = resourceApiUnitOfWork.ItemEvents;

        function getItemEvents(screenId, screenActionId, pageSize) {
            if (!pageSize)
                pageSize = 5;
            return ItemEvents.query({ screenId: screenId, screenActionId: screenActionId, count: pageSize });
        };

        function getItemEvent(screenId, id) {
            return ItemEvents.get({ screenId: screenId, recordId: id });
        };

        function saveItemEvent(occurrence) {
            var itemEvent = initUnitOfWork.ItemEvent ? initUnitOfWork.ItemEvent.init(occurrence) : {};
            itemEvent.isActive = true;
            if (itemEvent.itemEventId)
                return ItemEvents.update({ itemEventId: itemEvent.itemEventId }, itemEvent);
            else
                return ItemEvents.save(itemEvent);
        };

        function deleteItemEvent(occurrence) {
            var id = occurrence.itemEventId;
            if (id)
                return ItemEvents.delete({ itemEventId: id });
            else {
                var itemEvent = initUnitOfWork.ItemEvent ? initUnitOfWork.ItemEvent.init(occurrence) : {};
                return ItemEvents.deleteItemEvent(itemEvent);
            }
        };

        function isValidForBoth(itemEvent) {
            var valid = true;
            var validationErrors = [];

            return { status: valid, errors: validationErrors };
        };

        function isValidForUpdate(itemEvent) {
            var valid = isValidForBoth(itemEvent);
            if (valid.status && !itemEvent.itemEventId) {
                valid.status = false;
                valid.errors.push(itemEventMsg.UpdateWithoutID);
            }
            return valid;
        }

        function isValidForAdd(itemEvent) {
            var valid = isValidForBoth(itemEvent);
            if (valid.status && itemEvent.itemEventId) {
                valid.status = false;
                valid.errors.push(itemEventMsg.AddWithID);
            }
            return valid;
        }

        function isValidForRemove(itemEvent) {
            var valid = true;
            var validationErrors = [];
            if (!itemEvent.itemEventId) {
                valid = false;
                validationErrors.push(itemEventMsg.RemoveWithoutID);
            }
            return { status: valid, errors: validationErrors };
        };

        return {
            GetItemEvents: getItemEvents,
            GetItemEvent: getItemEvent,
            SaveEvent: saveItemEvent,
        };
    };

})(window.app);

