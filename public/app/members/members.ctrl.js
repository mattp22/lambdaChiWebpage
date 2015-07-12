(function(module) {

    function MembersCtrl($scope, apiService, $cookies, $modal) {
        var vm = this;
        vm.rho = null;
        vm.loggedIn = $cookies.get('loggedIn');

        getRho();

        function getRho() {
            apiService.rho().then(function(results) {
                vm.rho = results;
            });
        }

        vm.edit = function(rho, index) {
            $scope.rho = angular.copy(rho);
            $scope.index = index;

            $modal.open({
                templateUrl: 'app/members/rhoEdit.html',
                controller: 'RhoEditCtrl',
                controllerAs: 'vm',
                scope: $scope
            }).result.finally(function() {
                getRho();
            });
        };
    }

    module.controller('MembersCtrl', MembersCtrl);
})(angular.module('app.members'));
