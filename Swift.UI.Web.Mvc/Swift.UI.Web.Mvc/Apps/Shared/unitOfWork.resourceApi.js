
resourceApiUnitOfWork = function ($resource, serviceHelper) {

    function init() { };

    var bookmarkedItems = $resource(serviceHelper.BuildUrl('api/BookmarkedItems/:bookmarkedItemId'),
        { bookmarkedItemId: '@id' },
        {
            'update': { method: 'PUT' },
            updateBookmarkedItem: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/Update/:bookmarkedItemId"),
                method: 'PUT',
                params: { bookmarkedItemId: '@id' }
            },
            getScreenList: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/ScreenList"),
                method: 'GET',
                isArray: true
            },
            searchScreenList: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/ScreenList/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getScreenByBookmarkedItem: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/BookmarkedItems/:bookmarkedItemId/Screen"),
                method: 'GET',
                params: { bookmarkedItemId: '@bookmarkedItemId' },
            },
            getActiveList: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/Active"),
                method: 'GET',
                isArray: true
            },
            getInformation: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/Information"),
                method: 'GET',
                isArray: true
            },
            getSelectiveBookmarkedItems: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/SelectiveList"),
                method: 'POST',
                isArray: true
            },
            getPagedItems: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/PageByPage?count=:count&page=:page&sorting=:sorting"),
                method: 'GET',
                params: { count: '@count', page: '@page', sorting: '@sorting' },
                isArray: true
            },

            getBookmarkes: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/Bookmarkes"),
                method: 'GET',
                isArray: true
            },
            getBookmarked: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/Bookmarked"),
                method: 'GET',
            },
            saveBookmarked: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/Bookmarked"),
                method: 'POST',
            },
            deleteBookmarked: {
                url: serviceHelper.BuildUrl("api/BookmarkedItems/Bookmarked/Delete"),
                method: 'POST',
            },

        });

    var itemEvents = $resource(serviceHelper.BuildUrl('api/ItemEvents/:itemEventId'),
        { itemEventId: '@id' },
        {
            'update': { method: 'PUT' },
            updateItemEvent: {
                url: serviceHelper.BuildUrl("api/ItemEvents/Update/:itemEventId"),
                method: 'PUT',
                params: { itemEventId: '@id' }
            },
            getScreenList: {
                url: serviceHelper.BuildUrl("api/ItemEvents/ScreenList"),
                method: 'GET',
                isArray: true
            },
            searchScreenList: {
                url: serviceHelper.BuildUrl("api/ItemEvents/ScreenList/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getScreenByItemEvent: {
                url: serviceHelper.BuildUrl("api/ItemEvents/ItemEvents/:itemEventId/Screen"),
                method: 'GET',
                params: { itemEventId: '@itemEventId' },
            },
            getScreenActionList: {
                url: serviceHelper.BuildUrl("api/ItemEvents/ScreenActionList"),
                method: 'GET',
                isArray: true
            },
            searchScreenActionList: {
                url: serviceHelper.BuildUrl("api/ItemEvents/ScreenActionList/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getScreenActionByItemEvent: {
                url: serviceHelper.BuildUrl("api/ItemEvents/ItemEvents/:itemEventId/ScreenAction"),
                method: 'GET',
                params: { itemEventId: '@itemEventId' },
            },
            getInformation: {
                url: serviceHelper.BuildUrl("api/ItemEvents/Information"),
                method: 'GET',
                isArray: true
            },
            getSelectiveItemEvents: {
                url: serviceHelper.BuildUrl("api/ItemEvents/SelectiveList"),
                method: 'POST',
                isArray: true
            },
            getPagedItems: {
                url: serviceHelper.BuildUrl("api/ItemEvents/PageByPage?count=:count&page=:page&sorting=:sorting"),
                method: 'GET',
                params: { count: '@count', page: '@page', sorting: '@sorting' },
                isArray: true
            }
        });

    var nextActions = $resource(serviceHelper.BuildUrl('api/NextActions/:nextActionId'),
        { nextActionId: '@id' },
        {
            'update': { method: 'PUT' },
            updateNextAction: {
                url: serviceHelper.BuildUrl("api/NextActions/Update/:nextActionId"),
                method: 'PUT',
                params: { nextActionId: '@id' }
            },
            getScreenActionList: {
                url: serviceHelper.BuildUrl("api/NextActions/ScreenActionList"),
                method: 'GET',
                isArray: true
            },
            searchScreenActionList: {
                url: serviceHelper.BuildUrl("api/NextActions/ScreenActionList/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getScreenActionByNextAction: {
                url: serviceHelper.BuildUrl("api/NextActions/NextActions/:nextActionId/ScreenAction"),
                method: 'GET',
                params: { nextActionId: '@nextActionId' },
            },
            searchNextActionList: {
                url: serviceHelper.BuildUrl("api/NextActions/Search/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getActiveList: {
                url: serviceHelper.BuildUrl("api/NextActions/Active"),
                method: 'GET',
                isArray: true
            },
            getInformation: {
                url: serviceHelper.BuildUrl("api/NextActions/Information"),
                method: 'GET',
                isArray: true
            },
            getSelectiveNextActions: {
                url: serviceHelper.BuildUrl("api/NextActions/SelectiveList"),
                method: 'POST',
                isArray: true
            },
            getPagedItems: {
                url: serviceHelper.BuildUrl("api/NextActions/PageByPage?count=:count&page=:page&sorting=:sorting"),
                method: 'GET',
                params: { count: '@count', page: '@page', sorting: '@sorting' },
                isArray: true
            },

            getNexts: {
                url: serviceHelper.BuildUrl("api/NextActions/Nexts/:screenId/:screenActionId"),
                method: 'GET',
                params: { screenId: '@screenId', screenActionId: '@screenActionId' },
                isArray: true
            },
            getNext: {
                url: serviceHelper.BuildUrl("api/NextActions/Next/:screenId/:screenActionId"),
                method: 'GET',
                params: { screenId: '@screenId', screenActionId: '@screenActionId' },
            },

        });

    var popularItems = $resource(serviceHelper.BuildUrl('api/PopularItems/:popularItemId'),
        { popularItemId: '@id' },
        {
            'update': { method: 'PUT' },
            updatePopularItem: {
                url: serviceHelper.BuildUrl("api/PopularItems/Update/:popularItemId"),
                method: 'PUT',
                params: { popularItemId: '@id' }
            },
            getScreenList: {
                url: serviceHelper.BuildUrl("api/PopularItems/ScreenList"),
                method: 'GET',
                isArray: true
            },
            searchScreenList: {
                url: serviceHelper.BuildUrl("api/PopularItems/ScreenList/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getScreenByPopularItem: {
                url: serviceHelper.BuildUrl("api/PopularItems/PopularItems/:popularItemId/Screen"),
                method: 'GET',
                params: { popularItemId: '@popularItemId' },
            },
            getActiveList: {
                url: serviceHelper.BuildUrl("api/PopularItems/Active"),
                method: 'GET',
                isArray: true
            },
            getInformation: {
                url: serviceHelper.BuildUrl("api/PopularItems/Information"),
                method: 'GET',
                isArray: true
            },
            getSelectivePopularItems: {
                url: serviceHelper.BuildUrl("api/PopularItems/SelectiveList"),
                method: 'POST',
                isArray: true
            },
            getPagedItems: {
                url: serviceHelper.BuildUrl("api/PopularItems/PageByPage?count=:count&page=:page&sorting=:sorting"),
                method: 'GET',
                params: { count: '@count', page: '@page', sorting: '@sorting' },
                isArray: true
            },

            getPopulares: {
                url: serviceHelper.BuildUrl("api/PopularItems/Populares"),
                method: 'GET',
                isArray: true
            },
            getUses: {
                url: serviceHelper.BuildUrl("api/PopularItems/Uses"),
                method: 'GET',
            },
            saveUses: {
                url: serviceHelper.BuildUrl("api/PopularItems/Uses"),
                method: 'POST',
            },
            deleteUses: {
                url: serviceHelper.BuildUrl("api/PopularItems/Uses/Delete"),
                method: 'POST',
            },

        });

    var recentItems = $resource(serviceHelper.BuildUrl('api/RecentItems/:recentItemId'),
        { recentItemId: '@id' },
        {
            'update': { method: 'PUT' },
            updateRecentItem: {
                url: serviceHelper.BuildUrl("api/RecentItems/Update/:recentItemId"),
                method: 'PUT',
                params: { recentItemId: '@id' }
            },
            getScreenList: {
                url: serviceHelper.BuildUrl("api/RecentItems/ScreenList"),
                method: 'GET',
                isArray: true
            },
            searchScreenList: {
                url: serviceHelper.BuildUrl("api/RecentItems/ScreenList/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getScreenByRecentItem: {
                url: serviceHelper.BuildUrl("api/RecentItems/RecentItems/:recentItemId/Screen"),
                method: 'GET',
                params: { recentItemId: '@recentItemId' },
            },
            getActiveList: {
                url: serviceHelper.BuildUrl("api/RecentItems/Active"),
                method: 'GET',
                isArray: true
            },
            getInformation: {
                url: serviceHelper.BuildUrl("api/RecentItems/Information"),
                method: 'GET',
                isArray: true
            },
            getSelectiveRecentItems: {
                url: serviceHelper.BuildUrl("api/RecentItems/SelectiveList"),
                method: 'POST',
                isArray: true
            },
            getPagedItems: {
                url: serviceHelper.BuildUrl("api/RecentItems/PageByPage?count=:count&page=:page&sorting=:sorting"),
                method: 'GET',
                params: { count: '@count', page: '@page', sorting: '@sorting' },
                isArray: true
            },

            getRecents: {
                url: serviceHelper.BuildUrl("api/RecentItems/Recents"),
                method: 'GET',
                isArray: true
            },
            getRecent: {
                url: serviceHelper.BuildUrl("api/RecentItems/Recent"),
                method: 'GET',
            },
            saveRecent: {
                url: serviceHelper.BuildUrl("api/RecentItems/Recent"),
                method: 'POST',
            },
            deleteRecent: {
                url: serviceHelper.BuildUrl("api/RecentItems/Recent/Delete"),
                method: 'POST',
            },

        });

    var screens = $resource(serviceHelper.BuildUrl('api/Screens/:screenId'),
        { screenId: '@id' },
        {
            'update': { method: 'PUT' },
            updateScreen: {
                url: serviceHelper.BuildUrl("api/Screens/Update/:screenId"),
                method: 'PUT',
                params: { screenId: '@id' }
            },
            searchScreenList: {
                url: serviceHelper.BuildUrl("api/Screens/Search/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getActiveList: {
                url: serviceHelper.BuildUrl("api/Screens/Active"),
                method: 'GET',
                isArray: true
            },
            getInformation: {
                url: serviceHelper.BuildUrl("api/Screens/Information"),
                method: 'GET',
                isArray: true
            },
            getSelectiveScreens: {
                url: serviceHelper.BuildUrl("api/Screens/SelectiveList"),
                method: 'POST',
                isArray: true
            },
            getPagedItems: {
                url: serviceHelper.BuildUrl("api/Screens/PageByPage?count=:count&page=:page&sorting=:sorting"),
                method: 'GET',
                params: { count: '@count', page: '@page', sorting: '@sorting' },
                isArray: true
            }
        });

    var screenActions = $resource(serviceHelper.BuildUrl('api/ScreenActions/:screenActionId'),
        { screenActionId: '@id' },
        {
            'update': { method: 'PUT' },
            updateScreenAction: {
                url: serviceHelper.BuildUrl("api/ScreenActions/Update/:screenActionId"),
                method: 'PUT',
                params: { screenActionId: '@id' }
            },
            getScreenList: {
                url: serviceHelper.BuildUrl("api/ScreenActions/ScreenList"),
                method: 'GET',
                isArray: true
            },
            searchScreenList: {
                url: serviceHelper.BuildUrl("api/ScreenActions/ScreenList/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getScreenByScreenAction: {
                url: serviceHelper.BuildUrl("api/ScreenActions/ScreenActions/:screenActionId/Screen"),
                method: 'GET',
                params: { screenActionId: '@screenActionId' },
            },
            searchScreenActionList: {
                url: serviceHelper.BuildUrl("api/ScreenActions/Search/:q"),
                method: 'GET',
                params: { q: '@q' },
                isArray: true
            },
            getActiveList: {
                url: serviceHelper.BuildUrl("api/ScreenActions/Active"),
                method: 'GET',
                isArray: true
            },
            getInformation: {
                url: serviceHelper.BuildUrl("api/ScreenActions/Information"),
                method: 'GET',
                isArray: true
            },
            getSelectiveScreenActions: {
                url: serviceHelper.BuildUrl("api/ScreenActions/SelectiveList"),
                method: 'POST',
                isArray: true
            },
            getPagedItems: {
                url: serviceHelper.BuildUrl("api/ScreenActions/PageByPage?count=:count&page=:page&sorting=:sorting"),
                method: 'GET',
                params: { count: '@count', page: '@page', sorting: '@sorting' },
                isArray: true
            }
        });

    return {
        Init: init,
        AuthorizationToken: $resource(serviceHelper.BuildUrl("Token"), null,
        {
            requestToken: {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }
        }),
        Account: $resource(serviceHelper.BuildUrl('api/Account/'), null,
        {
            register: { method: 'post' },
            logOff: { method: 'put' }
        }),
        BookmarkedItems: bookmarkedItems,
        ItemEvents: itemEvents,
        NextActions: nextActions,
        PopularItems: popularItems,
        RecentItems: recentItems,
        Screens: screens,
        ScreenActions: screenActions,

    };
};

angLiveStockManager.service('resourceApiUnitOfWork', ['$resource', 'serviceHelper', resourceApiUnitOfWork]);
