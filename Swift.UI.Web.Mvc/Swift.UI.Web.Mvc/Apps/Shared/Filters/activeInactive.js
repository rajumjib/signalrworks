"use strict";
angLiveStockManager.filter('activeinactive', function () {
    return function (input, uppercase) {

        var out = input ? 'Active' : 'Inactive';

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});

angLiveStockManager.filter('makeactiveinactive', function () {
    return function (input, uppercase) {

        var out = input ? 'Deactivate' : 'Activate';

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});

angLiveStockManager.filter('showhide', function () {
    return function (input, uppercase) {

        var out = input ? 'Visible' : 'Hidden';

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});

angLiveStockManager.filter('makeshowhide', function () {
    return function (input, uppercase) {

        var out = input ? 'Hide' : 'Show';

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});