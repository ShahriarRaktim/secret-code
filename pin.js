function getPin() {
    const pin = Math.round(Math.random()*10000);
    const pinString = (pin + '');
    if(pinString.length == 4){
        return pin;
        console.log(pin)
    }
    else{
        getPin();
    }   
}
function generatePin() {
   const pin = getPin();
   document.getElementById('pin-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calInput = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            calInput.value = '';
        }
    } 
    else{
        
        const previousNumber = calInput.value;
        const newNumber = previousNumber+number;
        calInput.value = newNumber;
    } 
})

function varifyPin() {
    const pinInput = document.getElementById('pin-input').value;
    const number = document.getElementById('typed-number').value;
    const successMsg = document.getElementById('success-msg');
    const errorMsg = document.getElementById('error-msg');
    if(pinInput == number){
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        document.getElementById('pin-input').value = '';
    }
    else{
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        document.getElementById('pin-input').value = '';
    }
}

document.getElementById('success-msg').addEventListener('click', function () {
    window.location.href = 'cart.html';
})