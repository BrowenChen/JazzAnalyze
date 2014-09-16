
// Generate random intervals. Mode selection to change between scale types and practice playing those intervals over a set of chord changes




// Generates a random chord type to practice
var generateChordType = function(){
	var types = ['Maj7', 'Min7', 'Maj9', '9', 'Min9', 'Maj7#11', 'Min7b5', 'Maj13', 'Min13', '7','7b9', 'Dim']

	return types[Math.floor(Math.random() * types.length)];

}

var generateChordProgression = function(){
	var suitableChords = ['A', 'B', 'C', 'E', 'D', 'F', 'G'];

	var chords = [];

	for (var i = 0; i < 8; i++){
		var type = generateChordType();
		var chord = suitableChords[Math.floor(Math.random() * suitableChords.length)];

		chords.push(chord + type)
	}
	// var item = items[Math.floor(Math.random()*items.length)];

	console.log(chords);

	return chords;

}



// Generates a random range for intervals
var randomRange = function(max, min){
	return Math.floor(Math.random() * (max - min));

}



// Generates a chord voicing based on intervals. Used to practice chord voicings and inversions

var chordVoicings = function(){
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


var neckPosition = function(){
	return (Math.floor((Math.random() * 5)) + 1)
}



// Determines what kind of chord you can use over this measure
var determineChord = function(){

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

// chordVoicings();

// var chord = generateChordType();
// console.log(chord);
console.log(determineChord());
generateChordProgression();

chordVoicings();


