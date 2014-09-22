'use strict';

/**
 * @ngdoc service
 * @name todosApp.dashboardService
 * @description
 * # dashboardService
 * Service in the todosApp.
 */
angular.module('todosApp')
  .factory('dashboardService', ['$http', 'appConfig', 'sessionService', function dashboardService($http, appConfig, sessionService) {
    var baseUrl = appConfig.domainName;
    var userId = sessionService.getSession().id;
    return {
      getTodos: function () {
        return $http.get(baseUrl + "/users/" + userId + "/tasks");
      },
      updateTodo: function (todo) {
        return $http.put(baseUrl + "/users/" + userId + "/tasks/" + todo.id, {"task": todo});
      },
      createTodo: function (todo) {
        return $http.post(baseUrl + "/users/" + userId + "/tasks", {"task": todo});
      }
    }
  }]);
