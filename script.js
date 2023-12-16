function calculateMaturityAmount() {
    // Get input values from the form elements
    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
    const resultElement = document.getElementById('result');

    // Validate inputs
    if (isNaN(principle) || isNaN(interestRate) || isNaN(tenure) || principle <= 0 || interestRate <= 0 || tenure <= 0) {
        resultElement.innerText = 'Please enter valid and positive values for all fields.';
        return;
    }

    // Perform the Calculation
    const maturityAmount = principle + (principle * interestRate * tenure) / 100;

    // Display the Result
    resultElement.innerText = `Maturity Amount: $${maturityAmount.toFixed(2)}`;
}

// Attach the event listener to the calculate Button
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);

// Add event listener to Clear button
document.getElementById('clearBtn').addEventListener('click', clearForm);

function clearForm() {
    document.getElementById('principle').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('tenure').value = '';
    document.getElementById('result').innerText = 'Maturity Amount';
}
