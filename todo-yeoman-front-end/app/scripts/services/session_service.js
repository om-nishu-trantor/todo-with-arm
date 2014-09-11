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
    //  Accepts credentials with application_id as 'auth_token' and user_id as 'id'
    //  Example {auth_token: 'random_alphanumeric_string', id: 'id_of_user'}
      $cookieStore.put(sessionKey, $base64.encode(JSON.stringify(credentials)));
      return !!$cookieStore.get(sessionKey);
    },
    getSession: function(){
    //  Retrieve session if present for this browser
      var aidUid = JSON.parse($base64.decode($cookieStore.get(sessionKey)));
      return aidUid;
    },
    isLogin: function(sessionId){
    //  Returns true/false based on session/login present or not by checking session
      return !!$cookieStore.get(sessionKey);
    },
    deleteSession: function(sessionId){
    //  when user Logs out from the sesison, this deletes the session
      return $cookieStore.remove(sessionKey);
    }
  }

}])
