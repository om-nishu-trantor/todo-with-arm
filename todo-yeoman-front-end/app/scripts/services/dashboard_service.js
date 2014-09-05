'use strict';

/**
 * @ngdoc service
 * @name todosApp.dashboardService
 * @description
 * # dashboardService
 * Service in the todosApp.
 */
angular.module('todosApp')
  .service('dashboardService', ['$http', 'appConfig', 'sessionService', function dashboardService($http, appConfig, sessionService) {
      var baseUrl = appConfig.domainName;
      var userId = sessionService.getSession().id;
      
      this.getTodos = function(){
        return $http.get(baseUrl+"/users/"+userId+"/todos");
      }
    }]);
