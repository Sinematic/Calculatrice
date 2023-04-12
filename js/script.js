import { Calculator } from "./Calculator.js";

const calculator = document.getElementById("calculator");
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const previousNumber = document.createElement("p");
const arithmeticOperator = document.createElement("span");
const on = document.getElementById("on");
const off = document.getElementById("off");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const float = document.getElementById("float");
const add = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const root = document.getElementById("square-root");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

const calculus = new Calculator();

let started = false;


previousNumber.setAttribute("id", "number1");
calculator.appendChild(previousNumber);

arithmeticOperator.setAttribute("id", "operator");
calculator.appendChild(arithmeticOperator);


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


const body = document.querySelector("body");

function switchState() {

    if (started)
    {
        started = false;
        
        result.innerText = "";
        previousNumber.innerText = "";
        arithmeticOperator.innerText = "";
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
        previousNumber.innerText = "";
        arithmeticOperator.innerText = "";
        calculus.reset();
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

function setResultAddOperator(operator) {

    // console.info("Calculator started : " + started);
    if (started) {

        if (calculus.operator === undefined) {

            if (result.innerText === "" && previousNumber.innerText === "") {
    
                console.info("Please define number first !");
                body.style.backgroundColor = "blue";
            
            } else {
    
                if (result.innerText !== "" ) {
    
                    if (previousNumber.innerText === "") {

                        calculus.setNumber1(result.innerText);
                        calculus.setOperator(operator);
                        result.innerText = "";
                        previousNumber.innerText = calculus.number1;
                        arithmeticOperator.innerText = calculus.operator;
                        body.style.backgroundColor = "orange";

                    } else {

                        updateOperator(operator);
                        body.style.backgroundColor = "pink";
                    }
                }
            }
    
        } else {
    
            if (result.innerText !== "" && previousNumber.innerText !== "") {
    
                body.style.backgroundColor = "black";
                updateOperator(operator);
                
            } else console.log("Only one arithmetic operator at a time !");
        }
    }
}

function updateNumber(number) {

    if (result.innerText === "" && previousNumber.innerText !== "" && arithmeticOperator === "") {

        body.style.backgroundColor = "red";
        console.log("Define arithmetic operator first !");

    } else if (calculus.obtained && arithmeticOperator.innerText === "") {

        body.style.backgroundColor = "red";
        console.log("Define arithmetic operator first !");

    } else {

        if (calculus.obtained) {

            previousNumber.innerText = calculus.number1;
            calculus.obtained = false;
            result.innerText = number;

        } else {
            result.innerText += number;
        }
    }
}

function setResult() {

    calculus.setNumber1(previousNumber.innerText);
    calculus.setNumber2(result.innerText);
    calculus.calculate();
    result.innerText = calculus.number1;
    previousNumber.innerText = "";
    arithmeticOperator.innerText = "";
    body.style.backgroundColor = "green";
}

function updateOperator(operator) {
    
    calculus.setNumber1(previousNumber.innerText);
    calculus.setNumber2(result.innerText);
    calculus.calculate();
    calculus.setOperator(operator);
    arithmeticOperator.innerText = calculus.operator;
    result.innerText = calculus.number1;
    previousNumber.innerText = "";
    body.style.backgroundColor = "green";
}

one.addEventListener("click", () => updateNumber("1"));
two.addEventListener("click", () => updateNumber("2"));
three.addEventListener("click", () => updateNumber("3"));
four.addEventListener("click", () => updateNumber("4"));
five.addEventListener("click", () => updateNumber("5"));
six.addEventListener("click", () => updateNumber("6"));
seven.addEventListener("click", () => updateNumber("7"));
eight.addEventListener("click", () => updateNumber("8"));
nine.addEventListener("click", () => updateNumber("9"));
zero.addEventListener("click", () => updateNumber("0"));
    
float.addEventListener("click", function() {
    
        let temp = result.innerText;
    
        if (temp.indexOf(".") > -1) {
            console.log("Only 1 float is possible !");
    
        } else result.innerText += ".";
});
    
add.addEventListener("click", () => setResultAddOperator("+"));
minus.addEventListener("click", () => setResultAddOperator("-"));
multiply.addEventListener("click", () => setResultAddOperator("*"));
divide.addEventListener("click", () => setResultAddOperator("/"));
root.addEventListener("click", () => setResultAddOperator("sqrt"));
    
equals.addEventListener("click", function() {
    
        if (started) {
    
            if (previousNumber.innerText !== "" && result.innerText !== "" && calculus.operator) {
             
                setResult();
            } else console.log("Fill the numbers first !");
        }
});
    
clear.addEventListener("click", function() {
    
        result.innerText = "";
        previousNumber.innerText = "";
        arithmeticOperator.innerText = "";
        calculus.reset();
});

