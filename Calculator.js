export class Calculator {

    constructor() {
        this.number1 = undefined;
        this.number2 = undefined;
        this.operator = undefined;
    }

    add() {

        this.number1 += this.number2;
        this.number2 = undefined;
    }

    substract() {

        this.number1 -= this.number2;
        this.number2 = undefined;
    }

    multiply() {

        this.number1 *= this.number2;
        this.number2 = undefined;
    }

    divide() {

        this.number1 /= this.number2;
        this.number2 = undefined;
    }

    squareRoot() {

        return Math.sqrt(this.number1);
    }

}