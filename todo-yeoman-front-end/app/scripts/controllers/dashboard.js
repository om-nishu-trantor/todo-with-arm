'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('DashboardCtrl',['$scope','dashboardService',function ($scope, dashboardService) {
    dashboardService.getTodos().success(function(data){
      $scope.todos = data;
    }).error(function(data){
      alert(data.message);
    });
  }]);
