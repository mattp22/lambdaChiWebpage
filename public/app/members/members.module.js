(function() {
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
            })
            .state('app.members.brothers', {
                url: '/brothers-page',
                views: {
                    'content@': {
                        templateUrl: 'app/members/brothers-page.html'
                    }
                }
            });
    }

    module.config(config);
})();
