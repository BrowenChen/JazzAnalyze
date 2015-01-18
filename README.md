JazzAnalyze
============

Jazz analyzer practice tool for changes based playing. Ongoing development with whatever efficient excercises or tools 
that I believe benefit my practice and may potentially be use to others.

Github style organizational tool, where users will be able to store, track, and self-assess with 3 modules. A repertoire/daily tracker to measure growth, an analytics module to practice theory, ear training, transposition, and thinking, and an exercise generator to practice sight-reading over new changes.

Intending to add 4th module, of jazz harmony and theory. Plan to include major, melodic minor, bebop, diminished, and whole tone scale theory, common terminology and frameworks for analyzing jazz standards, reharmonization, improvisation practice techniques, transcription, upper structures,



Current functionalities:

1) Anaylze a sequence of notes
  
Input is one measure of diatonic notes. Function takes in the letters and converts each note to their relative scale 
interval degrees to formulate and determine which modes and chords may be used over this measure. Useful to get used to quick changes based playing in Jazz when you have no idea whats going on with each measure.

2) Analyze a given chord type 

Determines which modes can be used on this chord. Also gives the relative scale 
degrees for chord tones that will work over this chord

3) Random Chord/Progression Generator

Generates a random sequence of chord changes for etude or arppeggio exercises.

4) Repertoire

Contains a queue to hold a list of standards or artists to transcribe and learn ranking by difficulty. Used to organize practice time efficiently. "Upvote" or "downvote" to track progress spent on a tune, and angular organizes the tunes by weakness to know which one should be focused on.



To-dos

-implement calendar d3 tracking so you can track your progress like github commits
-Strava like functionality to create social environment for tracking
-all the frontend ui
-4th module theory page


.Switch to persistent data instead of keeping it client side, and figure out $routeparams bug
.Possibly migrate from ngRoute to ui-route
.Make new mongoose database schemas
.figure out the additional comments to write and store notes on each activity practiced
.more sorting tools for first module with d3 and angular


