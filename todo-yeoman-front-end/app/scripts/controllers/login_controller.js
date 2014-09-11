'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the todosApp
 */
app.controller('LoginCtrl', ['$scope', '$http', '$location', 'loginService', 'sessionService',function ($scope, $http, $location, loginService, sessionService) {
  var email, password;
  $scope.loginData = {email: '', password: ''};
  $scope.login = function (loginData) {
    var request = loginService.login(loginData);
    request.then(
      function (promise) { // Success callback
        console.log(promise);
        sessionService.setSession(loginData);
        if(sessionService.isLogin()) $location.path('/dashboard');
      },
      function (error) { // Error callback
        console.log(error);
        sessionService.isLogin();
//          TODO add shae effect on fail....
      }
    )
  };
}]);
