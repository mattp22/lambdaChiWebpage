(function () {
    var module = angular.module('app.recruitment', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.recruitment', {
                url: '/recruitment',
                views: {
                    'content@': {
                        templateUrl: 'app/recruitment/recruitment.html'
                    }
                }
            })
            .state('app.recruitment.spring', {
                url: '/spring',
                views: {
                    'content@': {
                        templateUrl: 'app/recruitment/spring.html'
                    }
                }
            })
            .state('app.recruitment.fall', {
                url: '/fall',
                views: {
                    'content@': {
                        templateUrl: 'app/recruitment/fall.html'
                    }
                }
            });
    }

    module.config(config);
})();