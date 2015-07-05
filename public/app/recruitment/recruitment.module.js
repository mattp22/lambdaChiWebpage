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
            .state('app.recruitment.spring15', {
                url: '/spring15',
                views: {
                    'content@': {
                        templateUrl: 'app/recruitment/spring15.html'
                    }
                }
            });
    }

    module.config(config);
})();