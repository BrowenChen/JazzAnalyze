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
  controller('MyCtrl1', ['$scope', 'posts', function ($scope, posts) {
    // Main Controller
    
    // $scope.posts = [
    //   {title: 'All The Things You Are', upvotes: 1},
    //   {title: 'Autumn Leaves', upvotes: 1},
    //   {title: 'Recorda Me', upvotes: 1},
    //   {title: 'Bye Bye Blackbird', upvotes: 1},
    //   {title: 'My Favorite Things', upvotes: 1}
    // ]

    //Take it from the database
    $scope.posts = posts.posts;
    //Adding Posts
    $scope.addPost = function(){
      // alert(posts.posts);
      if(!$scope.title || $scope.title === '') { return; }
      // posts.create({
      //   title: $scope.title,
      //   link: $scope.link,
      // });
      $scope.posts.push({
        title: $scope.title, 
        link: $scope.link,         
        upvotes:0,
        comments: [
          {author: 'Joe', body: 'Cool !', upvotes: 0},
          {author: 'Bob', body: 'Great !', upvotes: 0}
        ]        
      });
      $scope.title = '';
      $scope.link = '';
      alert("added post");
    }
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    }
    $scope.decrementVotes = function(post){
      post.upvotes -=1;
    }
    //Delete a
    $scope.deletePost = function(post){
      var newPosts = $scope.posts.splice($scope.posts.indexOf(post), 1)  
    }

  }]).
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
      $('#fill').html("Hi hello")
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
