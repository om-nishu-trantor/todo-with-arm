'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the todosApp
 */
 app.controller('LoginCtrl', ['$scope', '$http', '$location', 'loginService', 'sessionService', '$animate', '$timeout',function ($scope, $http, $location, loginService, sessionService, $animate, $timeout) {
  var email, password;
  $scope.errorMessage = false;
  $scope.loginData = {email: '', password: ''};
//   Workaround for autofills as they do not broadcast an event.
  $timeout(function(){
    $scope.loginData.email = loginForm.elements['email'].value;
    $scope.loginData.password = loginForm.elements['password'].value;
  }, 400);

  $scope.login = function () {

    if($scope.loginForm.$valid){
      var request = loginService.login($scope.loginData);
      request.then(
      function (promise) { // Success callback
        sessionService.setSession(promise.data);
        if(sessionService.isLogin()) $location.path('/dashboard');
      },
      function (error) { // Error callback
        $scope.errorMessage = error.data.message;
      });
    }
    else{
<<<<<<< Updated upstream
debugger;
      var formElement = angular.element('form');
=======
      var formElement = loginForm;
>>>>>>> Stashed changes
      $animate.addClass(formElement, 'shake', function() {
        $timeout(function(){
          $animate.removeClass(formElement, 'shake');
        }, 400);
      });
    }
  };
}]);

