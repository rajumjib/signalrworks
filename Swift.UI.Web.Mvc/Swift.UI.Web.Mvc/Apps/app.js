
var angLiveStockManager = angular.module('angLiveStockManager',
    [
        'ngResource',
        'ngRoute',
        'ui.bootstrap'
    ]);

angLiveStockManager.config(function (uibDatepickerConfig, uibDatepickerPopupConfig) {
    uibDatepickerConfig.startingDay = 6;
    uibDatepickerConfig.showWeeks = false;
    uibDatepickerConfig.formatDay = "dd";
    uibDatepickerConfig.formatMonth = "MM";
    uibDatepickerConfig.formatYear = "yyyy";
    uibDatepickerPopupConfig.uibDatepickerPopup = configData.dateFormat;
    uibDatepickerPopupConfig.showButtonBar = false;

});