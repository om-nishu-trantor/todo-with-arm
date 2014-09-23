'use strict';

describe('Service: loginService', function () {

  // load the service's module
  beforeEach(module('todosApp'));

  // instantiate service
  var login, appConfig, httpBackend, postHeaders, result, url,
  credentials = {'email': 'email1@testmail.com', 'password': 'admin123'},
  successResponse = {"auth_token":"4cdc81837be6416806d5","email": "email1@testmail.com","id":"53f35a865472615c60000000"},
  postParams = {"auth_token":"4cdc81837be6416806d5","email": "email1@testmail.com"};

  beforeEach(inject(function (_loginService_, $httpBackend, _appConfig_) {
    appConfig = _appConfig_;
    login = _loginService_;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
//    Checks if any request is pending, to make sure test cases are Robust...
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
    httpBackend.resetExpectations();
  });

  it('should work to make sure loginservice is available', function(){
    expect(!!login).toBe(true);
  });

  it('should respond with 200, on submission of correct credentials', function () {
    url = appConfig.domainName + "/authentication";

    httpBackend.expect('POST', url, credentials).respond(successResponse);

    var loginResponse = login.login(credentials);
    loginResponse.then(function(response){
      result = response;
    });

//  Fulshes all the requests locked up above...
    httpBackend.flush();

    expect(result.status).toBe(200);
    expect(result.auth_token).not.toBe(null);
    expect(result.email).not.toBe(null);
    expect(result.id).not.toBe(null);

  });

  it('should respond with invalid credentials status, with incorrect credentials', function(){
    url = appConfig.domainName + "/authentication";

    httpBackend.expect('POST', url, credentials).respond(401);

    var loginResponse = login.login(credentials);

    loginResponse.then(function(){
      expect(false);
    });

    loginResponse.error(function(data ,status){
      expect(status).toBe(401);
    });
//  Fulshes all the requests locked up above...
    httpBackend.flush();
  });

  it('should respond with 200, on requesting the logout', function () {
    url = appConfig.domainName + '/authentication/' + postParams.email + '/' + postParams.auth_token;
    httpBackend.expect('DELETE', url).respond(200);
    var logoutResponse = login.logout(postParams);
    logoutResponse.then(function(response){
      result = response;
    });
//  Fulshes all the requests locked up above...
    httpBackend.flush();

    expect(result.status).toBe(200)
  });

});
