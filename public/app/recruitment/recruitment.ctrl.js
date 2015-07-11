(function(module) {

    function RecruitmentCtrl($scope, $location, apiService) {
        var vm = this;
        vm.delta = null;
        vm.events = null;

        getDelta();
        getEvents();

        function getDelta() {
            if ($location.path() === "/recruitment") {
                apiService.delta().then(function(results) {
                    vm.delta = results;
                });
            }
        }

        function getEvents() {
            if ($location.path() === "/recruitment/spring15") {
                apiService.recruitmentEvents().then(function(results) {
                    vm.events = results;
                });
            }
        }
    }

    module.controller('RecruitmentCtrl', RecruitmentCtrl);
})(angular.module('app.recruitment'));
