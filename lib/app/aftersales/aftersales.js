(function() {
    /**
     * TEST Module 
     * @inject Translate Provider
     */
    angular.module('boilerplate.aftersales', ['pascalprecht.translate', 'ui.router', 'ui.bootstrap'])
        .config(ConfigLoader)
        .controller('aftersalesController', aftersalesController);

    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];
    /**
     * [ConfigLoader App Configuration is loaded here]
     * @param $stateProvider     [angular ui state provider]
     * @param $urlRouterProvider [url router provider to set otherwise]
     */
    function ConfigLoader($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('web.aftersales', {
                url: "/aftersales",
                templateUrl: "app/aftersales/aftersales.html",
                controller: 'aftersalesController'
            });
    }

    aftersalesController.$inject = ['$scope', '$uibModal'];
    /**
     * [TestController description]
     * @param $scope [Scope variable angular]
     */


    function aftersalesController($scope, $uibModal) {}





})();
