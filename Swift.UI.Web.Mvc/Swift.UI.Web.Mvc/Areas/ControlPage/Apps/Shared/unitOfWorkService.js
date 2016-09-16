angLiveStock.factory('serviceControlPageUnitOfWork',
    ['serviceHelper', 'resourceApiUnitOfWork', 'serviceUnitOfWork',

        // addedextract:dependency:devTest
    'devTestService',
    // endextract
        // appendextract:dependency
        function (serviceHelper, resourceApiUnitOfWork, serviceUnitOfWork,

            // addedextract:parameter:devTest
    devTestService,
    // endextract
            // appendextract:parameter
            logger
            ) {

            var extended = angular.extend(serviceUnitOfWork, {

                // addedextract:public:devTest
        DevTestService: devTestService,
        // endextract
                // appendextract:public
            });

            return extended;
        }]);
