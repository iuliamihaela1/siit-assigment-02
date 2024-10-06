function array() {
    let nrElements = prompt('How many elements will you provide ?')
    let array = [];
    let zero = one = two = 0;

    for (let i = 0; i < nrElements; i++) {
        array.push(parseInt(prompt(`Please input element ${i+1}`)))
    }

    for (i = 0; i < nrElements; i++) {
        let modulo = array[i] % 3

        switch(modulo) {
            case 0:
                zero ++;
                break;
            case 1:
                one++;
                break
            case 2:
                two++;
                break    
        }
    }

    console.log(`${zero} numbers you have provided have the reminder of division by 3 equal to 0`)
    console.log(`${one} numbers you have provided have the reminder of division by 3 equal to 1`)
    console.log(`${two} numbers you have provided have the reminder of division by 3 equal to 2`)
}