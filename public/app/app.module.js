(function() {

    var module = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'jsend',
        'ngCookies',
        'app.home',
        'app.philanthropy',
        'app.recruitment',
        'app.about',
        'app.members',
        'app.contact'
    ]);

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'header@': {
                        templateUrl: 'app/shared/header.html'
                    },
                    'footer@': {
                        templateUrl: 'app/shared/footer.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }

    module.config(config);
})();
