app.factory('sessionInterceptor', ['$q', 'sessionService', function($q, sessionService) {
  var sessionInterceptor = {
      request: function(config) {
        console.log("check the response before the HTTP");
      }
  };

  return sessionInterceptor;
}]);