angLiveStockManager.factory('cacheHelper', ['$cacheFactory', function ($cacheFactory) {
    var dataCache;
    var storage = false;
    if (typeof (Storage) !== "undefined") {
        storage = true;
    } else {
        dataCache = $cacheFactory('data-cache')
    }

    function put(key, value) {
        var data = angular.toJson({ key: key, value: value });
        if (storage) {
            if (sessionStorage) {
                sessionStorage.setItem(key, data);
                return;
            }
            if (localStorage) {
                localStorage.setItem(key, data);
                return;
            }
        }
        if (dataCache) {
            dataCache.put(key, data);
            return;
        }
    }

    function get(key) {
        var value;
        if (storage) {
            if (!value && sessionStorage) {
                value= sessionStorage.getItem(key);
            }
            if (!value && localStorage) {
                value= localStorage.getItem(key);
            }
        }
        if (!value && dataCache) {
            value= dataCache.get(key, value);
        }
        if (value) {
            try{
                var data = angular.fromJson(value);
                return data.value;
            } catch (x) {
                remove(key);
            }
        }
        return;
    }

    function remove(key) {
        if (storage) {
            if (sessionStorage) {
                sessionStorage.removeItem(key);
                return;
            }
            if (localStorage) {
                localStorage.removeItem(key);
                return;
            }
        }
        if (dataCache) {
            dataCache.remove(key);
            return;
        }
    }

    var authorization = {
        init: function (data) {
            var value = {};
            value.token = data ? data.token || '' : '';
            value.refreshToken = data ? data.refreshToken || '' : '';
            value.tokenType = data ? data.tokenType || '' : '';
            value.useRefreshToken = data ? data.useRefreshToken || false : true;
            value.userName = data ? data.userName || '' : '';
            value.userEmail = data ? data.userEmail || '' : '';
            value.issued = data ? data.issued || new Date() : new Date();
            value.expire = data ? data.expire || new Date() : new Date();
            value.duration = data ? data.duration || 0 : 0;
            value.isAuthenticated = data ? data.isAuthenticated || false : false;
            value.isRefreshing = data ? data.isRefreshing || false : false;
            return value;
        },
        parseData: function (data) {
            var authData = {
                token: data.access_token,
                userName: data.userName,
                userEmail: data.userName,
                refreshToken: data.refresh_token,
                tokenType: data.token_type,
                issued: data.issued,
                expire: data.expires,
                duration: data.expires_in,
                useRefreshToken: false,
                isAuthenticated: true,
                isRefreshing: false
            };

            if (!authData.issued) {
                //console.log(data['.issued']);
                if (data['.issued']) {
                    authData.issued = data['.issued'];
                }
            }

            if (!authData.expire) {
                //console.log(data['.expires']);
                if (data['.expires']) {
                    authData.expire = data['.expires'];
                }
            }

            if (authData.refreshToken && authData.refreshToken.length)
                authData.useRefreshToken = true;

            return this.init(authData);
        },
    };

    return {
        get: get,
        put: put,
        remove: remove,
        Authorization: authorization
    };
}]);