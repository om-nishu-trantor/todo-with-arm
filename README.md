# Simple To-Do Application using Angularjs-Rails-Mongodb
### Rails Backend
> POST
``` ruby
/authentication
```
> Parameter name
#### email
#### password


> DELETE
``` ruby
/authentication/:email_id/:auth_id
```

> GET
``` ruby
/users/:user_id/tasks
```

> GET
``` ruby
/users/:user_id/tasks/:task_id
```

> POST
``` ruby
/users/:user_id/tasks
```
> Parameter name
#### title
#### description
#### complete_till

> PUT
``` ruby
/users/:user_id/tasks/:task_id
```
> Parameter name
#### title
#### description
#### complete_till

> DELETE
``` ruby
/users/:user_id/tasks/:task_id
```

### AngularJs front-end

Start server in development mode using `grunt serve`

It will open chrome with port#9000 by default.

Login credentials :
Email : email1@testmail.com,
Password : Password1

### To run E2E test cases

Install protractor first using the following commands :-

```
npm install -g protractor

sudo webdriver-manager update

sudo webdriver-manager start
```

Go to directory `todo-with-arm/todo-yeoman-front-end` and hit the following command at bash :-
```
protractor conf.js
```

In E2E test case uses real backend, not mocked responses, hence you need to run Rails server as well with basic seed data in the database already available.

Click here for [Protractor full guide](https://docs.angularjs.org/guide/e2e-testing)
