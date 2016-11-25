    (function() {
        /**
         * TEST Module 
         * @inject Translate Provider
         */
        angular.module('boilerplate.dashboard', ['ui.router'])
            .config(ConfigLoader)
            .controller('dashboardController', dashboardController);

        ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];
        /**
         * [ConfigLoader App Configuration is loaded here]
         * @param $stateProvider     [angular ui state provider]
         * @param $urlRouterProvider [url router provider to set otherwise]
         */
        function ConfigLoader($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('web.dashboard', {
                    url: "/dashboard",
                    templateUrl: "app/dashboard/dashboard.html",
                    controller: 'dashboardController'
                });
        }
        dashboardController.$inject = ['$scope'];
        /// TestController.$inject = ['$scope'];
        /**
         * [TestController description]
         * @param $scope [Scope variable angular]
         */
        function dashboardController($scope, Service) {


            $scope.labels = [];
            $scope.data = [7, 8, 3, 9];
            $scope.allServices = [{
                "name": "Abin",
                "present": 1,
                "absent": 2,
                "updatedAt": new Date()
            }, {
                "name": "Kiran",
                "present": 3,
                "absent": 5,
                "updatedAt": new Date()
            }, {
                "name": "Slaam",
                "present": 3,
                "absent": 9,
                "updatedAt": new Date()
            }, {
                "name": "Shaji",
                "present": 1,
                "absent": 8,
                "updatedAt": new Date()
            }, {
                "name": "Ameer",
                "present": 1,
                "absent": 6,
                "updatedAt": new Date()
            }, {
                "name": "Sasi",
                "present": 3,
                "absent": 10,
                "updatedAt": new Date() - 1
            }];
            $scope.labels1 = ["Agent1", "Agent2", "Agent3"];
            $scope.options = {
                legend: { display: false },
                responsive: false,
                maintainAspectRatio: false
            };


            $scope.colors = ['#E74C3C', '#10A4E4', '#ff8e72'];
            //  $scope.labels1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            $scope.type1 = 'StackedBar';
            $scope.series1 = ['OPENED', 'CLOSED'];
            $scope.options1 = {
                responsive: true,
                scaleShowVerticalLines: false,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            };

            $scope.data1 = [
                [15, 20, 12, 16, 7, 8, 15, 20, 12, 16, 7, 8, 10],
                [15, 25, 8, 14, 8, 8, 15, 20, 12, 16, 7, 8, 10]
            ];




        }
    })();
