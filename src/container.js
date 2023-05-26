const inputNombreTarjeta = document.getElementById('nombre-tarjeta');
const cardName = document.querySelector('.card-name');
const nombreOriginal = cardName.textContent;

inputNombreTarjeta.addEventListener('input', function() {
    if (inputNombreTarjeta.value === '') {
        cardName.textContent = nombreOriginal;
    } else {
        cardName.textContent = inputNombreTarjeta.value;
    }
});



const inputNumerosTarjeta = document.getElementById('numeros-tarjeta');
const cardNumber = document.querySelector('.card-number');
const numerosOriginales = cardNumber.textContent;

inputNumerosTarjeta.addEventListener('input', function() {
    if (inputNumerosTarjeta.value === '') {
        cardNumber.textContent = numerosOriginales;
    } else {
        cardNumber.textContent = inputNumerosTarjeta.value;
    }
});

const inputMes = document.getElementById('cardinput-mes');
const inputAño = document.getElementById('cardinput-año');
const spanMes = document.getElementById('card-mes');
const spanAño = document.getElementById('card-año');

inputMes.addEventListener('input', function() {
    spanMes.textContent = inputMes.value;
});

inputAño.addEventListener('input', function() {
    spanAño.textContent = inputAño.value;
});



const inputCVV = document.getElementById('card-CVV');
const cvv = document.querySelector('.CVV');

inputCVV.addEventListener('input', function() {
    cvv.textContent = inputCVV.value;
});