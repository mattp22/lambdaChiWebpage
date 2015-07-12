(function(module) {

    function HeaderCtrl($scope, $location, $modal, $cookies, $state) {
        var vm = this;

        vm.loggedIn = $cookies.get('loggedIn');

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

        vm.admin = function() {
            $modal.open({
                templateUrl: 'app/login/admin.html',
                controller: 'AdminCtrl as vm',
                scope: $scope
            }).result.finally(function() {
                vm.loggedIn = $cookies.get('loggedIn');
                $state.reload();
            });
        };

        vm.logout = function() {
            $cookies.put('loggedIn', '');
            vm.loggedIn = $cookies.get('loggedIn');
            $state.reload();
            alert("You have successfully logged out");
        };
    }

    module.controller('HeaderCtrl', HeaderCtrl);
})(angular.module('app'));
