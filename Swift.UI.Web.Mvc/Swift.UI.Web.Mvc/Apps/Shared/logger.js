
logger = function ($log) {

    function log(msg) {
        $log.log(msg);
    };

    return {
        Log: log
    };
};

angLiveStockManager.service('logger', ['$log', logger]);
