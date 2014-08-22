'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
    .controller('LoginCtrl', function ($scope, $http/*, $locationProvider*/) {
      var email, password;
      this.loginData={};

      var login = function(loginData){
        if(loginData.password && loginData.email){
          console.log(loginData.password)
          return;
        };

        if(!loginData.email){
          console.log('No email and Password set');
          return;
        }

      }

//      $http.post


/*
      if (SessionService.getSession()){
        $locationProvider.location = afterLoginPath;
      }
*/

    });
