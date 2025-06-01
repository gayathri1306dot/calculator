// Append a value (number/operator) to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");

    if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculate();
    } else {
        display.value += value;
    }
}

// Clear the calculator display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Evaluate the expression in the display
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Use with caution; safe only for simple calculators
    } catch (error) {
        alert("Invalid Expression");
    }
}
