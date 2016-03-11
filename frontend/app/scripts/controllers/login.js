'use strict';

angular.module('pluralsightJwtAuthApp')
  .controller('LoginCtrl', function ($scope, alert, auth, $auth, $state) {
  	$scope.submit = function() {
  		$auth.login({
        email: $scope.email,
        password: $scope.password
      }).then(function(res) {
        $state.go('main');
  			alert('success', 'Welcome ', 'Thanks for coming back ' + res.data.user.email + '!');
  		}).catch(handleError);
  	};

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          $state.go('main');
          alert('success', 'Welcome ', 'Thanks for coming back ' + res.data.user.displayName + '!');
        }, handleError);
    };

    function handleError(err) {
      alert('warning', 'Something went wrong :(', err.message);
    }
  });
