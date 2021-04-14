const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const stopBtn = document.querySelector('.stop')
const histryBtn = document.querySelector('.histry')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime;
let minutes = 0;
let seconds = 0;
const handleStart = () => {
    countTime = setInterval(() => {

        if (seconds < 9) {
            seconds++
            stopwatch.textContent = `${minutes} :0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++
            stopwatch.textContent = `${minutes} :${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }




    }, 1000);
}

startBtn.addEventListener('click', handleStart)