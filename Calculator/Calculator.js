// Creates an object to keep track of values
const Calculator = {
    // This displays 0 on the screen
    Display_Value: '0',
    // This will hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    // This checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // This will hold the operator, we set it to null for now
    Operator: null,
};

// This modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, wait_Second_Operand } = Calculator;
    // we are checking to see if Wait_Second_Operand is true and set
    // Display_Value to the key that was clicked.
    if (wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.wait_Second_Operand = false;
    } else {
        // This overwrites Display_Value if the current value is 0
        // Otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// This section handles decimal points
function Input_Decimal(dot) {
    // This ensures that accidental clicking of the decimal point
    // doesn't cause bugs in your operation
    if (Calculator.wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // we are saying that if the Display_Value does not contain a decimal point
        // We want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, Operator } = Calculator
    // when an operator key is pressed, we convert the current number
    // displayed on the screen to a number and then store the result in 
    // Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // Checks if an operator already exists and if Wait_Second_Operand is true,
    // Then updates the operator and exits from the function
    if (Operator && Calculator.wait_Second_Operand) {
        Calculator.Operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (Operator) {
        // Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        // If operator already exists, property lookup is performed for the operator
        // In the Perfom_Calculation object and the function that matches the
        // Operator is executed
        const result = Perform_Calculation[Operator] (Value_Now, Value_of_Input);

        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }

    Calculator.wait_Second_Operand = true;
    Calculator.Operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.wait_Second_Operand = false;
    Calculator.Operator = null;
}
// This function updates the screen with contens of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // The target variable is an object that represents the element
    // that was clicked
    const { target } = event;
    // if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('Operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    } 
    // Ensures that AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display;
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})
