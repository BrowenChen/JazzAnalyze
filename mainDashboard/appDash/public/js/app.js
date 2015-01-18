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
.factory('analysis', ['$http', function(){
  var x = {
    types: ['Maj7', 'Min7', 'Maj9', '9', 'Min9', 'Maj7#11', 'Min7b5', 'Maj13', 'Min13', '7','7b9', 'Dim']
  };

  x.generateChordType = function(){
    var types = ['Maj7', 'Min7', 'Maj9', '9', 'Min9', 'Maj7#11', 'Min7b5', 'Maj13', 'Min13', '7','7b9', 'Dim']
    return types[Math.floor(Math.random() * types.length)];
  };

  x.generateChordProgression = function(){
    var suitableChords = ['A', 'B', 'C', 'E', 'D', 'F', 'G'];
    var chords = [];
    for (var i = 0; i < 8; i++){
      var type = this.generateChordType();
      var chord = suitableChords[Math.floor(Math.random() * suitableChords.length)];
      chords.push(chord + type)
    }
    // var item = items[Math.floor(Math.random()*items.length)];
    
    return chords;
  }

  x.randomRange = function(max, min){
    return Math.floor(Math.random() * (max - min));
  }


  x.chordVoicings = function(){
    var chordTones = [1, 3, 5, 7, 9, 11]

    var counter = 0;
    var chord = []

    var seen = []
    
    
    while (counter < 4){
      var rand = chordTones[Math.floor(Math.random() * chordTones.length)];
      if (seen.indexOf(rand) == -1){
        chord.push(rand);
        seen.push(rand);

        counter += 1;
      }

    }
    console.log(chord)
    return chord;
  }
    x.determineChord = function(notes){
    //Write a function to use note degrees to convert to a list of numbers. 
    //Then the function should check which options contain those numbers
    // Outputs the list of available choices for scales and chord types.
    var chordTypes = {"Maj7": [1, 3, 5, 7],
                        "Min7": [1, 3.1, 5, 7.1],
                        "7": [1, 3, 5, 7.1],
                        "m7b5": [1, 3.1, 5.1, 7.1] };
      var scaleChoices = {'IONIAN': [1, 2, 3, 4, 5, 6, 7],
                          'DORIAN': [1, 2, 3.1, 4, 5, 6, 7],
                          'PHRYGIAN': [1, 2.1, 3.1, 4, 5, 6.1, 7],
                          'LYDIAN': [1, 2, 3, 4.2, 5, 6, 7],
                          'MIXOLYDIAN': [1, 2, 3, 4, 5, 6, 7.1],
                          'AEOLIAN': [1, 2, 3.1, 4, 5, 6.1, 7]};
      var noteDegrees = {'C': 1, 'C#': 1.1, 'Db': 2.1, 'D': 2, 'D#':2.2, 'Eb':3.1, 'E': 3, "F": 4, "F#": 4.2,"G": 5,
                         "Gb": 5.1, "G#": 5.2, "Ab": 6.1, "A": 6, "A#": 6.2, "Bb": 7.1, "B":7};

      return chordTypes
  }

  return x;

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
    when('/viewposts', {
      templateUrl: '/partials/posts',
      controller: 'PostsCtrl'
    }).       
    when('/viewposts/:id', {
      templateUrl: '/partials/posts',
      controller: 'PostsCtrl'
    }).        

    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
})
;



