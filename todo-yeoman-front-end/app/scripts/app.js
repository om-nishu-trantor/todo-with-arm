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
  ])

  app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
          redirectTo: '/login'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
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
