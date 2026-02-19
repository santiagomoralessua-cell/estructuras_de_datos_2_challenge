javascript
    //regular
function checkOddOrEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
        } else {
    console.log(number + " is Odd");
    }
}

// arrow
const checkOddOrEvenArrow = (number) => {
    if (number % 2 === 0) {
        console.log(number + " is Even");
        } else {
            console.log(number + " is Odd");
    }
};

// Tests
checkOddOrEven(7);
checkOddOrEvenArrow(12);