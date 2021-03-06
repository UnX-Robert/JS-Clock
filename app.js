const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date();

  // Seconds hand update
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = 'rotate('+ secondsDegrees +'deg)';

  // Mins hand update
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = 'rotate('+ minsDegrees +'deg)';

  // Hour hand update
  const hours = now.getHours();
  const hoursDegrees = (hours / 60) * 360 + 90;
  hourHand.style.transform = 'rotate('+ hoursDegrees +'deg)';
}

setInterval(setDate, 1000);
