const Tone = window.Tone;

const types = document.querySelectorAll('.typeOption');
types.forEach(type => {
  type.addEventListener('click', () => {
    console.log(type.value)
    osc.type = type.value;
  })
});

let playing = false;

const buttonEl = document.querySelector('button');
const volumeEl = document.querySelector('#volume');
const frequencyEl = document.querySelector('#frequency');

volumeEl.addEventListener('change', () => {
  let vol = volumeEl.valueAsNumber;
  console.log(vol);
  osc.set({
    volume: vol
  });
});

frequencyEl.addEventListener('change', () => {
  let freq = frequencyEl.valueAsNumber;
  console.log(freq);
  osc.set({
    frequency: freq
  })
})

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