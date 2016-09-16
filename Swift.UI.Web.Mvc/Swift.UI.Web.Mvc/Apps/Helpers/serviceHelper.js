angLiveStockManager.factory('serviceHelper', ['$http', '$resource', function ($http, $resource) {
    var baseUrl = config.apiurl;
    var buildUrl = function (resourceUrl) {
        return baseUrl + resourceUrl;
    };

    var buildFormData = function (formData) {
        var dataString = '';
        for (var prop in formData) {
            if (formData.hasOwnProperty(prop)) {
                dataString += (prop + '=' + formData[prop] + '&');
            }
        }
        return dataString.slice(0, dataString.length - 1);
    };

    var formDataHeader = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    var parseErrors = function (error) {
        var errors = [];
        if (error.data && angular.isObject(error.data)) {
            if (error.data.modelState && angular.isObject(error.data.modelState)) {
                for (var key in error.data.modelState) {
                    for (var i = 0; i < error.data.modelState[key].length; i++) {
                        if (errors.indexOf(error.data.modelState[key][i]) > -1)
                            continue;
                        errors.push(error.data.modelState[key][i]);
                    }
                }
            } else {
                if (error.data.error_description) {
                    errors.push(error.data.error_description);
                } else {
                    for (var key in error.data) {
                        if (errors.indexOf(error.data[key][0]) > -1)
                            continue;
                        errors.push(error.data[key][0]);
                    }
                }
            }
        }

        return errors;
    };

    var processErrors = function (error) {
        var errors = [];
        angular.forEach(error, function (value, key) {
            var info = 'Invalid ' + key;

            angular.forEach(value, function (v, k) {
                info = info + v.$name;
            });

            errors.push(info);
        });

        return errors;
    };

    var addRequestHeader = function (key, value) {

    };

    return {
        BuildUrl: buildUrl,
        BuildFormData: buildFormData,
        FormDataHeader: formDataHeader,
        ParseErrors: parseErrors,
        ProcessErrors: processErrors,
    };
}]);