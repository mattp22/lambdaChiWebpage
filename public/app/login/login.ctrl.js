(function(module) {

    function LoginCtrl($scope, $modalInstance, $state, authService) {
        var vm = this;

        vm.login = function() {
            var data = {
                username: vm.username,
                password: vm.password
            };

            authService.brotherLogin(data).then(function(response) {
                if (response) {
                    $modalInstance.close();
                    $state.go('app.members.brothers');
                    alert("Welcome to the brothers page");
                } else {
                    alert("Wrong Username and Password Combination");
                }
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('LoginCtrl', LoginCtrl);
})(angular.module('app'));
