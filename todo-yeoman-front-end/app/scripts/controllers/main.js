'use strict';

/**
 * @ngdoc function
 * @name todosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });