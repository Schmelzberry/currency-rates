import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency';

// Business Logic

async function getRates() {
  const response = await CurrencyExchange.getRates();
  if (response.result === "success") {
    showEuro(response);
  } else {
    showError(response.result);
  }
}

// UI Logic

function showResults(amount, targetCurrency, conversionRates) {
  const displayResults = document.querySelector("#displayResults");
  
  if (conversionRates.hasOwnProperty(targetCurrency)) {
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

function formSubmission (event) {
  event.preventDefault();
  const usa = document.querySelector("#usd").value;
  document.querySelector("#usd").value = null;
  getRates(usa);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", formSubmission);
});