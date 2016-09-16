"use strict";
angLiveStockManager.directive("angConfirmModal", ['$uibModal', function ($uibModal) {
    return {
        restrict: "A",
        scope: {
            approve: '&onApprove',
            deny: '&onDeny',
            closable: '=closable',
            id: '@modalId',
            title: '@title',
            message: '@message',
            content: '@content'
        },
        //transclude: true,
        //templateUrl: "/Apps/Components/Global/Views/confirmModal.html",
        link: function (scope, element, attrs, ngModelCtrl) {

            var modalInstance;
            
            scope.closeConfirm = function () {
                //angular.element('#' + scope.id).modal('hide');
                modalInstance.dismiss('cancel');
            };
            
            element.on('click', function (e) {
                //angular.element('#' + scope.id).modal('show');                
                modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "/Apps/Components/Global/Views/confirmModal.html",
                    controller: ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
                        $scope.id = scope.id;
                        $scope.title = scope.title;
                        $scope.message = scope.message;
                        $scope.content = scope.content;

                        $scope.approve = function () {
                            scope.approve();
                            $uibModalInstance.dismiss('cancel');
                        };

                        $scope.deny = function () {
                            scope.deny();
                            $uibModalInstance.dismiss('cancel');
                        };

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }],
                    size: 'sm'
                });
            });
        }
    };
}]);