const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBTn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const check = input => {
    input.forEach(el => {
        if (el.value === '') {
            console.log(ok)
        } else {
            console.log(error)
        }
    })
}
sendBTn.addEventListener('click', e => {
    e.preventDefault()

    checkForm([username, pass,.pass2, email])
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
    })
})
