(function(module) {

    function AdminCtrl($scope, $modalInstance, $state, $cookies) {
        var vm = this;

        vm.login = function() {
        	if (vm.username === process.env.ADMIN_USERNAME && vm.password === process.env.ADMIN_PASSWORD) {
                $modalInstance.close();
                $cookies.put('loggedIn', true);
                alert("You are now signed in as Admin");
        	} else {
        		alert("Wrong Username and Password Combination");
        	}
        };

        vm.cancel = function() {
        	$modalInstance.dismiss();
        };
        
    }

    module.controller('AdminCtrl', AdminCtrl);
})(angular.module('app'));