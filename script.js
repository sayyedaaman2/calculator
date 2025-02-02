document.addEventListener('DOMContentLoaded',function(){

    // disply element
    let displyElement = document.querySelector('.display');

   

    // input section 
    let inputSection = document.getElementById('input-section');
    inputSection.addEventListener('click', function(e) {
        const target = e.target;
        // console.log(target.innerText)
        if (target.classList.contains('operand')) {
            addValue(target.innerText);
        } else if (target.classList.contains('operator')) {
            const lastChar = displyElement.innerText.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar)) {
                displyElement.innerText = displyElement.innerText.slice(0, -1);
            }
            switch (target.innerText) {
                case '+':
                    plus();
                    break;
                case '-':
                    minus();
                    break;
                case 'x':
                    multiple();
                    break;
                case '/':
                    divide();
                    break;
                case '=':
                    equal();
                    break;
                case 'C':
                    clearDisplay();
                    break;
                case '←':
                    deleteValue();
                    break;
                case '.':
                    addPrecision();
                    break;
                case '%':
                    percentage();
                    break;
                case '1/x':
                    reciprocal();
                    break;
                case 'x^2':
                    square();
                    break;
                case '2/x':
                    twoDivideX();
                    break; 
                
            }
        }
    });

    function addValue(value){
        if(displyElement.innerText == "0" && value !== '.'){
            displyElement.innerText = value;
        }else{

            displyElement.innerText += value;
        }
    }
    function addPrecision(){
        displyElement.innerText += '.';
    }
    function plus(){
        displyElement.innerText += "+";
    }
    function minus(){
        displyElement.innerText += "-";

    }
    function multiple(){
        displyElement.innerText += "*"
    }
    function divide(value){
        displyElement.innerText += '/'

    }
    function equal(){
        displyElement.innerText = eval(displyElement.innerText);
    }

    function deleteValue(){
        if(displyElement.innerText == "") return null;
        displyElement.innerText = displyElement.innerText.slice(0, -1);
    }
    function clearDisplay(){
        displyElement.innerText = "0";
    }
    function percentage() {
        displyElement.innerText += '%';
    }
    function reciprocal() {
        displyElement.innerText = 1 / parseFloat(displyElement.innerText);
    }

    function square() {
        displyElement.innerText = Math.pow(parseFloat(displyElement.innerText), 2);
    }

    function twoDivideX() {
        displyElement.innerText = 2 / parseFloat(displyElement.innerText);
    }
})