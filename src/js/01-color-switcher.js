const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  //   console.log(stopBtn);
//   console.log(`Interval with id ${timerId} has stopped!`);
  startBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
});
