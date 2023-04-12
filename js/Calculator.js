export class Calculator {

    constructor() {
        this.number1 = undefined;
        this.number2 = undefined;
        this.operator = undefined;
        this.obtained = false;
    }

    setNumber1(number1) {
        this.number1 = Number.isInteger(number1) ? parseInt(number1) : parseFloat(number1);
    }

    setNumber2(number2) {
        this.number2 = Number.isInteger(number2) ? parseInt(number2) : parseFloat(number2);
    }

    setOperator(operator) {
        
        if (this.operator === undefined) {

            this.operator = operator;

        } else return
    }

    add() {

        if (this.number1 && this.number2) {

            this.number1 += this.number2;
            this.number2 = undefined;
            this.operator = undefined;
            this.obtained = true;

            console.log("Number1 " + this.number1, "Number2 " + this.number2);

        } else console.log("Arithmetic error !");
    }

    substract() {
        
        if (this.number1 && this.number2) {

            this.number1 -= this.number2;
            this.number2 = undefined;
            this.operator = undefined;
            this.obtained = true;

        } else console.log("Arithmetic error !");
    }

    multiply() {

        if (this.number1 && this.number2) {

            this.number1 *= this.number2;
            this.number2 = undefined;
            this.operator = undefined;
            this.obtained = true;

        } else console.log("Arithmetic error! Both numbers should be defined.");        
    }

    divide() {
 
        if (this.number1 && this.number2) {

            this.number1 /= this.number2;
            this.number2 = undefined;
            this.operator = undefined;
            this.obtained = true;

        } else console.log("Arithmetic error !");
    }

    squareRoot() {

        if (this.number1 && this.number2 === undefined) {

            this.operator = undefined;
            this.number1 = Math.sqrt(this.number1);
            this.obtained = true;
            
        } else console.log("One and only one number is required to get square root");
    }

    modulo() { // Doesn't exist on current Calculator

        if (this.number1 && this.number2) {

            if (this.number1 !== 0 && this.number2 !== 0) {

                this.operator = undefined;
                this.number1 = this.number1 % this.number2;
                this.obtained = true;
            }
        }
    }

    calculate() {

        switch(this.operator) {

            case "+":
                this.add();
                break;
            case "-":
                this.substract();
                break;
            case "*":
                this.multiply();
                break;
            case "/":
                this.divide();
                break;
            case "sqrt":
                this.squareRoot();
                break;
            case "%":
                this.modulo();
                break;
            default :
                console.log("MAJOR ERROR !");           
        }
    }

    reset() {
        this.number1 = undefined;
        this.number2 = undefined;
        this.operator = undefined;
        this.obtained = false;
    }

}