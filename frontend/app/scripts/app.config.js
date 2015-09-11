'use strict';

angular.module('pluralsightJwtAuthApp').config(function($stateProvider, $urlRouterProvider, $httpProvider) {
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
		.state('register', {
			url: '/register',
			templateUrl: '/views/register.html',
			controller: 'RegisterCtrl'
		})
		.state('logout', {
			url: '/logout',
			controller: 'LogoutCtrl'
		});
		
		$httpProvider.interceptors.push('authInterceptor');
})

.constant('API_URL', 'http://localhost:3000/');
