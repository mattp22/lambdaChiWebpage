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
            });
    }

    module.config(config);
})();