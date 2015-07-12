// This service provides varous methods that access the LambdaChiWebsite API.
(function(module) {

    function service(jsend) {

        function homeData() {
            return jsend({
                method: 'GET',
                url: '/api/home-data'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function addEvent(vm) {
            return jsend({
                method: 'POST',
                url: '/api/home-data',
                data: vm
            });
        }

        function homeImages() {
            return jsend({
                method: 'GET',
                url: '/api/home-images'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function theta() {
            return jsend({
                method: 'GET',
                url: '/api/theta'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function editTheta(data) {
            return jsend({
                method: 'PUT',
                url: '/api/theta',
                data: data
            });
        }

        function philanthropyInfo() {
            return jsend({
                method: 'GET',
                url: '/api/philanthropy-info'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function philanthropySlides() {
            return jsend({
                method: 'GET',
                url: '/api/philanthropy-slides'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function delta() {
            return jsend({
                method: 'GET',
                url: '/api/delta'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function editDelta(data) {
            return jsend({
                method: 'PUT',
                url: '/api/delta',
                data: data
            });
        }

        function springEvents() {
            return jsend({
                method: 'GET',
                url: '/api/spring-events'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function fallEvents() {
            return jsend({
                method: 'GET',
                url: '/api/fall-events'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function contact() {
            return jsend({
                method: 'GET',
                url: '/api/contact'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function rho() {
            return jsend({
                method: 'GET',
                url: '/api/rho'
            }).then(
                function(response) {
                    return response.data;
                }
            );
        }

        return {
            homeData: homeData,
            addEvent: addEvent,
            homeImages: homeImages,
            theta: theta,
            editTheta: editTheta,
            philanthropyInfo: philanthropyInfo,
            philanthropySlides: philanthropySlides,
            delta: delta,
            editDelta: editDelta,
            springEvents: springEvents,
            fallEvents: fallEvents,
            contact: contact,
            rho: rho
        };
    }

    module.factory('apiService', service);
})(angular.module('app'));
