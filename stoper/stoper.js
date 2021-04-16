const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const stopBtn = document.querySelector('.stop')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let countTime;
let minutes = 0;
let seconds = 0;
let timeArr = []
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




    }, 0, 1);
}

const handleStop = () => {
    time.innerHTML = `ostatni czas ${stopwatch.textContent}`
    if (stopwatch.textContent !== '0: 00') {
        time.style.visibility = 'visible'
        timeArr.push(stopwatch.textContent)
    }


    clearStuff()
}

const handlePause = () => {
    clearInterval(countTime)
}
const handleReset = () => {
    time.style.visibility = 'hidden';
    timeArr = [];
    clearStuff();
}
const clearStuff = () => {
    clearInterval(countTime)
    stopwatch.textContent = '0:00'
    timeList.textContent = ''
    seconds = 0;
    minutes = 0;
}
const showHistory = () => {
    timeList.textContent = ''
    let num = 1;
    timeArr.forEach(time => {
        const newTime = document.createElement('li')
        newTime.innerHTML = `pomian nr ${num} : <span>${time}</span>`

        timeList.appendChild(newTime)
        num++;
    })
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)
historyBtn.addEventListener('click', showHistory)
