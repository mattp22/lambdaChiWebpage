(function(module) {

    function RecruitmentCtrl($scope, $location, apiService, $cookies, $modal) {
        var vm = this;
        vm.delta = null;
        vm.springEvents = null;
        vm.fallEvents = null;
        vm.loggedIn = $cookies.get('loggedIn');

        getDelta();
        getSpringEvents();
        getFallEvents();

        function getDelta() {
            if ($location.path() === "/recruitment") {
                apiService.delta().then(function(results) {
                    vm.delta = results;
                });
            }
        }

        function getSpringEvents() {
            if ($location.path() === "/recruitment/spring") {
                apiService.springEvents().then(function(results) {
                    vm.springEvents = results;
                });
            }
        }

        function getFallEvents() {
            if ($location.path() === "/recruitment/fall") {
                apiService.fallEvents().then(function(results) {
                    vm.fallEvents = results;
                });
            }
        }

        vm.edit = function(delta, index) {
            $scope.delta = angular.copy(delta);
            $scope.index = index;

            $modal.open({
                templateUrl: 'app/recruitment/deltaEdit.html',
                controller: 'DeltaEditCtrl',
                controllerAs: 'vm',
                scope: $scope
            }).result.finally(function() {
                getDelta();
            });
        };
    }

    module.controller('RecruitmentCtrl', RecruitmentCtrl);
})(angular.module('app.recruitment'));
