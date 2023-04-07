const calculator = document.getElementById("calculator");
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

let started = false;

const on = document.getElementById("on");
const off = document.getElementById("off");

on.addEventListener("click", function() {

    if(started === false)
    {
        switchState();
    }

});

off.addEventListener("click", function(){
    
    if (started)
    {
        switchState();
    }

});


function switchState() {

    if (started)
    {
        started = false;
        
        result.innerText = "";
        result.style.backgroundColor = "#24282C";
        result.style.borderColor = "#24282C"

        calculator.style.backgroundColor = "darkgrey";

        for (let i = 0; i < buttons.length; i++)
        {
            const button = buttons[i];
            button.style.backgroundColor = "#4b4848";

        }

    } else {

        started = true;

        result.innerText = "";
        result.style.backgroundColor = "cornsilk";
        result.style.borderColor = "#1DA1F2";
        
        calculator.style.backgroundColor = "lightgrey";

        for (let i = 0; i < buttons.length; i++)
        {
            const button = buttons[i];
            button.style.backgroundColor = "#c4c4c4";
        }

    }
}


const one = document.getElementById("1");

one.addEventListener("click", function() {

    result.innerText += "1";

});

const two = document.getElementById("2");

two.addEventListener("click", function() {

    result.innerText += "2";

});

const three = document.getElementById("3");

three.addEventListener("click", function() {

    result.innerText += "3";

});

const four = document.getElementById("4");

four.addEventListener("click", function() {

    result.innerText += "4";

});

const five = document.getElementById("5");

five.addEventListener("click", function() {

    result.innerText += "5";

});

const six = document.getElementById("6");

six.addEventListener("click", function() {

    result.innerText += "6";

});

const seven = document.getElementById("7");

seven.addEventListener("click", function() {

    result.innerText += "7";

});

const eight = document.getElementById("8");

eight.addEventListener("click", function() {

    result.innerText += "8";

});

const nine = document.getElementById("9");

nine.addEventListener("click", function() {

    result.innerText += "9";

});

const zero = document.getElementById("0");

zero.addEventListener("click", function() {

    result.innerText += "0";

});

const add = document.getElementById("plus");

add.addEventListener("click", function() {

    result.innerText += "+";

});

const minus = document.getElementById("minus");

minus.addEventListener("click", function() {

    result.innerText += "-";

});

const multiply = document.getElementById("multiply");

multiply.addEventListener("click", function() {

    result.innerText += "*";

});

const divide = document.getElementById("divide");

divide.addEventListener("click", function() {

    result.innerText += "/";

});

const root = document.getElementById("square-root");

root.addEventListener("click", function() {

    result.innerText += "lkmkjmlkjkj";

});

const equals = document.getElementById("equals");

equals.addEventListener("click", function() {

    console.log(parseInt(result.innerText));
    result.innerText = parseInt(result.innerText);

});

const clear = document.getElementById("clear");

clear.addEventListener("click", function() {

    result.innerText = "";

});