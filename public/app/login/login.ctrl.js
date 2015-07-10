(function(module) {

    function LoginCtrl($scope, $location, $modalInstance, $state) {
        var vm = this;

        vm.login = function() {
        	if (vm.username === "username" && vm.password === "password") {
                $modalInstance.close();
                $state.go('app.members.brothers');
                alert("Welcome to the brothers page.");
        	} else {
        		alert("Wrong Username and Password Combination.");
        	}
        };

        vm.cancel = function() {
        	$modalInstance.dismiss();
        };
        
    }

    module.controller('LoginCtrl', LoginCtrl);
})(angular.module('app'));