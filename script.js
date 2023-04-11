import { Calculator } from "./Calculator.js";

const calculator = document.getElementById("calculator");
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const previousNumber = document.createElement("p");
const sign = document.createElement("span");

const calculus = new Calculator();

let started = false;

const on = document.getElementById("on");
const off = document.getElementById("off");

previousNumber.setAttribute("id", "number1");
calculator.appendChild(previousNumber);

sign.setAttribute("id", "operator");
calculator.appendChild(sign);


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
        previousNumber.innerText = "";
        sign.innerText = "";
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
        sign.innerText = "";
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

function updateOperator(operator) {

    if (previousNumber.innerText === "") {

        if (result.innerText !== "") {

            calculus.setNumber1(result.innerText);
            calculus.setOperator(operator);
            previousNumber.innerText = result.innerText;
            result.innerText = "";
            sign.innerText = operator;

        } else return


    } else {

        if (result.innerText !== "") {

            calculus.setNumber2(result.innerText);
            calculus.calculate();
            previousNumber.innerText = "";
            console.log("voiciiiiii" + calculus.number1);
            result.innerText = calculus.number1;
            sign.innerText = "";
        }
    }
}

function updateNumber(number, Calculator) {

    console.log(Calculator.obtained);

    if (Calculator.obtained) {

        if (Calculator.operator !== undefined) {

            Calculator.setNumber1(result.innerText);
            Calculator.obtained = false;
            previousNumber.innerText = Calculator.number1;
            result.innerText = number;

        } else console.log("Assign an operator first !");

        

    } else result.innerText += number;


    
}

function setResult() {

    calculus.setNumber2(result.innerText);
    calculus.calculate();
    previousNumber.innerText = "";
    sign.innerText = "";
    result.innerText = calculus.number1;
}

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

one.addEventListener("click", () => updateNumber("1", calculus));
two.addEventListener("click", () => updateNumber("2", calculus));
three.addEventListener("click", () => updateNumber("3", calculus));
four.addEventListener("click", () => updateNumber("4", calculus));
five.addEventListener("click", () => updateNumber("5", calculus));
six.addEventListener("click", () => updateNumber("6", calculus));
seven.addEventListener("click", () => updateNumber("7", calculus));
eight.addEventListener("click", () => updateNumber("8", calculus));
nine.addEventListener("click", () => updateNumber("9", calculus));
zero.addEventListener("click", () => updateNumber("0", calculus));

float.addEventListener("click", function() {

    result.innerText += ".";
});

const float = document.getElementById("float");
const add = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const root = document.getElementById("square-root");
const modulo = document.getElementById("modulo");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

add.addEventListener("click", () => updateOperator("+"));
minus.addEventListener("click", () => updateOperator("-"));
multiply.addEventListener("click", () => updateOperator("*"));
divide.addEventListener("click", () => updateOperator("/"));
root.addEventListener("click", () => updateOperator("sqrt"));
modulo.addEventListener("click", () => updateOperator("%"));


equals.addEventListener("click", function() {

    if (started) {

        if (previousNumber.innerText !== "" && result.innerText !== "") {
         
            setResult();
        }
    }
});

clear.addEventListener("click", function() {

    result.innerText = "";
    previousNumber.innerText = "";
    sign.innerText = "";
});
