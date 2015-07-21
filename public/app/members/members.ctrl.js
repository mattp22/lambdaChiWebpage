(function(module) {

    function MembersCtrl($scope, apiService, $cookies, $modal, $location) {
        var vm = this;
        vm.rho = null;
        vm.jobs = null;
        vm.showed = null;
        vm.loggedIn = $cookies.get('loggedIn');
        getRho();
        getJobs();

        function getRho() {
            if ($location.path() === "/members" || $location.path() === "/members/alumni") {
                apiService.rho().then(function(results) {
                    vm.rho = results;
                });
            }
        }

        function getJobs() {
            if ($location.path() === "/members/brothers-page") {
                apiService.getJobs().then(function(results) {
                    vm.jobs = results;
                });
            }
        }

        vm.editRho = function(rho, index) {
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

        vm.addEntry = function() {
            $modal.open({
                templateUrl: 'app/members/jobEdit.html',
                controller: 'JobEditCtrl as vm',
                scope: $scope
            }).result.finally(function() {
                getJobs();
            });
        };

        vm.show = function(result) {
            if (vm.showed == result) {
                vm.showed = null;
            } else {
                vm.showed = result;
            }
        };

        vm.deleteEntry = function(index) {
            if (confirm("Are you sure you want to delete this job entry?\n\nIf you are not the original poster, please do not delete.")) {
                apiService.deleteEntry(index).then(function() {
                    getJobs();
                });
            }
        };
    }

    module.controller('MembersCtrl', MembersCtrl);
})(angular.module('app.members'));
