const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = ['tak!', 'nie', 'może', 'ciezko powiedziec', 'nie chcesz znac dpowiedzi na to pytanie...'
]
const shakeBall = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}


const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = ''
        ball.classList.remove('shake-animation')
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'pytanie musi byc zakonczone "?". ';
        answer.textContent = '';
        ball.classList.remove('shake-animation')
    } else {
        error.textContent = 'Musisz zadac pytanie';
        answer.textContent = ''
        ball.classList.remove('shake-animation')
    }
}




const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5)
    answer.innerHTML = `<span>Odpowiedz:</span> ${answerArr[number]}`
}
ball.addEventListener('click', shakeBall)
