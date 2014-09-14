'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the todosApp
 */
app.controller('HeaderCtrl', ['sessionService', '$scope', '$location', function (sessionService, $scope, $location) {

    $scope.logOut = function(){
        sessionService.deleteSession();
        $location.path('/login');
    }
}]);
