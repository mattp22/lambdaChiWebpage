(function(module) {

    function RhoEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.rho = $scope.rho;

        vm.submit = function() {
            var data = {
                rho: vm.rho,
                index: $scope.index
            };

            apiService.editRho(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('RhoEditCtrl', RhoEditCtrl);
})(angular.module('app.members'));