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

        function addEvent(data) {
            return jsend({
                method: 'POST',
                url: '/api/home-data',
                data: data
            });
        }

        function editEvent(data) {
            return jsend({
                method: 'PUT',
                url: '/api/home-data',
                data: data
            });
        }

        function deleteEvent(data) {
            return jsend({
                method: 'DELETE',
                url: '/api/home-data/' + data
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

        function editInfo(data) {
            return jsend({
                method: 'PUT',
                url: '/api/philanthropy-info',
                data: data
            });
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

        function editSlides(data) {
            return jsend({
                method: 'PUT',
                url: '/api/philanthropy-slides',
                data: data
            });
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

        function editSpringEvent(data) {
            return jsend({
                method: 'PUT',
                url: '/api/spring-events',
                data: data
            });
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

        function editFallEvent(data) {
            return jsend({
                method: 'PUT',
                url: '/api/fall-events',
                data: data
            });
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

        function editContact(data) {
            return jsend({
                method: 'PUT',
                url: '/api/contact',
                data: data
            });
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

        function editRho(data) {
            return jsend({
                method: 'PUT',
                url: '/api/rho',
                data: data
            });
        }

        return {
            homeData: homeData,
            addEvent: addEvent,
            editEvent: editEvent,
            deleteEvent: deleteEvent,
            homeImages: homeImages,
            theta: theta,
            editTheta: editTheta,
            philanthropyInfo: philanthropyInfo,
            editInfo: editInfo,
            philanthropySlides: philanthropySlides,
            editSlides: editSlides,
            delta: delta,
            editDelta: editDelta,
            springEvents: springEvents,
            editSpringEvent: editSpringEvent,
            fallEvents: fallEvents,
            editFallEvent: editFallEvent,
            contact: contact,
            editContact: editContact,
            rho: rho,
            editRho: editRho
        };
    }

    module.factory('apiService', service);
})(angular.module('app'));
