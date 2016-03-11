'use strict';

angular.module('pluralsightJwtAuthApp')
  .controller('LogoutCtrl', function ($auth, $state) {
 	  $auth.logout();
    $state.go('main');
  });
