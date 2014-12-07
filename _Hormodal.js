// _Hormodal
//
// copyright 2014 Mike Gertrudes
// www.mikegertrudes.com

NeedsTimingInfo = true;


// libs
var console = {
    log: function(message) {
        Trace(message);
    }
};

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj) {
        if (Math.random() < 1/++count) {
            result = prop;
        }
    }
    return result;
}

function HandleMIDI(event) {

    event.send();

    var info = GetTimingInfo();
    var selected_mode = GetParameter('Mode'); 

    var modes = {
        0: {
            name: 'Ionian',
            positions: {
                1: {
                    pitch_value: 1
                }, 
                2: {
                    pitch_value: 3
                },
                3: {
                    pitch_value: 5
                },
                4: {
                    pitch_value: 6
                }, 
                5: {
                    pitch_value: 8
                },
                6: {
                    pitch_value: 10
                }, 
                7: {
                    pitch_value: 12
                },
                8: {
                    pitch_value: 13
                }
            }
        },
        1: {
            name: 'Dorian',
            positions: {
                1: {
                    pitch_value: 1
                }, 
                2: {
                    pitch_value: 3
                },
                3: {
                    pitch_value: 4
                },
                4: {
                    pitch_value: 6
                }, 
                5: {
                    pitch_value: 8
                },
                6: {
                    pitch_value: 10
                }, 
                7: {
                    pitch_value: 11
                },
                8: {
                    pitch_value: 13
                }
            }
        },
        2: {
            name: 'Phrygian',
            positions: {
                1: {
                    pitch_value: 1
                }, 
                2: {
                    pitch_value: 2
                },
                3: {
                    pitch_value: 4
                },
                4: {
                    pitch_value: 6
                }, 
                5: {
                    pitch_value: 8
                },
                6: {
                    pitch_value: 9
                }, 
                7: {
                    pitch_value: 11
                },
                8: {
                    pitch_value: 13
                }
            }
        },
        3: {
            name: 'Lydian',
            positions: {
                1: {
                    pitch_value: 1
                }, 
                2: {
                    pitch_value: 3
                },
                3: {
                    pitch_value: 5
                },
                4: {
                    pitch_value: 7
                }, 
                5: {
                    pitch_value: 8
                },
                6: {
                    pitch_value: 10
                }, 
                7: {
                    pitch_value: 12
                },
                8: {
                    pitch_value: 13
                }
            }
        },
        4: {
            name: 'Mixolydian',
            positions: {
                1: {
                    pitch_value: 1
                }, 
                2: {
                    pitch_value: 3
                },
                3: {
                    pitch_value: 5
                },
                4: {
                    pitch_value: 6
                }, 
                5: {
                    pitch_value: 8
                },
                6: {
                    pitch_value: 10
                }, 
                7: {
                    pitch_value: 11
                },
                8: {
                    pitch_value: 13
                }
            }
        },
        5: {
            name: 'Aeolian',
            positions: {
                1: {
                    pitch_value: 1
                }, 
                2: {
                    pitch_value: 3
                },
                3: {
                    pitch_value: 4
                },
                4: {
                    pitch_value: 6
                }, 
                5: {
                    pitch_value: 8
                },
                6: {
                    pitch_value: 9
                }, 
                7: {
                    pitch_value: 11
                },
                8: {
                    pitch_value: 13
                }
            }
        },
        6: {
            name: 'Locrian',
            positions: {
                1: {
                    pitch_value: 1
                }, 
                2: {
                    pitch_value: 2
                },
                3: {
                    pitch_value: 4
                },
                4: {
                    pitch_value: 6
                }, 
                5: {
                    pitch_value: 7
                },
                6: {
                    pitch_value: 9
                }, 
                7: {
                    pitch_value: 11
                },
                8: {
                    pitch_value: 13
                }
            }
        }
    };

    if (event instanceof NoteOn) {
        for (var positionOn in modes[selected_mode].positions) {
            if (position != 1) {
                modes[selected_mode].positions[position].on = new NoteOn;
                modes[selected_mode].positions[position].on.pitch = event.pitch + modes[selected_mode].positions[position].pitch_value;
                modes[selected_mode].positions[position].on.sendAfterBeats((position - 1) * 0.5);
            }
        }
    }

    if (event instanceof NoteOff) {
        for (var positionOff in modes[selected_mode].positions) {
            if (position != 1) {
                modes[selected_mode].positions[position].off = new NoteOff;
                modes[selected_mode].positions[position].off.pitch = event.pitch + modes[selected_mode].positions[position].pitch_value;
                modes[selected_mode].positions[position].off.sendAfterBeats((position - 1) * 0.5);
            }
        }
    }

}

var PluginParameters = [{name: 'Mode', type: 'menu', valueStrings: ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian']}];