
commonLibrary = function () {

    function getDate(dateText) {
        if (!dateText)
            return;

        var date = new Date(dateText);

        if (!date.getDate()) {
            try {
                date = Date.parse(dateText);
            } catch (x) { }
        }

        if (!date.getDate()) {
            if (dateText.length > 10) {
                dateText = dateText.substr(0, 10);
                date = getDate(dateText);
            }
        }

        return date;
    }

    function parseDate(dateText) {
        if (!dateText)
            return;
        var rgexp = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/;
        //var rgexp = /(^(((0[1-9]|[12][0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
        var valid = rgexp.test(dateText);
        if (!valid) {
            var match = dateText.match(/^(\d{1,2})(\d{1,2})(\d{2,4})$/);
            dateText = (match) ? ('0' + match[1]).slice(-2) + '/' + ('0' + match[2]).slice(-2) + '/' + ('20' + match[3]).slice(-4) : '';
            return dateText;
        }
    }

    var isExpired = function (date, duration) {
        date = getDate(date);
        var today = new Date();
        if (date < today) {
            return true;
        }
    };

    function getInteger(integerText) {
        if (!integerText)
            return 0;
        var integer = integerText;
        try {
            integer = parseInt(integer);
        } catch (x) { integer = 0; }
        return integer;
    }

    function padding(data, length, padWith) {
        length = getInteger(length);
        length = length - String(data).length + 1;
        if (length > 0)
            return Array(length).join(padWith) + data;
        return data;
    }

    function format() {
        var formatted = null;
        for (var arg in arguments) {
            if (!formatted) {
                formatted = arguments[arg];
                continue;
            }
            var pos = arg - 1;
            formatted = formatted.replace("{" + pos + "}", arguments[arg]);
        }
        return formatted;
    };

    return {
        GetDate: getDate,
        ParseDate: parseDate,
        IsExpired: isExpired,
        GetInteger: getInteger,
        PaddingWith: padding,
        formatText: format
    };
};

angLiveStockManager.service('commonLibrary', [commonLibrary]);
