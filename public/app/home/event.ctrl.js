(function(module) {

    function EventCtrl($scope, $modalInstance, apiService) {
        var vm = this;

        vm.submit = function() {
            apiService.addEvent(vm).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('EventCtrl', EventCtrl);
})(angular.module('app.home'));
