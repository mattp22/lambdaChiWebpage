(function(module) {

    function ThetaEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.theta = $scope.theta;
        vm.index = $scope.index;

        vm.submit = function() {
            var data = {
                theta: vm.theta,
                index: vm.index
            };

            apiService.editTheta(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('ThetaEditCtrl', ThetaEditCtrl);
})(angular.module('app.philanthropy'));