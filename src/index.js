import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getRates from './js/currency';

// UI Logic


function showResults(amount, targetCurrency, conversionRates) {
  amount = document.querySelector("#usd").value;
  const displayResults = document.querySelector("#displayResults");

  if (conversionRates[targetCurrency] !== undefined) {
    const convertedAmount = amount * conversionRates[targetCurrency];
    displayResults.innerText = `Converted amount: ${amount} USD = ${convertedAmount} ${targetCurrency}`;
  } else {
    displayResults.innerText = `Currency code "${targetCurrency}" not found in conversion rates.`;
  }
}


function showError(error) {
  const displayResults = document.querySelector("#displayResults");
  displayResults.innerText = `Error: ${error.message}`;
}

function formSubmission(event) {
  event.preventDefault();
  const userAmount = document.querySelector("#usd").value;
  const targetCurrency = document.querySelector("#newCurrency").value;

  if (isNaN(userAmount)) {
    showError(new Error("Please enter a valid number!"));
    return;
  }

  getRates()
    .then((conversionRates) => {
      showResults(userAmount, targetCurrency, conversionRates);
    })
    .catch((error) => {
      showError(error);
    });
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", formSubmission);
});