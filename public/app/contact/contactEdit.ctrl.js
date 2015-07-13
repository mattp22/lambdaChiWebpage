(function(module) {

    function ContactEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.contact = $scope.contact;

        vm.submit = function() {
            var data = {
                contact: vm.contact,
                index: $scope.index
            };

            apiService.editContact(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('ContactEditCtrl', ContactEditCtrl);
})(angular.module('app.contact'));
