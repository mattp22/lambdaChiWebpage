(function(module) {

    function ContactCtrl($scope, $http, apiService, $cookies, $modal) {
        var vm = this;
        vm.info = null;
        vm.loggedIn = $cookies.get('loggedIn');

        getContacts();

        function getContacts() {
            apiService.contact().then(function(results) {
                vm.info = results;
            });
        }

        vm.sendEmail = function() {

            var data = {
                contactName: vm.contactName,
                contactEmail: vm.contactEmail,
                subject: vm.subject,
                message: vm.message
            };

            $http({
                method: 'post',
                url: '/api/emails',
                data: data
            }).then(function(res) {
                alert('Your email has been sent.');
            }, function(res) {
                var error;
                if(res.status === 0) {
                    error = 'The Internet connection appears to be offline.';
                } else {
                    error = res.statusText;
                }
                alert('There was an error in submitting your email.\n\n' + error);
            });
        };

        vm.editContact = function(contact, index) {
            $scope.contact = angular.copy(contact);
            $scope.index = index;

            $modal.open({
                templateUrl: 'app/contact/contactEdit.html',
                controller: 'ContactEditCtrl',
                controllerAs: 'vm',
                scope: $scope
            }).result.finally(function() {
                getContacts();
            });
        };
    }

    module.controller('ContactCtrl', ContactCtrl);
})(angular.module('app.contact'));
