'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
