(function () {
    var module = angular.module('app.about', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.about', {
                url: '/about',
                views: {
                    'content@': {
                        templateUrl: 'app/about/about.html'
                    }
                }
            })
            .state('app.about.history', {
                url: '/history',
                views: {
                    'content@': {
                        templateUrl: 'app/about/history.html'
                    }
                }
            });
    }

    module.config(config);
})();