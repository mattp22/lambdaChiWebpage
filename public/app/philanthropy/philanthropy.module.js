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
            })
            .state('app.philanthropy.info', {
                url: '/info',
                views: {
                    'content@': {
                        templateUrl: 'app/philanthropy/info.html'
                    }
                }
            })
            .state('app.philanthropy.photos', {
                url: '/photos',
                views: {
                    'content@': {
                        templateUrl: 'app/philanthropy/photos.html'
                    }
                }
            });
    }

    module.config(config);
})();
