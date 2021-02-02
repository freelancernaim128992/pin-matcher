// Making Random Pin
function getPin() {
    const randomNumber = Math.random() * 10000;
    const pin = Math.round(randomNumber);
    if (pin > 1000) {
        return pin;
    }
    else {
        return getPin();
    }
}
document.getElementById('random-code-btn').addEventListener('click', function () {
    const pinNumb = getPin();
    document.getElementById('random-code-input').value = pinNumb;
})


// Making a Calculator
document.getElementById('calculator-btn').addEventListener('click', function (e) {
    const digit = e.target.innerText;
    if (isNaN(digit)) {
        // handler backspace
        // handler clear
        if (digit === 'C') {
            const digitInput = document.getElementById('digit-input');
            digitInput.value = '';
        }
    }
    else {
        const digitInput = document.getElementById('digit-input');
        digitInput.value = digitInput.value + digit;
    }
})


// Matching Pin
document.getElementById('submit').addEventListener('click', function () {
    const matchPin = document.getElementById('random-code-input').value;
    const matchInput = document.getElementById('digit-input').value;
    if (matchPin === matchInput) {
        getMatch('block', 'none')
    }
    else {
        getMatch('none', 'block')
    }
})


// get Alert message
function getMatch(correct, incorrect) {
    document.getElementById('pin-match').style.display = correct;
    document.getElementById('not-match').style.display = incorrect;
}