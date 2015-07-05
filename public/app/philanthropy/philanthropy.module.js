(function () {
    var module = angular.module('app.philanthropy', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.philanthropy', {
                url: '/philanthropy',
                views: {
                    'content@': {
                        templateUrl: 'app/philanthropy/philanthropy.html'
                    }
                }
            });
    }

    module.config(config);
})();
