'use strict';

/**
 * @ngdoc overview
 * @name todosApp
 * @description
 * # todosApp
 *
 * Main module of the application.
 */
var app = angular
  .module('todosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'base64'
  ]);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      requireLogin: false
    })
    .when('/dashboard', {
      templateUrl: '/dashboard/index.html',
      controller: 'DashboardCtrl',
      requireLogin: true
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      requireLogin: true
    })
    .otherwise({
      redirectTo: '/'
    });
});


app.run(['$rootScope', '$location', 'sessionService', function($rootScope, $location, sessionService){
  $rootScope.on('$locationChangeStart', function(){

  })
}])