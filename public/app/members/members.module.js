(function () {
    var module = angular.module('app.members', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.members', {
                url: '/members',
                views: {
                    'content@': {
                        templateUrl: 'app/members/members.html'
                    }
                }
            })
            .state('app.members.alumni', {
                url: '/alumni',
                views: {
                    'content@': {
                        templateUrl: 'app/members/alumni.html'
                    }
                }
            });
    }

    module.config(config);
})();