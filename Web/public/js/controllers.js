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
    // write Ctrl here

    $scope.name = "Owen";

    $scope.chordType = "CMaj7";

    $scope.intervals = "1, 3, 5, 7,";

    $scope.chordProgression = "Dmin7 G7b9 CMaj7";
    $scope.romanNumerals = "ii V I";

    $scope.neckPosition = 1;


    $scope.modeList = 'Press generate to start'
    $scope.keyList = 'Press generate to start'



    $scope.generate = function(){

      this.generateChordType();

      this.generateIntervals();



    }

    $scope.generateChordType = function(){

      var types = ['Maj7', 'Min7', 'Maj9', '9', 'Min9', 'Maj7#11', 'Min7b5', 'Maj13', 'Min13', '7','7b9', 'Dim']

      var suitableChords = ['A', 'B', 'C', 'E', 'D', 'F', 'G'];

      var random = types[Math.floor(Math.random() * types.length)]
      var chord = suitableChords[Math.floor(Math.random() * suitableChords.length)];
      this.chordType = chord + random;
      // return types[Math.floor(Math.random() * types.length)];

      }

    $scope.generateIntervals = function() {

      var chordTones = [1, 3, 5, 7, 9, 11]

      var counter = 0;
      var chord = []

      var seen = []
      
      var output = ''
      
      while (counter < 4){
        var rand = chordTones[Math.floor(Math.random() * chordTones.length)];
        if (seen.indexOf(rand) == -1){
          chord.push(rand);
          seen.push(rand);

          counter += 1;
        }


      }
      
      chord.forEach(function(note){
        output = output + note + ', ';

      })

      this.intervals = output;

      // return chord;


    }


    $scope.generateProgression = function() {
      var two = "min9"
      var five = "7b9"
      var one = "Maj7"

      var twoFiveOnes = ["D" + two + " G" + five + " F" + one, "A" + two + " D" + five + " G" + one, "F" + two + " A" + five + " D" + one]
    
      var rand = twoFiveOnes[Math.floor(Math.random() * twoFiveOnes.length)];

      this.chordProgression = rand;
    }


    $scope.generateModes = function(){

      var modes = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrain'];
      var keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


      var seen = []
      
      var counter = 0

      

      var modeOutputs = ''
      var keyOutputs = ''
      
      while (counter < 4){
      // for (var i = 0; i < 4; i++){ 
      
        var randMode = modes[Math.floor(Math.random() * modes.length)]
      //   modeOutputs = modeOutputs + randMode + ", "
      // }
        if (seen.indexOf(randMode) == -1){
          
          modeOutputs += (randMode + ', ')
          seen.push(randMode);
          counter += 1;
        
        }
      }

      while (counter < 8){

        var randKey = keys[Math.floor(Math.random() * keys.length)]
        if (seen.indexOf(randKey) == -1){
          keyOutputs += (randKey + ', ')
          seen.push(randKey);

          counter += 1;
        }

      }


      this.modeList = modeOutputs
      this.keyList = keyOutputs



    }



    $scope.neckPosition = function(){

      this.neckPosition = (Math.floor((Math.random() * 5)) + 1)
    }




  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

    $scope.chordProgression = "Dmin7 G7b9 CMaj7";

  });
