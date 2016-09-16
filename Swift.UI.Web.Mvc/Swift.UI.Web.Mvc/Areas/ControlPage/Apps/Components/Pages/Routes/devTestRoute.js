        angLiveStock.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/devTest");
            $stateProvider
                .state('devTest', {
                    url: '/devTest',
                    //controller: 'devTestController',
                    template: '<div class="row"><div ui-view></div></div>',
                    abstract: true,
                })
                .state('devTest.list', {
                    url: '',
                    controller: 'devTestController',
                    template: $('#viewList').html()
                })
                .state('devTest.add', {
                    url: '/add',
                    views: {
                        '': {
                            controller: 'devTestController',
                            templateUrl: devTestRoute.Create //'@Url.Action("Create")'
                        },
                        'viewTitle': {
                            template: '<span class="glyphicon glyphicon-file"></span> Create'
                        }
                    }
                })
                .state('devTest.edit', {
                    url: '/edit/{Id:[0-9a-zA-Z]*}',
                    views: {
                        '': {
                            controller: 'devTestController',
                            templateUrl: devTestRoute.Edit //'@Url.Action("Edit")'
                        },
                        'viewTitle': {
                            template: '<span class="glyphicon glyphicon-edit"></span> Edit'
                        }
                    }
                })
                .state('devTest.detail', {
                    url: '/detail/{Id:[0-9a-zA-Z]*}',
                    views: {
                        '': {
                            controller: 'devTestController',
                            templateUrl: devTestRoute.Details //'@Url.Action("Details")'
                        },
                        'viewTitle': {
                            template: '<span class="glyphicon glyphicon-chevron-right"></span> Detail'
                        }
                    }
                })
                .state('devTest.delete', {
                    url: '/delete/{Id:[0-9a-zA-Z]*}',
                    views: {
                        '': {
                            controller: 'devTestController',
                            templateUrl: devTestRoute.Delete //'@Url.Action("Delete")'
                        }
                    }
                })
                .state('devTest.nodata', {
                    url: '/invalid/{Id:[0-9a-zA-Z]*}',
                    views: {
                        '': {
                            controller: 'devTestController',
                            template: $('#notFound').html()
                        }
                    }
                })
                .state('devTest.removed', {
                    url: '/removed/{Id:[0-9a-zA-Z]*}',
                    views: {
                        '': {
                            controller: 'devTestController',
                            template: $('#noLongerExist').html()
                        }
                    }
                })

        }]);
