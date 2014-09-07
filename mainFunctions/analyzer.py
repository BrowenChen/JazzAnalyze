#analyzer.py
#---------
#Module for note and chord analysis


from collections import *
import string

class Detector():

    def __init__(self, noteSeq=None, chord=None):

        self.sequence = noteSeq # Sequence of notes for one measure
        self.chord = chord #


    def test(self):
        return self.sequence


    def determineScale(self):
        """
        Given a sequence of diatonic notes, determine the scale that we can use to improvise over this sequence.
        We can assume C major for now. Add implementation for other root notes later by scaling to C.

        We can calculate the type of scale that is shown by the scale degrees. Dictionary containing scale degrees
        Ionian (Major) - 1 2 3 4 5 6 7
        Dorian (Min) - 1 2 b3 4 5 6 7
        Phrygian (Min) - 1 b2 b3 4 5 b6 7
        Lydian (Maj) - 1 2 3 #4 5 6 7
        Mixolydian (Maj) - 1 2 3 4 5 6 b7
        Aeolian (Minor) - 1 2 b3 4 5 b6 7
        Locrian (Dim) -

        We will assign each note as it's interval to c. This can be done with a simple dictionary consisting of all
        different chromatic notes.

        Next, we must find out what sequence of scale degrees the input belongs to and output that scale.

        ######################################## (Figure out a better notation strategy)
        NOTATION -> 1 following a number represents flattened notes. 2 following a number represents sharped notes
        E.G 3.1 = flat third. 4.2 = sharp fourth
        ########################################

        """


        scaleChoices = {'IONIAN': [1, 2, 3, 4, 5, 6, 7],
                        'DORIAN': [1, 2, 3.1, 4, 5, 6, 7],
                        'PHRYGIAN': [1, 2.1, 3.1, 4, 5, 6.1, 7],
                        'LYDIAN': [1, 2, 3, 4.2, 5, 6, 7],
                        'MIXOLYDIAN': [1, 2, 3, 4, 5, 6, 7.1],
                        'AEOLIAN': [1, 2, 3.1, 4, 5, 6.1, 7]}




        noteDegrees = {'C': 1, 'C#': 1.1, 'Db': 2.1, 'D': 2, 'D#':2.2, 'Eb':3.1, 'E': 3, "F": 4, "F#": 4.2,"G": 5,
                       "Gb": 5.1, "G#": 5.2, "Ab": 6.1, "A": 6, "A#": 6.2, "Bb": 7.1, "B":7}



        #Split up the notes that include sharps and flats. Regex?
        notes = []
        for letter in self.sequence:
            if letter.isupper():
                notes.append(letter)
            else:
                note = notes.pop()
                note += letter
                notes.append(note)


        #notes = self.sequence
        intervalValue = []
        possibleScales= []

        #Reassign each note to it's interval value
        for i in notes:
            intervalValue.append(noteDegrees[i])

        #print(intervalValue)

        #Which scales can I use over this sequence?
        for s in scaleChoices:
            if (set(intervalValue).issubset(set(scaleChoices[s]))):
               possibleScales.append(s)


        return possibleScales


    def determineChord(self):
        """
        Determines which scales work over this chord and the scale degrees for this chord.
        self.chord does not contain the note, but rather the type of chord.

        *******CHORD TYPES******
        Maj7
        Min7
        7
        m7b5

        dim



        """

        print("Go in here")

        chordTypes = {"Maj7": [1, 3, 5, 7],
                      "Min7": [1, 3.1, 5, 7.1],
                      "7": [1, 3, 5, 7.1],
                      "m7b5": [1, 3.1, 5.1, 7.1]
        }


        scaleChoices = {'IONIAN': [1, 2, 3, 4, 5, 6, 7],
                        'DORIAN': [1, 2, 3.1, 4, 5, 6, 7],
                        'PHRYGIAN': [1, 2.1, 3.1, 4, 5, 6.1, 7],
                        'LYDIAN': [1, 2, 3, 4.2, 5, 6, 7],
                        'MIXOLYDIAN': [1, 2, 3, 4, 5, 6, 7.1],
                        'AEOLIAN': [1, 2, 3.1, 4, 5, 6.1, 7]}

        noteDegrees = {'C': 1, 'C#': 1.1, 'Db': 2.1, 'D': 2, 'D#':2.2, 'Eb':3.1, 'E': 3, "F": 4, "F#": 4.2,"G": 5,
                       "Gb": 5.1, "G#": 5.2, "Ab": 6.1, "A": 6, "A#": 6.2, "Bb": 7.1, "B":7}


        intervals = chordTypes[self.chord]

        #Translate intervals into notes now. How to reverse the dictionary and grab the key from the given values?
        notes = []
        print(chordTypes[self.chord])
        print("Chord analyzer")

        




    #
    #     return



