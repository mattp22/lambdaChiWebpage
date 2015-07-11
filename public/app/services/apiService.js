// This service provides varous methods that access the BE Safe API.
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

    function recruitmentEvents() {
      return jsend({
        method: 'GET',
        url: '/api/recruitment-events'
      }).then(
        function(response) {
          return response.data;
        }
      );
    }

    return {
      homeData: homeData,
      homeImages: homeImages,
      theta: theta,
      philanthropyInfo: philanthropyInfo,
      philanthropySlides: philanthropySlides,
      delta: delta,
      recruitmentEvents: recruitmentEvents
    };
  }

  module.factory('apiService', service);
})(angular.module('app'));