(function (app) {
    'use strict';

    // $http, $resource
    app.recentlyService = function ($q, commonLibrary, initUnitOfWork, serviceHelper, resourceApiUnitOfWork, logger) {

        var RecentItems = resourceApiUnitOfWork.RecentItems;

        function getRecentItems(screenId, pageSize) {
            if (!pageSize)
                pageSize = 5;
            return RecentItems.getRecents({ screenId: screenId, count: pageSize });
        };

        function getRecentItem(screenId, id) {
            return RecentItems.getRecent({ screenId: screenId, recordId: id });
        };

        function updateRecentItem(recent) {
            var recentItem = initUnitOfWork.RecentItem ? initUnitOfWork.RecentItem.init(recent) : {};
            recentItem.isActive = true;
            if (recentItem.recentItemId)
                return RecentItems.update({ recentItemId: recentItem.recentItemId }, recentItem);
            else
                return RecentItems.saveRecent(recentItem);
        };

        function deleteRecentItem(recent) {
            var id = recent.recentItemId;
            if (id)
                return RecentItems.delete({ recentItemId: id });
            else {
                var recentItem = initUnitOfWork.RecentItem ? initUnitOfWork.RecentItem.init(recent) : {};
                return RecentItems.deleteRecent(recentItem);
            }
        };

        function isValidForBoth(recentItem) {
            var valid = true;
            var validationErrors = [];

            return { status: valid, errors: validationErrors };
        };

        function isValidForUpdate(recentItem) {
            var valid = isValidForBoth(recentItem);
            if (valid.status && !recentItem.recentItemId) {
                valid.status = false;
                valid.errors.push(recentItemMsg.UpdateWithoutID);
            }
            return valid;
        }

        function isValidForAdd(recentItem) {
            var valid = isValidForBoth(recentItem);
            if (valid.status && recentItem.recentItemId) {
                valid.status = false;
                valid.errors.push(recentItemMsg.AddWithID);
            }
            return valid;
        }

        function isValidForRemove(recentItem) {
            var valid = true;
            var validationErrors = [];
            if (!recentItem.recentItemId) {
                valid = false;
                validationErrors.push(recentItemMsg.RemoveWithoutID);
            }
            return { status: valid, errors: validationErrors };
        };

        return {
            GetRecentItems: getRecentItems,
            GetRecentItem: getRecentItem,
            SaveRecent: updateRecentItem,
            RemoveRecent: deleteRecentItem,
        };
    };

})(window.app);
