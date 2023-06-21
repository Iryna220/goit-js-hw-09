import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
    btnStart: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
};
refs.btnStart.addEventListener('click', onClickBtn)
refs.btnStart.disabled = true;
let timer = 0;

function onClickBtn() {
    const selectedDate = getDate.selectedDates[0];

    timer = setInterval(() => {
        const currentDate = new Date();
        const trueTime = selectedDate - currentDate;
        refs.btnStart.disabled = true;

        if (trueTime < 0) {
            clearInterval(timer);
            return;
        }
        calcTime(convertMs(trueTime));
    }, 1000);
}

Report.info(
'Notiflix Info',
'"Knowledge rests not upon truth alone, but upon error also." <br/><br/>- Carl Gustav Jung',
'Okay',
);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();
        
        if (selectedDates[0] < currentDate) {
            refs.btnStart.disabled = true;

           Report.failure(
               'Please choose a date in the future',
                'Okay'
); 
        } else {
            Report.success('Nice! Click on start!', '', 'Okay');
            refs.btnStart.disabled = false;
        }
  },
};


const getDate = flatpickr("#datetime-picker", options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addToString(value) {
    return String(value).padStart(2, 0);
}


function calcTime({ days, hours, minutes, seconds }) {
    refs.dataDays.textContent = addToString(days);
    refs.dataHours.textContent = addToString(hours);
    refs.dataMinutes.textContent = addToString(minutes);
    refs.dataSeconds.textContent = addToString(seconds);
}