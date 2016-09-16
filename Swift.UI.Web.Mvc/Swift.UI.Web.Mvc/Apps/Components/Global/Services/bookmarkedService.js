(function (app) {
    'use strict';

    // $http, $resource
    app.bookmarkedService = function ($q, commonLibrary, initUnitOfWork, serviceHelper, resourceApiUnitOfWork, logger) {

        var BookmarkedItems = resourceApiUnitOfWork.BookmarkedItems;

        function getBookmarkedItems(screenId, pageSize) {
            if (!pageSize)
                pageSize = 5;
            return BookmarkedItems.getBookmarkes({ screenId: screenId, count: pageSize });
        };

        function getBookmarkedItem(screenId, id) {
            return BookmarkedItems.getBookmarked({ screenId: screenId, recordId: id });
        };

        function saveBookmarkedItem(bookmark) {
            var bookmarkedItem = initUnitOfWork.BookmarkedItem ? initUnitOfWork.BookmarkedItem.init(bookmark) : {};
            bookmarkedItem.isActive = true;
            if (bookmarkedItem.bookmarkedItemId)
                return BookmarkedItems.update({ id: bookmarkedItem.bookmarkedItemId }, bookmarkedItem);
            else
                return BookmarkedItems.saveBookmarked(bookmarkedItem);
        };

        function deleteBookmarkedItem(bookmark) {
            var id = bookmark.bookmarkedItemId;
            if (id)
                return BookmarkedItems.delete({ bookmarkedItemId: id });
            else {
                var bookmarkedItem = initUnitOfWork.BookmarkedItem ? initUnitOfWork.BookmarkedItem.init(bookmark) : {};
                return BookmarkedItems.deleteBookmarked(bookmarkedItem);
            }
        };

        function isValidForBoth(bookmarkedItem) {
            var valid = true;
            var validationErrors = [];

            return { status: valid, errors: validationErrors };
        };

        function isValidForUpdate(bookmarkedItem) {
            var valid = isValidForBoth(bookmarkedItem);
            if (valid.status && !bookmarkedItem.bookmarkedItemId) {
                valid.status = false;
                valid.errors.push(bookmarkedItemMsg.UpdateWithoutID);
            }
            return valid;
        }

        function isValidForAdd(bookmarkedItem) {
            var valid = isValidForBoth(bookmarkedItem);
            if (valid.status && bookmarkedItem.bookmarkedItemId) {
                valid.status = false;
                valid.errors.push(bookmarkedItemMsg.AddWithID);
            }
            return valid;
        }

        function isValidForRemove(bookmarkedItem) {
            var valid = true;
            var validationErrors = [];
            if (!bookmarkedItem.bookmarkedItemId) {
                valid = false;
                validationErrors.push(bookmarkedItemMsg.RemoveWithoutID);
            }
            return { status: valid, errors: validationErrors };
        };

        return {
            GetBookmarkedItems: getBookmarkedItems,
            GetBookmarkedItem: getBookmarkedItem,
            SaveBookmark: saveBookmarkedItem,
            RemoveBookmark: deleteBookmarkedItem,
        };

    };

})(window.app);

