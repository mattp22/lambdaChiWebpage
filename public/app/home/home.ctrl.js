(function(module) {

    function HomeCtrl($scope, apiService, $modal, $cookies) {
        var vm = this;
        vm.events = null;
        vm.images = null;
        vm.loggedIn = $cookies.get('loggedIn');

        getEvents();
        getImages();

        vm.addEvent = function() {
            $modal.open({
                templateUrl: 'app/home/event.html',
                controller: 'EventCtrl as vm',
                scope: $scope
            }).result.finally(function() {
                getEvents();
            });
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
