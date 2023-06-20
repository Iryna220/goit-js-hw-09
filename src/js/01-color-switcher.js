const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]"); 

btnStart.addEventListener('click', switchColor);
btnStop.addEventListener('click', stopSwitchColor);

let timer = null;

function switchColor() {
    if (timer === 0) {
        timer = setInterval(() => {
            document.body.style.background = getRandomHexColor()
        }, 1000);
        console.log('good work')
    }
}
function stopSwitchColor() {
    clearInterval(timer);
    timer = null;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

