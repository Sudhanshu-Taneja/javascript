const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

    event.preventDefault();
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#bmi-value');
    const category = document.querySelector('#weight-status');
    
    if (height === '' || weight === '' || height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        result.innerHTML = 'Please enter valid values';
        return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    result.innerHTML = `${bmi}`;

    if (bmi < 18.5) {
        category.innerHTML = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category.innerHTML = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category.innerHTML = 'Overweight';
    } else {
        category.innerHTML = 'Obesity';
    }

});