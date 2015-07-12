(function(module) {

    function EventEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.event = $scope.event;

        vm.submit = function() {
            var data = {
                event: vm.event,
                index: $scope.index
            };

            if ($scope.season === "spring") {
                apiService.editSpringEvent(data).then(function() {
                    $modalInstance.close();
                });
            } else {
                apiService.editFallEvent(data).then(function() {
                    $modalInstance.close();
                });
            }
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('EventEditCtrl', EventEditCtrl);
})(angular.module('app.recruitment'));
