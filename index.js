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
    // console.log(e);
    if (operators.includes(buttonValue)) {
      // Operator clicked
      if(operator){
        operand2 = parseFloat(document.getElementById('output').innerText);
        const result = calculate(operand1, operator, operand2);
        operator = buttonValue;
        operand1 = result;
        document.getElementById('output').textContent = '';
      }
      else{
        operator = buttonValue;
        operand1 = parseFloat(document.getElementById('output').innerText);
        document.getElementById('output').textContent = ''; // Clear display for next input
        
        //innertext and textContent being used INTERCHANGE-ABLY
      }
      
    } else if (buttonValue === '=') {
      // Equals clicked
      operand2 = parseFloat(document.getElementById('output').innerText);
      const result = calculate(operand1, operator, operand2);
      document.getElementById('output').textContent = result;
      operator = null;
      operand1 = result;
      operand2 = null;

    } else if (buttonValue === 'C') {
      // Clear clicked
      operator = null;
      operand1 = null;
      operand2 = null;
      document.getElementById('output').textContent = '';
      
    } else {
      // Number clicked
      const currentDisplay = document.getElementById('output').innerText;
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
