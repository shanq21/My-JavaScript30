let timer;

const buttons = document.querySelectorAll('.timer__controls button');
const customForm = document.querySelector('#custom');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');

function setTimer(seconds) {
  clearInterval(timer);

  const then = Date.now() + seconds * 1000;
  updateCountdown(seconds);
  setEndTime(then);
  
  timer = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(timer);
      return;
    }
    updateCountdown(secondsLeft);
  }, 1000);
}

function updateCountdown(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = ('0' + seconds % 60).slice(-2);
  document.title = `${min}:${sec}`;
  displayTimeLeft.textContent = `${min}:${sec}`;
}

function setEndTime(timestamp) {
  const endTime = new Date(timestamp);
  const hr = endTime.getHours() % 12;
  const min = endTime.getMinutes();
  displayEndTime.textContent = `Be Back At ${hr}:${min}`;
}

function handleClick(e) {
  const seconds = parseInt(this.dataset.time);
  setTimer(seconds);
}

function handleSubmit(e) {
  e.preventDefault();
  const mins = parseInt(this.minutes.value);
  setTimer(mins * 60);
  this.reset();
}

buttons.forEach(button => button.addEventListener('click', handleClick));
customForm.addEventListener('submit', handleSubmit);

