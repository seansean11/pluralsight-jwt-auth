'use strict';

/**
 * @ngdoc service
 * @name apiApp.authToken
 * @description
 * # authToken
 * Factory in the apiApp.
 */
angular.module('apiApp')
  .factory('authToken', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
