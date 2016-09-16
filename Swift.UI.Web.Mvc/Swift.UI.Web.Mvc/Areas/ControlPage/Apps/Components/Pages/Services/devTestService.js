(function (app) {
    'use strict';

        // $http, $resource, serviceHelper
        app.devTestService = function ( $q, commonLibrary, initUnitOfWork, resourceApiUnitOfWork) {

            var DevTests = resourceApiUnitOfWork.DevTests;

            function getDevTests() {
                return DevTests.query();
            };

            function getDevTest(id) {
                return DevTests.get({ id : id });
            };

            function addDevTest(data) {
                var devTest = data.devTest;
                return DevTests.save(devTest);
            };

            function updateDevTest(data) {
                var devTest = data.devTest;
                return DevTests.update({ id : devTest.id }, devTest);
            };

            function preserveDevTest(data) {
                var devTest = data.devTest;
                return DevTests.updateDevTest({ id : devTest.id }, devTest);
            };

            function deleteDevTest(id) {
                return DevTests.delete({ id : id });
            };

            function editDevTest(id) {
                var promises = [
                    getDevTest(id).$promise,
                ];
                var promise = $q.all(promises);
                return promise;
            };

            function isValidForBoth(data) {
                var valid = true;
                var validationErrors = [];
                var devTest = data.devTest;

                return { status: valid, errors: validationErrors };
            };

            function isValidForUpdate(data) {
                var valid = isValidForBoth(data);
                var devTest = data.devTest;
                if (valid.status && !devTest.id) {
                    valid.status = false;
                    valid.errors.push(devTestMsg.UpdateWithoutID);
                }
                return valid;
            }

            function isValidForAdd(data) {
                var valid = isValidForBoth(data);
                var devTest = data.devTest;
                if (valid.status && devTest.id) {
                    valid.status = false;
                    valid.errors.push(devTestMsg.AddWithID);
                }
                return valid;
            }

            function isValidForRemove(data) {
                var valid = true;
                var validationErrors = [];
                var devTest = data.devTest;
                if (!devTest.id) {
                    valid = false;
                    validationErrors.push(devTestMsg.RemoveWithoutID);
                }
                return { status: valid, errors: validationErrors };
            };


            function getSelectiveDevTests(idList) {
                return DevTests.getSelectiveDevTests({ ids: idList });
            };

            function getPagedDevTests(params) {
                if (!params.pageSize)
                    params.pageSize = 5;
                if (!params.pageNo)
                    params.pageNo = 1;
                if (!params.orderBy)
                    params.orderBy = 'arrange';

                var data = { count: params.pageSize, page: params.pageNo, sorting: params.orderBy };

                if (!params.ascending)
                    data.ascending = false;
                else
                    data.ascending = true;


                //return DevTests.query(data);
                return DevTests.getPagedItems(data);
            };

            return {
                GetDevTests: getDevTests,
                GetDevTest: getDevTest,
                AddDevTest: addDevTest,
                UpdateDevTest: updateDevTest,
                PreserveDevTest: preserveDevTest,
                RemoveDevTest: deleteDevTest,
                EditDevTest: editDevTest,

                IsValidForUpdate: isValidForUpdate,
                IsValidForAdd: isValidForAdd,
                IsValidForRemove: isValidForRemove,

                GetSelectiveDevTests: getSelectiveDevTests,
                GetPagedDevTests: getPagedDevTests
            };

        };
})(window.app);
