'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:ModalinstancectrlCtrl
 * @description
 * # ModalinstancectrlCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('ModalInstanceCtrl', ['$scope','$modalInstance', 'dashboardService', 'todo', 'createTodo', function ($scope, $modalInstance, dashboardService, todo, createTodo) {
    $scope.todo = todo;  
    $scope.cancel = function(){
      $modalInstance.dismiss();
    };

    $scope.submit = function(){
      if(createTodo){
        dashboardService.createTodo($scope.todo).success(function(data){
          $modalInstance.close(data);
        }).error(function(){
          alert("could not update todo at the present moment.");
        });
      }else{
        dashboardService.updateTodo($scope.todo).success(function(data){
          $modalInstance.close(data);
        }).error(function(){
          alert("could not update todo at the present moment.");
        });
      }
    };
  }]);
