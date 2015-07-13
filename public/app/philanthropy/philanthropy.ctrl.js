(function(module) {

    function PhilanthropyCtrl($scope, $location, apiService, $cookies, $modal) {
        var vm = this;
        vm.theta = null;
        vm.info = null;
        vm.slides = null;
        vm.loggedIn = $cookies.get('loggedIn');

        getTheta();
        getInfo();
        getSlides();

        function getTheta() {
            if ($location.path() === "/philanthropy") {
                apiService.theta().then(function(results) {
                    vm.theta = results;
                });
            }
        }

        function getInfo() {
            if ($location.path() === "/philanthropy/info") {
                apiService.philanthropyInfo().then(function(results) {
                    vm.info = results;
                });
            }
        }

        function getSlides() {
            if ($location.path() === "/philanthropy/photos") {
                apiService.philanthropySlides().then(function(results) {
                    vm.slides = results;
                });
            }
        }

        vm.editTheta = function(theta, index) {
            $scope.theta = angular.copy(theta);
            $scope.index = index;

            $modal.open({
                templateUrl: 'app/philanthropy/thetaEdit.html',
                controller: 'ThetaEditCtrl',
                controllerAs: 'vm',
                scope: $scope
            }).result.finally(function() {
                getTheta();
            });
        };
    }

    module.controller('PhilanthropyCtrl', PhilanthropyCtrl);
})(angular.module('app.philanthropy'));
