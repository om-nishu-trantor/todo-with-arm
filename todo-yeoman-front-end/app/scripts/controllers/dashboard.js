'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('DashboardCtrl',['$scope','dashboardService', '$modal', '$filter', '$location',function ($scope, dashboardService, $modal, $filter, $location) {
    dashboardService.getTodos().success(function(data){
      data.forEach(function(todo){
        todo.complete_till = new Date(todo.complete_till);
      });
      $scope.todos = data;
    }).error(function(data, status){
      console.log('Error In dashboard controller !!!');
      console.log('ERROR : ' + data.message);
      if(status==401){
        sessionService.deleteSession();
        $location.path('/login');
      }
    });

  $scope.customDoneFilter = function(item){
    if($scope.showDone){
      return !item.done;
    }else{
      return true;
    }
  };

  $scope.openModal = function(createTodo, todo){
    var modalInstance = $modal.open({
      templateUrl: 'views/todoModal.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        todo: function () {
          var todo_copy = {};
          if(createTodo){
            return todo_copy;
          }else{
            return $.extend(todo_copy, true, todo);
          }
        },
        createTodo: function(){
          return createTodo;
        }
      }
    });

    modalInstance.result.then(function (updatedTodo) {
      if(createTodo){
        $scope.todos.push(updatedTodo);
      }else{
        var todo_index = $scope.todos.indexOf(todo);
        $scope.todos[todo_index] = updatedTodo;
      }
    });
  };

  }]);
