'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the todosApp
 */
app.controller('HeaderCtrl', ['sessionService', '$scope', function (sessionService, $scope) {

  $scope.validUser = sessionService.isLogin();

}]);
