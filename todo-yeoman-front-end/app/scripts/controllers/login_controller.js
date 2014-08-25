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
      $scope.loginData={email: '', password: ''};
        $scope.login =  function(loginData) {

          console.log('***********');
          console.log(loginData);
          console.log('***********');

          $http.post('http://localhost:3000/authentication', loginData).
              success(function(data, status, headers, config) {
                console.log(data);
                console.log('SUCCESS');

              }).
              error(function(data, status, headers, config) {
                console.log('ERROR');
                console.log(data);
              });

      }
      $scope.loginData={};
//      }

//      $http.post


/*
      if (SessionService.getSession()){
        $locationProvider.location = afterLoginPath;
      }
*/

    });
