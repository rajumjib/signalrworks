"use strict";
angLiveStockManager.filter('yesno', function () {
    return function (input, uppercase) {

        var out = input ? 'Yes' : 'No';

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});
