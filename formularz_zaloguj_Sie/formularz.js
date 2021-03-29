const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBTn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text')
    formBox.classList.add('error')
    errorMsg.textContent = msg;
}
const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}
const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}
const checkLength = (input, min) => {
    const val = input.value.length;
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)}cos sklada sie z min ${min} znakow`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1 !== pass2.value) {
        showError(pass2, 'hasła do siebie nie passuja')
    }
}
const checkMail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail jest nie pooprawny')
    }

}

sendBTn.addEventListener('click', e => {
    e.preventDefault()
    checkForm([username, password, password2, email])
    checkLength(username, 3)
    checkLength(password, 8)
    checkPassword(pass1, pass2)
    checkMail(email)

})

const check = input => {
    input.forEach(el => {
        if (el.value === '') {
            console.log(error)
        } else {
            console.log(ok)
        }
    })
}


clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
    })
})
