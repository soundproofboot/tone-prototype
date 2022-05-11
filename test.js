const Tone = window.Tone;
let buttonEl = document.querySelector('#button');

let playing = false;

const osc = new Tone.Oscillator( {
  type: 'sine',
  frequency: 600,
} ).toDestination();
// osc.frequency.value = 440;

buttonEl.addEventListener('click', async () => {
  if (playing) {
    osc.stop();
  } else {
    // start at "C4"
    osc.start();
    osc.name = 'Something else';
    console.log(osc.name);
  }
  playing = !playing;
});