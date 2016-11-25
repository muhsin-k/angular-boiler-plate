(function() {
    /**
     * TEST Module 
     * @inject Translate Provider
     */
    angular.module('boilerplate.login', ['pascalprecht.translate', 'ui.router'])
        .config(ConfigLoader)
        .controller('loginController', loginController);

    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider'];
    /**
     * [ConfigLoader App Configuration is loaded here]
     * @param $stateProvider     [angular ui state provider]
     * @param $urlRouterProvider [url router provider to set otherwise]
     */
    function ConfigLoader($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "app/login/login.html",
                controller: 'loginController'
            });
    }

    loginController.$inject = ['$scope', '$state'];
    /**
     * [TestController description]
     * @param $scope [Scope variable angular]
     */
    function loginController($scope, $state) {
        $scope.login = function() {
            $state.go('web.dashboard');
        }
    }
})();
