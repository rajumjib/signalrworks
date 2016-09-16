"use strict";
angLiveStockManager.filter('monthname', function () {
    return function (input, uppercase) {

        if (!input)
            return '';
        var months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var out = '';
        var num = input;
        if (num > 0 && num < 13)
            out = months[num];
        else
            return '';

        if (uppercase) {
            out = out.toUpperCase();
        }

        return out;
    };
});

angLiveStockManager.filter('weekdayname', function () {
    return function (input, uppercase) {

        if (!input)
            return '';
        var days = ['', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];

        var out = '';
        var num = input;
        if (num > 0 && num < 13)
            out = days[num];
        else
            return '';


        if (uppercase) {
            out = out.toUpperCase();
        }

        return out;
    };
});