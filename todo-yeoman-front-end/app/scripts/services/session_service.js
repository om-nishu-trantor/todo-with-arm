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

  this.setSession = function(credentials){
  //  Accepts credentials with application_id as 'auth_token' and user_id as 'id'
  //  Example {auth_token: 'random_alphanumeric_string', id: 'id_of_user'}
    $cookieStore.put(sessionKey, $base64.encode(JSON.stringify(credentials)));
    return !!$cookieStore.get(sessionKey);
  };
  this.getSession = function(){
  //  Retrieve session if present for this browser
    var sessionToDo = $cookieStore.get(sessionKey);
    if(!sessionToDo) return;
    var aidUid = JSON.parse($base64.decode(sessionToDo));
    return aidUid;
  };
  this.isLogin = function(){
  //  Returns true/false based on session/login present or not by checking session
    return !!$cookieStore.get(sessionKey);
  };
  this.deleteSession = function(){
  //  when user Logs out from the sesison, this deletes the session
    return $cookieStore.remove(sessionKey);
  };

}]);
