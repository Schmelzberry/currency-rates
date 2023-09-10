import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency';

// Business Logic

async function getRates() {
  const response = await CurrencyExchange.getRates();
  return response.conversion_rates;
}

// UI Logic

function showResults(amount, targetCurrency, conversionRates) {
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
  const targetCurrency = document.querySelector("#newCurrency")

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