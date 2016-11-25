(function() {

    angular.module('boilerplate.factories', [])
        .factory('Service', Service)
        .factory('$localStorage', localStorage);


    localStorage.$inject = ['$window'];

    function localStorage($window) {
        return {
            set: function(key, value) {
                $window.localStorage[key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function(key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
            },
            remove: function(key) {
                delete $window.localStorage[key];
            },
            clear: function() {
                $window.localStorage.clear();
            }
        };
    }
    Service.$inject = ['$http', '$localStorage', 'appConfig'];

    function Service($http, $localStorage, appConfig) {

        return {
            getAllServices: function() {
                return $http({
                    method: 'GET',
                    url: appConfig.baseUrlNode + 'service',
                    'Content-Type': 'application/json'
                });
            },
            getServicesCounts: function() {
                return $http({
                    method: 'GET',
                    url: appConfig.baseUrlNode + 'service/items/total',
                    'Content-Type': 'application/json'
                });
            }
        };
    }


})();
