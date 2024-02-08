const buttons= document.querySelectorAll(".button");
var operator;
var operand1;
var operand2;
const operators=['+' , '-' , '*' , '/' , '%' ];

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        handleChange(e)
    })
})

function handleChange(e){
    const buttonValue = e.target.innerHTML;
    console.log(buttonValue);
    if (operators.includes(buttonValue)) {
      // Operator clicked
      operator = buttonValue;
      operand1 = parseFloat(document.getElementById('output').textContent);
      document.getElementById('output').textContent = ''; // Clear display for next input
    } else if (buttonValue === '=') {
      // Equals clicked
      operand2 = parseFloat(document.getElementById('output').textContent);
      const result = calculate(operand1, operator, operand2);
      document.getElementById('output').textContent = result;
    } else if (buttonValue === 'C') {
      // Clear clicked
      operator = null;
      operand1 = null;
      operand2 = null;
      document.getElementById('output').textContent = '';
    } else {
      // Number clicked
      const currentDisplay = document.getElementById('output').textContent;
      document.getElementById('output').textContent = currentDisplay + buttonValue;
    }
}

function calculate(operand1, operator, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand2 !== 0 ? operand1 / operand2 : 'Error: Division by zero';
    case '%':
      return operand1 * (operand2 / 100);
    default:
      return 'Error: Invalid operator';
  }
}
