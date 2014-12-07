// _Disco_Bass

NeedsTimingInfo = true;

function HandleMIDI(event) {

	event.send();

	var info = GetTimingInfo();
	//var speed = GetParameter("Speed"); 
	//var articulation = GetParameter("Articulation"); 

	var intervals = {
		fifth: {
			pitch_value: 8
		}, 
		octave_up: {
			pitch_value: 12
		}
	};

	if (event instanceof NoteOn) {
		var on = new NoteOn; //make a new note on
		on.pitch = event.pitch + 12; //set it's pitch to C3
		on.sendAfterBeats(0.5); //send the note
		event.sendAfterBeats(1); //send the note
		on.sendAfterBeats(1.5); //send the note
	}

	// it's pitch value (to C3)
	if (event instanceof NoteOff) {
		var off = new NoteOff; //make a note off using the note on to initialize 
		off.pitch = event.pitch + 12;
		off.sendAfterBeats(0.5); //send a note off one beat later                       
		event.sendAfterBeats(1); //send a note off one beat later                       
		off.sendAfterBeats(1.5); //send a note off one beat later                       
	}

}

// var PluginParameters = [{name:"Speed", defaultValue:0, minValue:0, maxValue:1, numberOfSteps:4}, {name:"Articulation", type:"menu", valueStrings:["Staccato", "Legato"]}];