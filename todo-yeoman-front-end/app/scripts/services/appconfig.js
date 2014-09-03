'use strict';

/**
 * @ngdoc function
 * @name todosApp.Service:appConfig
 * @description
 * # appConfig
 * Constant of the todosApp
 */

app.constant('appConfig', {
  'domainName': 'http://localhost:3000', //TODO change this to production mode when deploying
  'contentType': 'application/json'
});
