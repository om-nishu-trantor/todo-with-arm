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
    'base64',
    'ui.bootstrap'
  ]);

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
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        requireLogin: true
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.run(['$http','$rootScope', '$location', 'sessionService', function($http, $rootScope, $location, sessionService){
    $rootScope.$on('$routeChangeStart', function(event, next, current){
        $http.defaults.headers.common["auth-token"] = sessionService.getSession().auth_token;
        if(next.$$route.originalPath.indexOf('/login')!=(-1) && sessionService.isLogin()){
            event.preventDefault();
            $location.path('/dashboard')
        }
    });

    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        $rootScope.validUser = sessionService.isLogin();
        if(!(next.requireLogin && sessionService.isLogin())){
            event.preventDefault();
            $location.path('/login');
        }
    });
}]);

