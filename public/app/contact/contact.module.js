(function () {
    var module = angular.module('app.contact', []);

    function config($stateProvider) {
        $stateProvider
            .state('app.contact', {
                url: '/contact',
                views: {
                    'content@': {
                        templateUrl: 'app/contact/contact.html'
                    }
                }
            });
    }

    module.config(config);
})();
