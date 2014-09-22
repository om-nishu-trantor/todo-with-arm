app.factory('sessionInterceptor', ['sessionService', function(sessionService) {
  return {
      request: function(config) {
        if(sessionService.isLogin()){
          config.headers['auth-token'] = sessionService.getSession().auth_token;
        }
        return config;
      }
  };

}]);


