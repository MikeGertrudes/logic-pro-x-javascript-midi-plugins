// _Major_Ninths

NeedsTimingInfo = true;

function HandleMIDI(event) {

	event.send();

	var info = GetTimingInfo();
 	var speed = GetParameter('Speed'); 
 	var articulation = GetParameter('Articulation'); 

	var intervals = {
		major_third: {
			pitch_value: 5,
			delay: 0.25
		}, 
		major_seventh: {
			pitch_value: 11,
			delay: 0.50
		},
		ninth: {
			pitch_value: 14,
			delay: 0.75
		}
	};

	if (event instanceof NoteOn) {
		for (var keyOn in intervals) {
			intervals[key].on = new NoteOn;
			intervals[key].on.pitch = event.pitch + intervals[key].pitch_value;
			intervals[key].on.sendAfterBeats(speed * intervals[key].delay);
		}
	}

	if (event instanceof NoteOff && articulation === 0) {
		//MIDI.allNotesOff();
		for (var keyOff in intervals) {
			intervals[key].off = new NoteOff;
			intervals[key].off.pitch = event.pitch + intervals[key].pitch_value;
			intervals[key].off.sendAfterBeats(speed * intervals[key].delay);
		}
	}

}

var PluginParameters = [{name: 'Speed', defaultValue: 0, minValue: 0, maxValue: 1, numberOfSteps: 4}, {name: 'Articulation', type: 'menu', valueStrings: ['Staccato', 'Legato']}];