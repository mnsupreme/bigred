console.log("angular routes")
var app = angular.module('app', ['ngRoute', 'ngStorage']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'SearchController'
        })      
    .when('/search',{
            templateUrl: 'partials/search.html',
            controller: 'SearchController'
        })
    .when('/search/:id',{
            templateUrl: 'partials/ListTemplate.html',
            controller: 'SearchController'
        })
    .when('/new',{
            templateUrl: 'partials/create.html',
            controller: 'CreateController'
        })
    .when('/login',{
            templateUrl: 'partials/login.html',
            controller: 'LogInController'
        })
    .otherwise({
          redirectTo: '/'
        });

}); 


