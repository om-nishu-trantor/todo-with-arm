'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the todosApp
 */
app.controller('LoginCtrl', function ($scope, $http, loginService, sessionService) {
  var email, password;
  $scope.loginData = {email: '', password: ''};
  $scope.login = function (loginData) {
    var request = loginService.login(loginData);
    request.then(
      function (promise) { // Success callback
        console.log(promise);
        sessionService.isLogin();
      },
      function (error) { // Error callback
        console.log(error);
        sessionService.isLogin();
      }
    )
  };
});
