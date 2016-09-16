(function (app) {
    'use strict';

    // $http, $resource
    app.mostlyUsedService = function ($q, commonLibrary, initUnitOfWork, serviceHelper, resourceApiUnitOfWork, logger) {

        var PopularItems = resourceApiUnitOfWork.PopularItems;

        function getPopularItems(screenId, pageSize) {
            if (!pageSize)
                pageSize = 5;
            return PopularItems.getPopulares({ screenId: screenId, count: pageSize });
        };

        function getPopularItem(screenId, id) {
            return PopularItems.getUses({ screenId: screenId, recordId: id });
        };

        function updatePopularItem(popular) {
            var popularItem = initUnitOfWork.PopularItem ? initUnitOfWork.PopularItem.init(popular) : {};
            popularItem.visits++;
            if (popularItem.popularItemId)
                return PopularItems.update({ popularItemId: popularItem.popularItemId }, popularItem);
            else
                return PopularItems.saveUses(popularItem);
        };

        function deletePopularItem(popular) {
            var id = popular.popularItemId;
            if (id)
                return PopularItems.delete({ popularItemId: id });
            else {
                var popularItem = initUnitOfWork.PopularItem ? initUnitOfWork.PopularItem.init(popular) : {};
                return PopularItems.deleteUses(popularItem);
            }
        };

        function isValidForBoth(popularItem) {
            var valid = true;
            var validationErrors = [];

            return { status: valid, errors: validationErrors };
        };

        function isValidForUpdate(popularItem) {
            var valid = isValidForBoth(popularItem);
            if (valid.status && !popularItem.popularItemId) {
                valid.status = false;
                valid.errors.push(popularItemMsg.UpdateWithoutID);
            }
            return valid;
        }

        function isValidForAdd(popularItem) {
            var valid = isValidForBoth(popularItem);
            if (valid.status && popularItem.popularItemId) {
                valid.status = false;
                valid.errors.push(popularItemMsg.AddWithID);
            }
            return valid;
        }

        function isValidForRemove(popularItem) {
            var valid = true;
            var validationErrors = [];
            if (!popularItem.popularItemId) {
                valid = false;
                validationErrors.push(popularItemMsg.RemoveWithoutID);
            }
            return { status: valid, errors: validationErrors };
        };

        return {
            GetPopularItems: getPopularItems,
            GetPopularItem: getPopularItem,
            UpdateUses: updatePopularItem,
            RemoveUses: deletePopularItem,
        };
    };

})(window.app);

