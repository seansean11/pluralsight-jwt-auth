'use strict';

angular.module('pluralsightJwtAuthApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
   
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: '/views/main.html'
    })

    .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
	controller: 'RegisterCtrl'
    });
});
