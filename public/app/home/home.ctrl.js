(function(module) {

    function HomeCtrl($scope, apiService, $modal, $cookies) {
        var vm = this;
        vm.events = null;
        vm.images = null;
        vm.loggedIn = $cookies.get('loggedIn');

        getEvents();
        getImages();

        vm.addEvent = function() {
            $scope.type = "Add";
            $scope.event = null;

            $modal.open({
                templateUrl: 'app/home/event.html',
                controller: 'EventCtrl as vm',
                scope: $scope
            }).result.finally(function() {
                getEvents();
            });
        };

        vm.editEvent = function(event, index) {
            $scope.event = angular.copy(event);
            $scope.index = index;
            $scope.type = "Edit";

            $modal.open({
                templateUrl: 'app/home/event.html',
                controller: 'EventCtrl as vm',
                scope: $scope
            }).result.finally(function() {
                getEvents();
            });
        };

        vm.editImages = function(index) {
            $scope.images = angular.copy(vm.images);
            $scope.index = index;

            $modal.open({
                templateUrl: 'app/home/picEdit.html',
                controller: 'PicEditCtrl as vm',
                scope: $scope
            }).result.finally(function() {
                getImages();
            });
        };

        vm.deleteEvent = function(index) {
            if (confirm("Are you sure you want to delete this news event?")) {
                apiService.deleteEvent(index).then(function() {
                    getEvents();
                });
            }
        };

        function getEvents() {
            apiService.homeData().then(function(results) {
                vm.events = results;
            });
        }

        function getImages() {
            apiService.homeImages().then(function(results) {
                vm.images = results;
            });
        }

    }

    module.controller('HomeCtrl', HomeCtrl);
})(angular.module('app.home'));
