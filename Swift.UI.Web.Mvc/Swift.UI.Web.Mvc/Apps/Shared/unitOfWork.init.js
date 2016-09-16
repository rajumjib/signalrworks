
initUnitOfWork = function ($filter) {

    function init() { };

    var toDay = $filter('date')(new Date(), configData.dateFormat);

    //White
    //data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQ
    //data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=
    //data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7
    //Black
    //data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==
    //data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=

    var blankImage = {
        base46: 'R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=',
        type: 'image/gif',
        data: 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
    };

    var screenConfig = {};

    var login = {
        init: function (data) {
            var value = {};
            value.email = data ? data.email || 0 : 0;
            value.password = data ? data.password || '' : '';
            return value;
        }
    };

    screenConfig.login = {
        screenId: 1,
        screenAction: {
            login: 1
        }
    };

    var bookmarkedItem = {
        init: function (data) {
            var value = {};
            //value.screen = data ? data.screen || {} : screen.init();
            value.bookmarkedItemId = data ? data.bookmarkedItemId || 0 : 0;
            value.screenId = data ? data.screenId || 0 : 0;
            value.recordId = data ? data.recordId || 0 : 0;
            value.isActive = data ? data.isActive || false : true;
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        }
    };

    screenConfig.bookmarkedItem = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };

    var itemEvent = {
        init: function (data) {
            var value = {};
            //value.screen = data ? data.screen || {} : screen.init();
            //value.screenAction = data ? data.screenAction || {} : screenAction.init();
            value.itemEventId = data ? data.itemEventId || 0 : 0;
            value.screenId = data ? data.screenId || 0 : 0;
            value.recordId = data ? data.recordId || 0 : 0;
            value.screenActionId = data ? data.screenActionId || 0 : 0;
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        }
    };

    screenConfig.itemEvent = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };

    var nextAction = {
        init: function (data) {
            var value = {};
            //value.next = data ? data.next || {} : next.init();
            //value.screenAction = data ? data.screenAction || {} : screenAction.init();
            value.nextActionId = data ? data.nextActionId || 0 : 0;
            value.title = data ? data.title || '' : '';
            value.screenActionId = data ? data.screenActionId || 0 : 0;
            value.nextId = data ? data.nextId || 0 : 0;
            value.isDefault = data ? data.isDefault || false : false;
            value.isActive = data ? data.isActive || false : true;
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        }
    };

    screenConfig.nextAction = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };

    var popularItem = {
        init: function (data) {
            var value = {};
            //value.screen = data ? data.screen || {} : screen.init();
            value.popularItemId = data ? data.popularItemId || 0 : 0;
            value.screenId = data ? data.screenId || 0 : 0;
            value.recordId = data ? data.recordId || 0 : 0;
            value.visits = data ? data.visits || 0 : 0;
            value.isActive = data ? data.isActive || false : true;
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        }
    };

    screenConfig.popularItem = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };

    var recentItem = {
        init: function (data) {
            var value = {};
            //value.screen = data ? data.screen || {} : screen.init();
            value.recentItemId = data ? data.recentItemId || 0 : 0;
            value.screenId = data ? data.screenId || 0 : 0;
            value.recordId = data ? data.recordId || 0 : 0;
            value.isActive = data ? data.isActive || false : true;
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        }
    };

    screenConfig.recentItem = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };

    var screen = {
        init: function (data) {
            var value = {};
            value.screenId = data ? data.screenId || 0 : 0;
            value.name = data ? data.name || '' : '';
            value.isActive = data ? data.isActive || false : true;
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        }
    };

    screenConfig.screen = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };

    var screenAction = {
        init: function (data) {
            var value = {};
            //value.screen = data ? data.screen || {} : screen.init();
            value.screenActionId = data ? data.screenActionId || 0 : 0;
            value.title = data ? data.title || '' : '';
            value.screenId = data ? data.screenId || 0 : 0;
            value.isDefault = data ? data.isDefault || false : false;
            value.isActive = data ? data.isActive || false : true;
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        }
    };

    screenConfig.screenAction = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };

    return {
        Init: init,
        formatDate: function (date) { return $filter('date')(date, configData.dateFormat); },
        GetToDay: function () { return toDay; },
        BlankImage: blankImage,
        ScreenConfig: screenConfig,
        Login: login,
        BookmarkedItem: bookmarkedItem,
        ItemEvent: itemEvent,
        NextAction: nextAction,
        PopularItem: popularItem,
        RecentItem: recentItem,
        Screen: screen,
        ScreenAction: screenAction
    };
};

angLiveStockManager.service('initUnitOfWork', ['$filter', initUnitOfWork]);
