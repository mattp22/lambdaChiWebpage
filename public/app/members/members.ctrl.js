(function(module) {

    function MembersCtrl($scope, apiService) {
        var vm = this;
        vm.rho = null;

        getRho();

        function getRho() {
            apiService.rho().then(function(results) {
                vm.rho = results;
            });
        }
    }

    module.controller('MembersCtrl', MembersCtrl);
})(angular.module('app.members'));
