(function(module) {

    function HeaderCtrl($scope, $location) {
        var vm = this;

        vm.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }

    module.controller('HeaderCtrl', HeaderCtrl);
})(angular.module('app'));