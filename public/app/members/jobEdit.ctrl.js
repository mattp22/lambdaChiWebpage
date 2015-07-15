(function(module) {

    function JobEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.date = new Date();

        vm.submit = function() {
            $scope.job.post = vm.date;
            
            var data = {
                job: $scope.job
            };

            apiService.addJob(data).then(function() {
                $modalInstance.close();
            });

        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('JobEditCtrl', JobEditCtrl);
})(angular.module('app.members'));
