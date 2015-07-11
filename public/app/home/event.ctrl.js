(function(module) {

    function EventCtrl($scope, $modalInstance, jsend) {
        var vm = this;

        vm.submit = function() {
            jsend({
                method: 'POST',
                url: '/api/home-data',
                data: {title: vm.title}
            }).then(function() {
                $modalInstance.close();
            });
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('EventCtrl', EventCtrl);
})(angular.module('app.home'));
