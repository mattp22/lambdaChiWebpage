(function(module) {

    function InfoEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.info = $scope.info;
        vm.index = $scope.index;

        vm.submit = function() {
            var data = {
                info: vm.info,
                index: vm.index
            };

            apiService.editInfo(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('InfoEditCtrl', InfoEditCtrl);
})(angular.module('app.philanthropy'));