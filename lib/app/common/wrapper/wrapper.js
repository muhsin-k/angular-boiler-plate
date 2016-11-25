(function() {
    /**
     * TEST Module 
     * @inject Translate Provider
     */
    angular.module('boilerplate.wrapper', ['pascalprecht.translate', 'ui.router'])
        .controller('wrapperController', wrapperController);

    /**
     * [ConfigLoader App Configuration is loaded here]
     * @param $stateProvider     [angular ui state provider]
     * @param $urlRouterProvider [url router provider to set otherwise]
     */

    wrapperController.$inject = ['$scope','$location'];
    /**
     * [TestController description]
     * @param $scope [Scope variable angular]
     */
    function wrapperController($scope,$location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }
})();
