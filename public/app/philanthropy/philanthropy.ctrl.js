(function(module) {

    function PhilanthropyCtrl($scope, $location, apiService) {
        var vm = this;
        vm.theta = null;
        vm.info = null;
        vm.slides = null;

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
    }

    module.controller('PhilanthropyCtrl', PhilanthropyCtrl);
})(angular.module('app.philanthropy'));
