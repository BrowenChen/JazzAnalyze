'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'ui.router',
  'myApp.directives'
]).
config(
  


  function ($routeProvider, $locationProvider) {
  $routeProvider.

    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/view3', {
      templateUrl: 'partials/partial3',
      controller: 'MyCtrl3'
    }).   
    when('/posts/{id}', {
      templateUrl: 'posts',
      controller: 'PostsCtrl'
    }).        

    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
})
.factory('posts', [function(){
  var o = {
    posts: [
      {title: 'Recorda Me', upvotes: 1},
      {title: 'Bye Bye Blackbird', upvotes: 1},
      {title: 'My Favorite Things', upvotes: 1}
    ]


  };
  return o;
}])


;



