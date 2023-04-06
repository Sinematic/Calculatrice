const calculator = document.getElementById("calculator");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

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
        console.log(started);

        
        result.innerText = "";
        result.style.backgroundColor = "#24282C";
        result.style.borderColor = "#24282C"

        for (let i = 0; i < buttons.length; i++)
        {
            const button = buttons[i];
            button.style.backgroundColor = "#4b4848";

        }

    } else {

        started = true;
        result.style.backgroundColor = "cornsilk";
        result.style.borderColor = "#1DA1F2";
        console.log(started);
        calculator.style.backgroundColor = "lightgrey";

        for (let i = 0; i < buttons.length; i++)
        {
            const button = buttons[i];
            button.style.backgroundColor = "#c4c4c4";
        }

    }
}

