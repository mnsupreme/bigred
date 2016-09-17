var app = angular.module('app', ['ngRoute', 'ngStorage']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'SearchController.js'
        })
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: 'LogInController.js'
        })
        .when('/partials/:id',{
            templateUrl: 'partials/',
            controller: ''
        })
        .when('/new', {
            templateUrl: 'partials/',
            controller: ''
        })
        .when('/show/:id',{
            templateUrl: 'partials/',
            controller: ''
        })
        .otherwise({
          redirectTo: '/'
        });

}); 


