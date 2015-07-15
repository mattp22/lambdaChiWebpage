(function(module) {

    function PicEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.index = $scope.index;

        vm.submit = function() {
            var data = {
                images: $scope.images,
            };

            apiService.editImages(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.add = function() {
            $scope.images.unshift($scope.url);
        };

        vm.moveDown = function(index) {
            var temp = $scope.images[index];
            $scope.images[index] = $scope.images[index + 1];
            $scope.images[index + 1] = temp;
        };

        vm.moveUp = function(index) {
            var temp = $scope.images[index];
            $scope.images[index] = $scope.images[index - 1];
            $scope.images[index - 1] = temp;
        };

        vm.remove = function(index) {
            $scope.images.splice(index, 1);
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('PicEditCtrl', PicEditCtrl);
})(angular.module('app.home'));