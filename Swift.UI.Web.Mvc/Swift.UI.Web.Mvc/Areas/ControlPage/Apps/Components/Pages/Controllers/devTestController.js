(function (app) {
    'use strict';
    // $location, $routeParams
    app.devTestController = function ($scope, $rootScope, $stateParams, $state, $filter, Hub, commonLibrary, initUnitOfWork, serviceUnitOfWork, serviceHelper, devTestService) {

        $scope.showBookmark = true;
        $scope.showActive = true;
        $scope.showEdit = true;

        $scope.config = configData;
        $scope.screenId = initUnitOfWork.ScreenControlPageConfig ? initUnitOfWork.ScreenControlPageConfig.devTest.screenId : 0;
        $scope.viewPage = {
            isSaving: false,
            isRemoving: false
        };

        $scope.validationErrors = [];
        $scope.validate = {
            NoFutureDate: { maxDate: new Date() }
        };
        $scope.devTestFilter = {};

        initialize();

        function initialize() {
            $scope.dataChanged = 0;
            if ($stateParams.Id > 0) {
                var Id = $stateParams.Id;
                if (['devTest.edit', 'devTest.nodata', 'devTest.removed'].indexOf($state.current.name) < 0) {
                    //$scope.devTest = devTestService.GetDevTest(Id);
                    devTestService.GetDevTest(Id).$promise
                    .then(function (data) {
                        $scope.devTest = data;
                        visit(data.id);
                    }).catch(notFound);
                }
            }

            var listPromises = {};
            if ($state.current.name == 'devTest.add' || $state.current.name == 'devTest.edit') {
            }

            switch ($state.current.name) {
                case 'devTest.add':
                    $scope.devTest = initUnitOfWork.DevTest ? initUnitOfWork.DevTest.init() : {};
                    break;
                case 'devTest.list':
                    $scope.predicate = 'id';
                    $scope.reverse = true;
                    $scope.devTests = [];
                    //$scope.devTests = devTestService.GetDevTests();
                    devTestService.GetDevTests().$promise
                    .then(function (data) {
                        $scope.devTests = data;
                    });
                    break;
                case 'devTest.edit':
                    devTestService.EditDevTest($stateParams.Id)
                    .then(function (data) {
                        $scope.devTest = data[0];
                        visit(data[0].id);
                    }).catch(notFound);
                    break;
            }
        }

        function notFound() {
            var id = $stateParams.Id;
            //$location.url('#/devTest/invalid/' + id);
            $state.go('devTest.nodata', { Id: id });
        }

        $scope.listOrderBy = function (predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        $scope.resetDevTest = function () {
            clearError();
            initialize();
        };

        $scope.addDevTest = function (devTest) {
            clearError();
            var data = { devTest: $scope.devTest };
            var valid = devTestService.IsValidForAdd(data);
            if (!valid || !valid.status) {
                $scope.validationErrors = valid.errors;
                return;
            }
            $scope.viewPage.isSaving = true;
            devTestService.AddDevTest(data).$promise
            .then(success).catch(failed);
        };

        $scope.updateDevTest = function (devTest) {
            clearError();
            var data = { devTest: $scope.devTest };
            var valid = devTestService.IsValidForUpdate(data);
            if (!valid || !valid.status) {
                $scope.validationErrors = valid.errors;
                return;
            }
            $scope.viewPage.isSaving = true;
            devTestService.UpdateDevTest(data).$promise
            .then(success).catch(failed);
        };

        $scope.removeDevTest = function (devTest) {
            clearError();
            var data = { devTest: $scope.devTest };
            var valid = devTestService.IsValidForRemove(data);
            if (!valid || !valid.status) {
                $scope.validationErrors = valid.errors;
                return;
            }
            $scope.viewPage.isRemoving = true;
            devTestService.RemoveDevTest(devTest.id).$promise
            .then(success).catch(function (response) {
                if (response.status == 404) {
                    $scope.errorMessage = response.data;
                }
                else {
                    $scope.errorMessage = devTestMsg.RemoveFailed;
                }
            });
        };

        $scope.validateDevTest = function (devTestForm) {
            clearError();
            if (devTestForm.$invalid) {
                $scope.validationErrors = serviceHelper.ProcessErrors(devTestForm.$error);
            }
        };

        function success(data) {
            incident();
            //$location.url('#/devTest/list');
            $state.go('devTest.list');
        }

        function failed(response) {
            $scope.viewPage.isSaving = false;
            if (response.status == 404) {
                $scope.errorMessage = devTestMsg.SaveError;
            }
            if (response.status === 400) {
                $scope.validationErrors = serviceHelper.ParseErrors(response);
            }
            else {
                $scope.errorMessage = devTestMsg.SaveFailed;
            }
        }

        function clearError() {
            $scope.errorMessage = "";
            delete $scope.validationErrors;
        }

        // SignalR Hub setup
        var hub = new Hub('dataUpdateNotification', {
            listeners: {
                'add': function (id, devTest) {
                    switch ($state.current.name) {
                        case 'devTest.list':
                            if ($scope.devTests.length) {
                                var found = $filter('filter')($scope.devTests, { id: id });
                                if (!found.length) {
                                    $scope.devTests.push(initUnitOfWork.DevTest.copy(devTest, {}));
                                }
                            }
                            break;
                    }
                    $rootScope.$apply();
                },
                'modify': function (id, devTest) {
                    switch ($state.current.name) {
                        case 'devTest.list':
                            if ($scope.devTests.length) {
                                var keyIndex = 0;
                                angular.forEach($scope.devTests, function (value, key) {
                                    if (value.id == id) {
                                        keyIndex = key + 1;
                                    }
                                });
                                if (!keyIndex)
                                    $scope.devTests.push(initUnitOfWork.DevTest.copy(devTest, {}));
                                else {
                                    initUnitOfWork.DevTest.copy(devTest, $scope.devTests[keyIndex - 1]);
                                }
                            }
                            break;
                        default:
                            if ($scope.devTest && $scope.devTest.id == id) {
                                $scope.dataChanged = $scope.dataChanged + 1;
                                switch ($state.current.name) {
                                    case 'devTest.edit':
                                        $scope.messageConfirm = commonLibrary.formatText(devTestMsg.SaveConfirmMsg, $scope.dataChanged);
                                        $scope.errorMessage = devTestMsg.ModifiedDataReloaded;
                                        break;
                                    case 'devTest.delete':
                                        $scope.messageConfirm = commonLibrary.formatText(devTestMsg.DeleteConfirmMsg, $scope.dataChanged);
                                        break;
                                }
                                initUnitOfWork.DevTest.copy(devTest, $scope.devTest);
                            }
                            break;
                    }
                    $rootScope.$apply();
                },
                'remove': function (id) {
                    switch ($state.current.name) {
                        case 'devTest.list':
                            if ($scope.devTests.length) {
                                var keyIndex = 0;
                                angular.forEach($scope.devTests, function (value, key) {
                                    if (value.id == id) {
                                        keyIndex = key + 1;
                                    }
                                });
                                if (keyIndex)
                                    $scope.devTests.splice(keyIndex - 1, 1);
                            }
                            break;
                        default:
                            if ($scope.devTest && $scope.devTest.id == id) {
                                //$location.url('#/devTest/removed/' + id);
                                $state.go('devTest.removed', { Id: id });
                            }
                            break;
                    }
                    $rootScope.$apply();
                }
            },
            methods: ['joinGroup', 'addDevTest', 'modifyDevTest', 'removeDevTest'],
            stateChanged: function (state) {
                switch (state.newState) {
                    case $.signalR.connectionState.connecting:
                        break;
                    case $.signalR.connectionState.connected:
                        hub.joinGroup('DevTest');
                        break;
                    case $.signalR.connectionState.reconnecting:
                        break;
                    case $.signalR.connectionState.disconnected:
                        break;
                }
            },
            errorHandler: function (error) {
                console.log(error);
            }
        });

        function incident() {
            var devTest = $scope.devTest;
            if (devTest) {
                var screenActionId = 0;
                var screenAction = initUnitOfWork.ScreenControlPageConfig ? initUnitOfWork.ScreenControlPageConfig.devTest.screenAction : { add: 0, update: 0, remove: 0 };
                switch ($state.current.name) {
                    case 'devTest.add':
                        screenActionId = screenAction.add;
                        //hub.addDevTest(devTest.id, devTest);
                        break;
                    case 'devTest.edit':
                        screenActionId = screenAction.update;
                        //hub.modifyDevTest(devTest.id, devTest);
                        break;
                    case 'devTest.delete':
                        screenActionId = screenAction.remove;
                        //hub.removeDevTest(devTest.id);
                        var removed = { screenId: $scope.screenId, isActive: false, recordId: devTest.id };
                        break;
                }
                if (screenActionId) {
                    var occurrence = { screenId: $scope.screenId, screenActionId: screenActionId, recordId: devTest.id };
                }
            }
        }

        function visit(id) {
            var visited = { screenId: $scope.screenId, recordId: id };
        }

        $scope.getList = function (idList) {
            var promise = devTestService.GetDevTests().$promise
                .then(function (data) {
                    var list = [];
                    angular.forEach(data, function (value, key) {
                        var item = { recordId: value.id, caption: value.campaignName || value.id };
                        list.push(item);
                    });
                    return list;
                });
            return promise;
        };

        $scope.getRecentList = function (pageSize, orderby) {
            var recentList = [];
            return recentList;
        };

        $scope.toggleBookmark = function (devTest, $index) {
            var isMarked = devTest.isMarked;
            devTest.isMarked = !isMarked;
            
        };

        
        $scope.upward = function (devTest, $index) {
            var arrange = devTest.arrange;
            devTest.arrange = arrange + 1;
            var data = { devTest: devTest };
            devTestService.PreserveDevTest(data).$promise
            .then(function (data) {
                angular.forEach($scope.devTests, function (value, key) {
                    if (value.id == data.id) {
                        $scope.devTests[key] = data;
                    }
                });
            }).catch(function () {
                devTest.arrange = arrange;
            });
        };

        $scope.downward = function (devTest, $index) {
            var arrange = devTest.arrange;
            devTest.arrange = arrange - 1;
            var data = { devTest: devTest };
            devTestService.PreserveDevTest(data).$promise
            .then(function (data) {
                angular.forEach($scope.devTests, function (value, key) {
                    if (value.id == data.id) {
                        $scope.devTests[key] = data;
                    }
                });
            }).catch(function () {
                devTest.arrange = arrange;
            });
        };

        $scope.toggleVisibility = function (devTest, $index) {
            var arrange = devTest.arrange;
            devTest.arrange = devTest.arrange ? 0 : 1;
            var data = { devTest: devTest };
            devTestService.PreserveDevTest(data).$promise
            .then(function (data) {
                angular.forEach($scope.devTests, function (value, key) {
                    if (value.id == data.id) {
                        $scope.devTests[key] = data;
                    }
                });
            }).catch(function () {
                devTest.arrange = arrange;
            });
        };
    };
})(window.app);
