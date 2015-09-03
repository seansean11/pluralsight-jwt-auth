'use strict';

angular.module('pluralsightJwtAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, alert) {
 	$scope.submit = function() {
    var url = '/',
        user = {};
	
    $http.post(url, user)
        .success(function() {
            alert('success', 'OK!', 'You are now registered!');
        })
        .error(function() {
            alert('warning', 'Oops!', 'Could not register.');
        });
    };
  });
