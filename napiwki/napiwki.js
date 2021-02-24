const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {

    if (price.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszsystkie pola'
    } else {
        countBill()
    }
}
const countBill = () => {
    const newPrice = price.value;
    const newPeople = people.value;
    const newTip = tip.value;

    const cun = (newPrice + (newPrice + newTip))
}

countBtn.addEventListener('click', showBill)