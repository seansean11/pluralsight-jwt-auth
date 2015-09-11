'use strict';

angular.module('pluralsightJwtAuthApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
	  $scope.isAuthenticated = authToken.isAuthenticated;
  });
