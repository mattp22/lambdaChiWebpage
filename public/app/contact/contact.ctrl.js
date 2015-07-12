(function(module) {

    function ContactCtrl($scope, $http, apiService) {
        var vm = this;
        vm.info = null;

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
    }

    module.controller('ContactCtrl', ContactCtrl);
})(angular.module('app.contact'));
