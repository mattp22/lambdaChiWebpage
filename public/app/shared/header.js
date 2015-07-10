(function(module) {

    function HeaderCtrl($scope, $location, $modal) {
        var vm = this;

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };

        vm.login = function() {
        	$modal.open({
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl as vm',
                scope: $scope
            });
        };
    }

    module.controller('HeaderCtrl', HeaderCtrl);
})(angular.module('app'));