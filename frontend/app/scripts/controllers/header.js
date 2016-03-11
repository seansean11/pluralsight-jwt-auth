'use strict';

angular.module('pluralsightJwtAuthApp')
  .controller('HeaderCtrl', function ($scope, $auth) {
	  $scope.isAuthenticated = $auth.isAuthenticated;
  });
