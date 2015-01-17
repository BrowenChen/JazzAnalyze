'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.test = "test";
  }).
  controller('MyCtrl1', function ($scope) {
    // Main Controller

    $scope.posts = [
      {title: 'All The Things You Are', upvotes: 1},
      {title: 'Autumn Leaves', upvotes: 1},
      {title: 'Recorda Me', upvotes: 1},
      {title: 'Bye Bye Blackbird', upvotes: 1},
      {title: 'My Favorite Things', upvotes: 1}
    ]

    //Adding Posts
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }

      $scope.posts.push({
        title: $scope.title, 
        link: $scope.link,         
        upvotes:0,

        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]        
      });
      
      $scope.title = '';
      $scope.link = '';
    }

    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    }

    //Delete a
    $scope.deletePost = function(post){
      var newPosts = $scope.posts.splice($scope.posts.indexOf(post), 1)  
    }

  }).
  controller('MyCtrl2', ['$scope', 'posts', function ($scope, posts) {
    // write Ctrl here
    $scope.posts = posts.posts;

    $scope.alert = function(){
      alert("hi")
    }
  }]).

  controller('MyCtrl3', ['$scope', 'posts', function ($scope, posts) {
    // write Ctrl here
    $scope.posts = posts.posts;

    $scope.alert = function(){
      alert($scope.posts)
    }

  }]).



  controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function ($scope, $stateParams, posts) {
    // Controller for posts 
    $scope.post = posts.posts[$stateParams.id];

    $scope.addComment = function(){
      if($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';


      
    }
  }]);
