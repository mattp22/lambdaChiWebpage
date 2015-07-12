// This service provides varous methods that access the LambdaChiWebsite API.
(function(module) {

    function service(jsend) {

        function adminLogin(data) {
            return jsend({
                method: 'POST',
                url: '/api/admin',
                data: data
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function brotherLogin(data) {
            return jsend({
                method: 'POST',
                url: '/api/brother',
                data: data
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        return {
            adminLogin: adminLogin,
            brotherLogin: brotherLogin
        };
    }

    module.factory('authService', service);
})(angular.module('app'));
