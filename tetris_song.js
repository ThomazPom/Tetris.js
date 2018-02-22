var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, duration,cancontinue) {
// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
oscillator.frequency.value = frequency; // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();


setTimeout(
    function(){
        oscillator.stop();
        if(cancontinue)
			playMelody();	
    }, duration);
}

// Note frequencies based on http://www.phy.mtu.edu/~suits/notefreqs.html
let _C0    =(16.35)
let _CS0   =(17.32)
let _D0    =(18.35)
let _DS0   =(19.45)
let _E0    =(20.60)
let _F0    =(21.83)
let _FS0   =(23.12)
let _G0    =(24.50)
let _GS0   =(25.96)
let _A0    =(27.50)
let _AS0   =(29.14)
let _B0    =(30.87)
let _C1    =(32.70)
let _CS1   =(34.65)
let _D1    =(36.71)
let _DS1   =(38.89)
let _E1    =(41.20)
let _F1    =(43.65)
let _FS1   =(46.25)
let _G1    =(49.00)
let _GS1   =(51.91)
let _A1    =(55.00)
let _AS1   =(58.27)
let _B1    =(61.74)
let _C2    =(65.41)
let _CS2   =(69.30)
let _D2    =(73.42)
let _DS2   =(77.78)
let _E2    =(82.41)
let _F2    =(87.31)
let _FS2   =(92.50)
let _G2    =(98.00)
let _GS2   =(103.83)
let _A2    =(110.00)
let _AS2   =(116.54)
let _B2    =(123.47)
let _C3    =(130.81)
let _CS3   =(138.59)
let _D3    =(146.83)
let _DS3   =(155.56)
let _E3    =(164.81)
let _F3    =(174.61)
let _FS3   =(185.00)
let _G3    =(196.00)
let _GS3   =(207.65)
let _A3    =(220.00)
let _AS3   =(233.08)
let _B3    =(246.94)
let _C4    =(261.63)
let _CS4   =(277.18)
let _D4    =(293.66)
let _DS4   =(311.13)
let _E4    =(329.63)
let _F4    =(349.23)
let _FS4   =(369.99)
let _G4    =(392.00)
let _GS4   =(415.30)
let _A4    =(440.00)
let _AS4   =(466.16)
let _B4    =(493.88)
let _C5    =(523.25)
let _CS5   =(554.37)
let _D5    =(587.33)
let _DS5   =(622.25)
let _E5    =(659.25)
let _F5    =(698.46)
let _FS5   =(739.99)
let _G5    =(783.99)
let _GS5   =(830.61)
let _A5    =(880.00)
let _AS5   =(932.33)
let _B5    =(987.77)
let _C6    =(1046.50)
let _CS6   =(1108.73)
let _D6    =(1174.66)
let _DS6   =(1244.51)
let _E6    =(1318.51)
let _F6    =(1396.91)
let _FS6   =(1479.98)
let _G6    =(1567.98)
let _GS6   =(1661.22)
let _A6    =(1760.00)
let _AS6   =(1864.66)
let _B6    =(1975.53)
let _C7    =(2093.00)
let _CS7   =(2217.46)
let _D7    =(2349.32)
let _DS7   =(2489.02)
let _E7    =(2637.02)
let _F7    =(2793.83)
let _FS7   =(2959.96)
let _G7    =(3135.96)
let _GS7   =(3322.44)
let _A7    =(3520.00)
let _AS7   =(3729.31)
let _B7    =(3951.07)
let _C8    =(4186.01)
let _CS8   =(4434.92)
let _D8    =(4698.63)
let _DS8   =(4978.03)
let _E8    =(5274.04)
let _F8    =(5587.65)
let _FS8   =(5919.91)
let _G8    =(6271.93)
let _GS8   =(6644.88)
let _A8    =(7040.00)
let _AS8   =(7458.62)
let _B8    =(7902.13)
let _R    =(0)

// beats per minute
let BPM   =(120.0)


lead_notes=[
  // part 1
  _E5, _B4, _C5, _D5, _C5, _B4, _A4, _A4, _C5, _E5, _D5, _C5, _B4, _B4, _C5, _D5, _E5, _C5, _A4, _A4, _R,
  _D5, _F5, _A5, _G5, _F5, _E5, _C5, _E5, _D5, _C5, _B4, _B4, _C5, _D5, _E5, _C5, _A4, _A4, _R,

  // part 2
  _E4, _C4, _D4, _B3, _C4, _A3, _GS3, _B3,
  _E4, _C4, _D4, _B3, _C4, _E4, _A4, _A4, _GS4, _R,


]
bass_notes = 
[
  // part 1
  _E2, _E3, _E2, _E3, _E2, _E3, _E2, _E3, _A1, _A2, _A1, _A2, _A1, _A2, _A1, _A2, _GS1, _GS2, _GS1, _GS2, _GS1, _GS2, _GS1, _GS2, _A1, _A2, _A1, _A2, _A1, _B2, _C3, _E3,
  _D2, _D3, _D2, _D3, _D2, _D3, _D2, _D3, _C2, _C3, _C2, _C3, _C2, _C3, _C2, _C3, _B1, _B2, _B1, _B2, _B1, _B2, _B1, _B2, _A1, _A2, _A1, _A2, _A1, _A2, _A1, _A2,

  // part 2
  _A1, _E2, _A1, _E2, _A1, _E2, _A1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2, _A1, _E2, _A1, _E2, _A1, _E2, _A1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2,
  _A1, _E2, _A1, _E2, _A1, _E2, _A1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2, _A1, _E2, _A1, _E2, _A1, _E2, _A1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2, _GS1, _E2

]
lead_times= [
  // part 1
  1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
  1.5, 0.5, 1.0, 0.5, 0.5, 1.5, 0.5, 1.0, 0.5, 0.5, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,

  // part 2
  2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0,
  2.0, 2.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 3.0, 1.0
];
bass_times  =[
  // part 1
  0.5,  0.5,  0.5,  0.5,  0.5,  0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
  0.5,  0.5,  0.5,  0.5,  0.5,  0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,

  // part 2
  0.5,  0.5,  0.5,  0.5,  0.5,  0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
  0.5,  0.5,  0.5,  0.5,  0.5,  0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
]
bpm = 120
current = 0;
function playMelody(){
	if (current < lead_notes.length){
		playNote(lead_notes[current],lead_times[current]*350,true);
		playNote(bass_notes [current],bass_times[current]*350,false);
		current= current+1;
	}
	else
	{
		current=0;
    playMelody()
	}
}
playMelody()
