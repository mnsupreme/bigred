var app = angular.module('app', ['ngRoute', 'ngStorage']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'SearchController'
        })
        .when('/listing',{
            templateUrl: 'partials/listing.html',
            controller: 'SearchController'
        })
        .when('/login',{
            templateUrl:'partials/login.html',
            controller: 'LogInController'
        })
        .when('/user/:id',{
            templateUrl:'partials/user.html',
            controller: 'ProfileController'
        })
        .when('/edit/:id',{
            templateUrl: 'partials/edit.html',
            controller: 'EditController'

        .when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'NewController'
        })
        .when('/show/:id',{
            templateUrl: 'partials/show.html',
            controller: 'ShowController'
        })
        .otherwise({
          redirectTo: '/'
        }),

}); 
})
