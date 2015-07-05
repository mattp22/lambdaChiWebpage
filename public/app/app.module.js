(function() {

    var module = angular.module('app', [
    	'ui.router',
    	'ui.bootstrap',
    	'app.home',
        'app.philanthropy',
        'app.recruitment',
        'app.about',
        'app.members'
    ]);

    function config($stateProvider, $urlRouterProvider) {

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
    }

    module.config(config);
})();
