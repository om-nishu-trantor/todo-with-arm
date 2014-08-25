'use strict';

/**
 * @ngdoc function
 * @name todosApp.Service:LoginService
 * @description
 * # login
 * Service of the todosApp
 */

angular.module('todosApp', [])
  .service('loginService', function($http){
      var postParams, promise;

      return{
        login: function(credentials){
          postParams = {
            'email': credentials.email,
            'password': credentials.password
          };
          url = 'http://localhost:3000' + "/authentication";
          promise = $http.post(url, postParams);
          return promise;
        },
        logout: function(credentials){
          postParams = {
            'email': credentials.email,
            'appId': credentials.appId
          };
          url = 'http://localhost:3000' + '/authentication/'+ postParams.email + postParams.appId;
          promise = $http.get(url);
        }
      }

    })