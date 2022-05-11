const Tone = window.Tone;

const types = document.querySelectorAll('.typeOption');
types.forEach(type => {
  type.addEventListener('click', () => {
    console.log(type.value)
    osc.type = type.value;
  })
});

const buttonEl = document.querySelector('button');
const rangeEl = document.querySelector('#volume');

rangeEl.addEventListener('change', () => {
  console.log(rangeEl.valueAsNumber);
  
})
let playing = false;

const osc = new Tone.Oscillator({
  type: 'sine',
  frequency: 440,
  volume: -5,
}).toDestination();


buttonEl.addEventListener('click', async (e) => {
  if (playing) {
    buttonEl.innerText = 'Start'
    osc.stop();
  } else {
    console.log(osc.get())
    buttonEl.innerText = 'Stop'
    osc.start();
  }
  playing = !playing;
});