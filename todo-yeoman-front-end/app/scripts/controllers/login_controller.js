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
  $scope.login = function () {
    var request = loginService.login($scope.loginData);
    request.then(
      function (promise) { // Success callback
        sessionService.setSession(promise.data);
        if(sessionService.isLogin()) $location.path('/dashboard');
      },
      function (error) { // Error callback
        console.log(error);
        sessionService.isLogin();
//          TODO add shake effect on fail....
      }
    )
  };
}]);
