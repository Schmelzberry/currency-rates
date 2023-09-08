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

function showEuro(response) {
  const displayResults = document.querySelector("#displayResults");
  const euroCode = "EUR";
  const euroRate = response.conversion_rates[euroCode];

  if (euroRate !== undefined) {
    displayResults.innerText = `The conversion rate for USD to ${euroCode} is: ${euroRate}`;
  } else {
    displayResults.innerText = `Currency code "${euroCode}" not found in conversion rates.`;
  }
}


function showError(error, response) {
  const displayResults = document.querySelector("#displayResults");
  displayResults.innerText = `There was an error converting value of $USD in ${error.message} ${response.conversion_rates}.`;
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