'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'ui.router',
  'myApp.directives'
])
.factory('posts', ['$http', function(){
  var o = {
    posts: [
      {title: 'Recorda Me', upvotes: 1},
      {title: 'Bye Bye Blackbird', upvotes: 1},
      {title: 'My Favorite Things', upvotes: 1},
      {title: 'Autumn Leaves', upvotes: 1}
    ]

    // getAll: function(){
    //   alert("ASDASKDJASDJASL")

    //   $.get('/posts',function(data){
    //     alert("success!!");
    //     this.posts = data;
    //   })


    //   // return $http.get('/posts').success(function(data){
    //   //   alert("success?");
    //   //   angular.copy(data, o.posts);
    //   // });      
    // }

  };

  // o.getAll = function(){
  //   $.get('/posts', function(data){
  //     alert("sssss");
  //     // o.posts = data;
  //   })
  // };

  // o.create = function(post){
  //   $.post('/posts', post, function(data){
  //     o.posts.push(data);
  //   });
  // }

  return o;
}])
.config(
  function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
      //Resolve post promise, getAll function
      // resolve: { 
      //   postPromise: ['posts', function(posts){
      //       // $.get( "/posts", function( data ) {
      //       //   alert( "Load was performed." );
      //       // });
      //     return posts.getAll();
      //   }]   
      // }


    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    when('/view3', {
      templateUrl: 'partials/partial3',
      controller: 'MyCtrl3'
    }).  
    when('/posts', {
      templateUrl: 'posts',
      controller: 'PostsCtrl'
    }).       
    when('/posts/{id}', {
      templateUrl: 'posts',
      controller: 'PostsCtrl'
    }).        

    otherwise({
      redirectTo: '/posts'
    });

  $locationProvider.html5Mode(true);
})
;



