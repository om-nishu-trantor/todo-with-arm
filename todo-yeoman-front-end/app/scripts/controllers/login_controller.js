'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the todosApp
 */
app.controller('LoginCtrl', ['$scope', '$location', 'loginService', 'sessionService', function ($scope, $location, loginService, sessionService) {
  var email, password;
  $scope.loginData = {email: '', password: ''};
  $scope.login = function (loginData) {
    var request = loginService.login(loginData);
    request.then(
      function (promise) { // Success callback
        if (sessionService.setSession(promise.data)){
//          $location.path('/dashboard')
        }
      },
      function (error) { // Error callback
        console.log(error);
        console.log(sessionService.isLogin());
      }
    )
  };
}]);
