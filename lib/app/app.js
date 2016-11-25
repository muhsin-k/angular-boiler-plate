(function() {
    'use strict';
    /**
     * Main Module 
     * @inject Translate Provider
     */
    angular.module('faw', [
            'pascalprecht.translate',
            'ui.router',
            'ngMessages',
            'ui.bootstrap',
            'chart.js',
            'ngSanitize',
            'boilerplate.dashboard',
            'boilerplate.referral',
            'boilerplate.wrapper',
            'boilerplate.login',
            'boilerplate.aftersales',
            'boilerplate.factories'
        ])
        .constant('appConfig', {
            baseUrlNode: 'http://localhost:7000/api/v1/'
        })
        .config(ConfigLoader)
        .config(TranslationProvider);
    ConfigLoader.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    /**
     * [ConfigLoader App Configuration is loaded here]
     * @param $stateProvider     [angular ui state provider]
     * @param $urlRouterProvider [url router provider to set otherwise]
     */
    function ConfigLoader($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('web', {
                url: '/web',
                abstract: true,
                templateUrl: 'app/common/wrapper/wrapper.html',
                controller: 'wrapperController'
            });
        $urlRouterProvider.otherwise('/login');
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

    TranslationProvider.$inject = ['$translateProvider'];

    function TranslationProvider($translateProvider) {
        $translateProvider.translations('en', {
            'TEST': {
                'HEADING': 'Heading from language file'
            }
        });
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage('en');
    }
})();
