"use strict";
angLiveStockManager.filter('agedate', function () {

    function getAge(dateString) {
        var today = new Date();
        
        var birthDate = new Date(dateString);

        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return function (input, uppercase) {

        if (!input)
            return '';

        var num = getAge(input);

        var out = num;
        if (num > 1)
            out = out + ' years';
        else
            out = out + ' year';

        if (uppercase) {
            out = out.toUpperCase();
        }

        return out;
    };
});