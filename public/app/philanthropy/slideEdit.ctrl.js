(function(module) {

    function SlideEditCtrl($scope, $modalInstance, apiService) {
        var vm = this;
        vm.index = $scope.index;
        vm.url = null;

        vm.submit = function() {
            var data = {
                slides: $scope.slides,
                index: vm.index
            };

            apiService.editSlides(data).then(function() {
                $modalInstance.close();
            });
        };

        vm.add = function() {
            $scope.slides.slides.unshift(vm.url);
        };

        vm.moveDown = function(index) {
            var temp = $scope.slides.slides[index];
            $scope.slides.slides[index] = $scope.slides.slides[index + 1];
            $scope.slides.slides[index + 1] = temp;
        };

        vm.moveUp = function(index) {
            var temp = $scope.slides.slides[index];
            $scope.slides.slides[index] = $scope.slides.slides[index - 1];
            $scope.slides.slides[index - 1] = temp;
        };

        vm.remove = function(index) {
            $scope.slides.slides.splice(index, 1);
        };

        vm.cancel = function() {
            $modalInstance.dismiss();
        };

    }

    module.controller('SlideEditCtrl', SlideEditCtrl);
})(angular.module('app.philanthropy'));