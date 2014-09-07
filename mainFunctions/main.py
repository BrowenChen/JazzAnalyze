# main.py
# -------
# Jazz Practice generator tool to navigate changes based playing. On-going improvements and
# developments with whatever I find helpful in practicing jazz.

from analyzer import *
import sys

ONE = "Note Sequence Analyzer"
TWO = "Chord Analyzer"
THREE = "Random Chord Sequencer"
FOUR = "Repertoire"

class Player:

    """
    Main player with options for practice modes.
    """

    def __init__(self, name=None):
        self.name = name

    def getResponse(self, choice, noteSeq=None, chord=None):
        if (chord == None):
            #We are using noteSeqAnalyzer
            analyzer = Detector(noteSeq)
            validScales = analyzer.determineScale()

            #Prints out the valid Scale options for that sequence
            print(validScales)

        elif(noteSeq == None):
            #We are using chord Analyzer
            analyzer = Detector(None, chord)
            analyzer.determineChord()

        if choice == ONE:
            print("You chose: " + ONE)



        return self.name

    def start(self):
        """
        Starts up practice generator

        Prompts user for which mode to enter. Choices include NoteSeqAnalyzer, ChordAnalysis, RandomChordSequencer,
        TranscribeList, ChordVoicings

        """

        #Instantiates the player


        print("Now choose a practice mode from the following: ")
        print("1. Note Sequence Analyzer")
        print("2. ChordAnalysis")
        print("3. RandomChordSequencer")
        #print("4. Note Sequence Analyzer")

        choice = input(" ==> ")

        if choice == "1":
            print("You picked: " + ONE)
            #Note Sequence Analyzer tool

            print("*******NOTE: SYNTAX IS CAPITAL LETTERS A-G WITH b or # DENOTING FLATS OR SHARPS******")
            noteSequence = input("Now enter one measure of notes to analyze: ")


            #---------------------------------------
            #Check if these notes are correct syntax with a invalidNotesException
            #Notes should be capitalized, e.g A#, Bb..
            #---------------------------------------

            player.getResponse(ONE, noteSequence, None)


        elif choice == "2":
            print("You picked: " + TWO)
            #Chord Analysis tool

            print("******NOTE: PICK FROM THE FOLLOWING CHORD TYPES:")
            print("Maj7")
            print("Min7")
            print("7")
            print("m7b5")

            chordType = input("===> ")

            #---------------------------------------
            #Check if these notes are correct syntax with a invalidNotesException
            #Notes should be capitalized, e.g A#, Bb..
            #---------------------------------------

            player.getResponse(TWO, None, chordType)
            print("Got response")



        elif choice == "3":
            print("You picked: " + THREE)
            #Random Chord Sequencer Tool




name = input("Please enter your name: ")
player = Player(name)
player.start()





