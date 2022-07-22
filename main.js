class Calculator{
    //A simple calculator application 
    // Contains two numbers and one operation
    //Must have a previous text and current text, once a number is entered it is a current number 
    //it is the followed by an operator which comvert the current number into previous and the next new number will be the current number
    //Once = or any other operator is hit the result is computed and the result becomes current if = was hit or previous it any other operator was hit.
    constructor(previousText, currentText){
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }

    //Function takes the a number/digit clicked by the user as a character and appends it to the current string of numbers
    appendNumber(number){
        //if the current sting is NA it will be removed
        if (this.curr == "NA"){
            this.curr = ""
        }

        //if the number is a decimal point and current already includes one then return without appending
        if (number === '.' && this.curr.includes('.')) return

        //append to the current string
        this.curr = this.curr.toString() + number.toString()

        //check if the current string is within the boundary else convert it to NA
        if (parseFloat(this.curr) > 9999.99 ||  parseFloat(this.curr) < -9999.99){
            this.curr = "NA"
        }
    }

    //If the input character is an operator the function will remember what operation to be computed once the next number is entered
    operationType(operation){
        //If current is none then return
        if (this.curr === '') return

        //If previous number is not none ie user is doing consecutive operations eg 2 + 3 - ( after encountering the minus here 2 + 3 is computed and the result becomes the previous) 
        if (this.prev !== ''){
            this.compute()
        }

        // store the operator
        this.operation = operation
        this.prev = this.curr
        this.curr = ""
    }

    //Computes the operation using the previous and current numbers
    compute(){

        let computation
        //convert numbers into floats 
        const num1 = parseFloat(this.prev)
        const num2 = parseFloat(this.curr)
        // If any of the two is not a number then return
        if(isNaN(num1) || isNaN(num2)) return

        //Do the appropriate operation
        switch(this.operation){
            case '+':
                computation = (num1 + num2)
                break
            case '-':
                computation = num1 - num2
                break
            case '*':
                computation = (num1 * num2)
                break
            case '/':
                computation = (num1 / num2)
                break
            default:
                return
        }
        //Convert the result to have a two digit floating point
        computation = computation.toFixed(2)

        //Check if it is out of boundary
        if (computation > 9999.99 ||  computation < -9999.99){
            this.curr = "NA"
            this.operation = undefined
            this.prev = ''
        }
        //If it's within boundary the current number if the computed result and reset the operation and previous variables
        else{
            this.curr = computation
            this.operation = undefined
            this.prev = ''
        }  
    }

    //Will reset all the variables
    clear(){
        this.curr = ""
        this.prev = ""
        this.operation = undefined
    }
    //Will delete just the last number entered
    delete(){
        this.curr = this.curr.toString().slice(0, -1)
    }
    
    //Displays the current and previous text
    display(){
        this.currentText.innerText = this.curr
        this.previousText.innerText = this.prev

    }
    // Will negate the number this can be done anytime
    negate(){
        //If already negative then make it positive by removing the "-"
        if (this.curr.toString().charAt(0) == "-"){
            this.curr = this.curr.toString().slice(-(this.curr.toString().length - 1))
        }
        //else add - at the start
        else{
            this.curr = "-" + this.curr.toString()
        }
    }
}

//Button classes
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const previousText = document.querySelector('[data-prev]')
const currentText = document.querySelector('[data-curr]')
const negateText = document.querySelector('[data-neg]')

//Create a calculator object
const calculator = new Calculator(previousText, currentText)

//If numeric buttons then append it to current display it on the screen
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.display()
    })
})

//If operation buttons then assign the operation display the contents on the screen
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operationType(button.innerText)
        calculator.display()
    })
})

//If equals button is hit compute the result
equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.display()
})

//If AC button is hit call clear function and display
clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.display()
})

//If DEL button is hit call delete function and display
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.display()
})

//If NEG button is hit call negate function and display
negateText.addEventListener('click', () => {
    calculator.negate()
    calculator.display()
})



