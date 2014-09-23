'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the todosApp
 */
app.controller('HeaderCtrl', ['sessionService', 'loginService', '$scope', '$location', function (sessionService, loginService, $scope, $location) {

    $scope.logOut = function(){
      var auth_id = sessionService.getSession();
      var request = loginService.logout(auth_id);
      request.then(
        function (promise) { // Success callback
          sessionService.deleteSession();
          $location.path('/login');
        },
        function (error) { // Error callback
          $scope.errorMessage = error.data.message;
        });
    }
}]);
