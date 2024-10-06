function max() {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < 5; i ++) {
        let number = parseInt(prompt('Input number'))
        if (number > max) {
            max = number;
        }   
    }
    console.log(`The maximum is max ${max}`)
}