'use strict';

angular.module('pluralsightJwtAuthApp').config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider, API_URL) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
		.state('main', {
			url: '/',
			templateUrl: '/views/main.html'
		})
		.state('jobs', {
			url: '/jobs',
			templateUrl: '/views/jobs.html',
			controller: 'JobsCtrl'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/views/login.html',
			controller: 'LoginCtrl'
		})
		.state('register', {
			url: '/register',
			templateUrl: '/views/register.html',
			controller: 'RegisterCtrl'
		})
		.state('logout', {
			url: '/logout',
			controller: 'LogoutCtrl'
		});

    $authProvider.loginUrl = API_URL + 'login';
    $authProvider.signupUrl = API_URL + 'register';

    $authProvider.google({
      clientId: '551113649903-vk8uff9mv9dq1cpkpoefja28df6a9hf0.apps.googleusercontent.com',
      url: API_URL + 'auth/google'
    });

    $authProvider.facebook({
      clientId: '781662918576825',
      url: API_URL + 'auth/facebook'
    });

		$httpProvider.interceptors.push('authInterceptor');
})

.constant('API_URL', 'http://localhost:3000/')

.run(function($window) {
  var params = $window.location.search.substring(1);

  if(params && $window.opener && $window.opener.location.origin === $window.location.origin) {
    var pair = params.split('=');
    var code = decodeURIComponent(pair[1]);

    $window.opener.postMessage(code, $window.location.origin);
  }
});
