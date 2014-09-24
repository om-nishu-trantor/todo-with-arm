describe('TODO Login', function() {
    it('should log in user', function() {
        var afterLoginUrl;

        browser.get('http://localhost:9000');
        // Find the element with ng-model="loginData.email" and type "email1@testmail.com" into it
        element(by.model('loginData.email')).sendKeys('email1@testmail.com');

        // Find the element with ng-model="loginData.password" and type "Password1" into it
        element(by.model('loginData.password')).sendKeys('Password1');

        // Find the first (and only) button on the page and click it
//        element(by.css(':button')).click();
        element(by.partialButtonText('Login')).click();

        response = browser.getCurrentUrl();
        response.then(function(url) {
            expect(url.match('/dashboard')).not.toBe(null);
        });

    });
});