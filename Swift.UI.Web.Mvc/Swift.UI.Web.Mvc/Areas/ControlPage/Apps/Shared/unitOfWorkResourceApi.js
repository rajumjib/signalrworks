
angLiveStock.factory('resourceApiControlPageUnitOfWork',
    ['$resource', 'resourceApiUnitOfWork', 'serviceHelper',
        function ($resource, resourceApiUnitOfWork, serviceHelper) {

            // addedextract:private:devTest
            var devTests = $resource(serviceHelper.BuildUrl('api/DevTests/:id'),
                { id: '@id' },
                {
                    'update': { method: 'PUT' },
                    updateDevTest: {
                        url: serviceHelper.BuildUrl("api/DevTests/Update/:id"),
                        method: 'PUT',
                        params: { id: '@id' }
                    },
                    searchDevTestList: {
                        url: serviceHelper.BuildUrl("api/DevTests/Search/:q"),
                        method: 'GET',
                        params: { q: '@q' },
                        isArray: true
                    },
                    getInformation: {
                        url: serviceHelper.BuildUrl("api/DevTests/Information"),
                        method: 'GET',
                        isArray: true
                    },
                    getSelectiveDevTests: {
                        url: serviceHelper.BuildUrl("api/DevTests/SelectiveList"),
                        method: 'POST',
                        isArray: true
                    },
                    getPagedItems: {
                        url: serviceHelper.BuildUrl("api/DevTests/PageByPage?count=:count&page=:page&sorting=:sorting"),
                        method: 'GET',
                        params: { count: '@count', page: '@page', sorting: '@sorting' },
                        isArray: true
                    }
                });
            // endextract
            // appendextract:private

            var extended = angular.extend(resourceApiUnitOfWork, {
                
                // addedextract:public:devTest
                DevTests: devTests,
                // endextract
                // appendextract:public
            });

            return extended;
        }]);
