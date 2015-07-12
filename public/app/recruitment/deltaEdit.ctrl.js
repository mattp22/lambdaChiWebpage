(function(module) {

    function DeltaEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.delta = $scope.delta;

        vm.submit = function() {
            var data = {
                delta: vm.delta,
                index: $scope.index
            };

            apiService.editDelta(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('DeltaEditCtrl', DeltaEditCtrl);
})(angular.module('app.recruitment'));
