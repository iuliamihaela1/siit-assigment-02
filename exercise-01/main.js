function generateRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function calculate() {
    let firstNumber =  generateRandom(1,10)
    let secondNumber = generateRandom(1,10)

    let operation = generateRandom(1,3)
    let response;
    switch (operation) {
        case 1: 
            response = prompt(`${firstNumber} + ${secondNumber} = `)
            if (response == (firstNumber + secondNumber)) {
                alert('Correct')
            } else {
                alert('Incorect')
            }
            break;
        case 2: 
            response = prompt(`${firstNumber} - ${secondNumber} = `)
            if (response == (firstNumber - secondNumber)) {
                alert('Correct')
            } else {
                alert('Incorect')
            }
            break;
        case 3: 
            response = prompt(`${firstNumber} * ${secondNumber} = `)
            if (response == (firstNumber * secondNumber)) {
                alert('Correct')
            } else {
                alert('Incorect')
            }
    }
}