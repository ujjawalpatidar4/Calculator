let result = document.querySelector('.result');
let display = document.querySelector('.display');
let number = document.querySelectorAll('.number-btn');
let op = document.querySelectorAll('.op-btn');
let equal = document.querySelector('.equals');
let clear = document.querySelector('.clear');
let backspace = document.querySelector('.backspace');

let firstnumber;
let secondnumber;
let initial;
let answer;
let remove;

// result.textContent="0";

number.forEach(numbers => {
    numbers.addEventListener('click', function () {
        firstnumber = numbers.textContent;
        result.textContent += firstnumber;
        secondnumber = display.textContent;
        console.log("sn", secondnumber);
        console.log("in", initial);
    })
});

op.forEach(operator => {
    operator.addEventListener('click', function () {
        initial = result.textContent;
        result.textContent = " ";
        if (type = "+") {
            display.textContent = add(secondnumber, initial) + " " + operator.textContent;
        }
        else if (type = "-") {
            display.textContent = sub(secondnumber, initial) + " " + operator.textContent;
        }
        else if (type = "*") {
            display.textContent = multiply(secondnumber, initial) + " " + operator.textContent;
        }
        else if (type = "/") {
            display.textContent = divide(secondnumber, initial) + " " + operator.textContent;
        }
        else if (type = "%"){
            display.text = remainder(secondnumber , initial) +" " + operator.textContent;
        }
        else {
            display.textContent = "invalid";
        }
    })
});

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a,b){
    return a%b;
}

equal.addEventListener('click', function () {
    answer = display.textContent + result.textContent;
    display.textContent = answer;
    result.textContent = eval(answer);
    initial = "";
    secondnumber = "";
    // console.log(answer);
    // console.log(eval(answer));
});

clear.addEventListener('click', function () {
    display.textContent = "";
    result.textContent = "";
    // console.log("sn",secondnumber);
    // console.log("in",initial);
});


backspace.addEventListener('click', function () {
    remove = result.textContent;
    remove = remove.slice(0, -1);
    result.innerHTML = remove;
    // console.log(remove);
    return remove;
});