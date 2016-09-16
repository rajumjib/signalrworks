angLiveStock.factory('initControlPageUnitOfWork', ['initUnitOfWork', function (initUnitOfWork) {

    var toDay = initUnitOfWork.GetToDay();
    var blankImage = initUnitOfWork.BlankImage;

    var screenControlPageConfig = {};
    
    // addedextract:private:devTest
    var devTest = {
        init: function (data) {
            var value = {};
            value.id = data ? data.id || 0 : 0;
            value.campaignName = data ? data.campaignName || '' : '';
            value.date = data ? data.date || '' : toDay;
            value.clicks = data ? data.clicks || 0 : 0;
            value.conversions = data ? data.conversions || 0 : 0;
            value.impressions = data ? data.impressions || 0 : 0;
            value.affiliateName = data ? data.affiliateName || '' : '';
            value.arrange = data ? data.arrange || 0 : 1;
            value.timeStamp = data ? data.timeStamp || '' : '';
            return value;
        },
        copy: function (data, value) {
            if (!value)
                value = {};
            value.id = data ? data.Id || 0 : 0;
            value.campaignName = data ? data.CampaignName || '' : '';
            value.date = data ? data.Date || '' : toDay;
            value.clicks = data ? data.Clicks || 0 : 0;
            value.conversions = data ? data.Conversions || 0 : 0;
            value.impressions = data ? data.Impressions || 0 : 0;
            value.affiliateName = data ? data.AffiliateName || '' : '';
            value.arrange = data ? data.Arrange || 0 : 1;
            value.timeStamp = data ? data.TimeStamp || '' : '';
            return value;
        }
    };
    screenControlPageConfig.devTest = {
        screenId: 1,
        screenAction: {
            view: 1,
            add: 2,
            update: 3,
            remove: 4
        }
    };
    // endextract
    // appendextract:private

    var extended = angular.extend(initUnitOfWork, {
        ScreenConfig: screenControlPageConfig,
        
        // addedextract:public:devTest
        DevTest: devTest,
        // endextract
        // appendextract:public
    });

    return extended;
}]);
