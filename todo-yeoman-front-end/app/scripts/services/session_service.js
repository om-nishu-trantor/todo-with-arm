'use strict';

/**
 * @ngdoc function
 * @name todosApp.Service:SessionService
 * @description
 * # session
 * Service of the todosApp
 */

app.service('sessionService', ['$cookieStore', '$base64', function($cookieStore, $base64){

  var sessionKey = $base64.encode('todoSession');

  return {
    setSession: function(credentials){
    //  Accepts credentials with application_id as 'app_id' and user_id as 'u_id'
    //  Example {app_id: 'random_alphanumeric_string', u_id: 'id_of_user'}
      $cookieStore.put(sessionKey, credentials.app_id + "_" + credentials.u_id);
      return !!$cookieStore.get(sessionKey);
    },
    getSession: function(){
    //  Retrieve session if present for this browser
      $cookieStore.get(sessionKey);
    },
    isLogin: function(sessionId){
    //  Returns true/false based on session/login present or not by checking session
      return !!$base64.decode($cookieStore.get(sessionKey));
    },
    deleteSession: function(sessionId){
    //  when user Logs out from the sesison, this deletes the session
      return $cookieStore.remove(sessionKey);
    }
  }

}])
