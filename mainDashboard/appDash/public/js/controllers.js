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
        upvotes:0
      });
      
      $scope.title = '';
      $scope.link = '';
    }



    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    }


  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
