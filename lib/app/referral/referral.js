(function () {
    /**
     * TEST Module 
     * @inject Translate Provider
     */
    angular.module('boilerplate.referral', ['pascalprecht.translate', 'ui.router'])
        .config(ConfigLoader)
        .controller('referralController', referralController);

    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];
    /**
     * [ConfigLoader App Configuration is loaded here]
     * @param $stateProvider     [angular ui state provider]
     * @param $urlRouterProvider [url router provider to set otherwise]
     */
    function ConfigLoader($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('web.referral', {
                url: "/referral",
                templateUrl: "app/referral/referral.html",
                controller: 'referralController'
            });
    }

   /// TestController.$inject = ['$scope'];
    /**
     * [TestController description]
     * @param $scope [Scope variable angular]
     */
    function referralController($scope) {
        
    }
})();
