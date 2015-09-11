'use strict';

angular.module('pluralsightJwtAuthApp')
  .controller('LogoutCtrl', function (authToken, $state) {
 	authToken.removeToken();
	$state.go('main');
  });
