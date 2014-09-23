'use strict';

/**
 * @ngdoc function
 * @name todosApp.Service:LoginService
 * @description
 * # login
 * Service of the todosApp
 */

app.service('loginService', ['$http', 'appConfig', function($http, appConfig) {
  var postParams, promise, baseUrl, url;
  var baseUrl = appConfig.domainName;

  return{
    login: function(credentials) {
      postParams = {
        'email': credentials.email,
        'password': credentials.password
      };
      url = baseUrl + "/authentication";
      promise = $http.post(url, postParams);
      return promise;
    },
    logout: function(credentials) {
      postParams = {
        'email': credentials.email,
        'auth_id': credentials.auth_token
      };

      url = baseUrl + '/authentication/' + postParams.email + '/' + postParams.auth_id;
      promise = $http.delete(url);
      return promise;
    }
  }

}]);