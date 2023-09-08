import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './js/currency';

// Business Logic

async function getAus(usa) {
  const response = await CurrencyExchange.getAustralia(usa);
  if (response.ok) {
    showCurrency(response, usa);
  } else {
    showError(response, usa);
  }
}

// UI Logic

function showCurrency(response, currency) {
  document.querySelector("#displayResults").innerText = `The value of $USD in ${currency} is ${response}`
}

function showError(error, currency) {
  document.querySelector("#displayResults").innerText = `There was an error converting value of $USD in ${currency}: is ${error}.`;
}

function formSubmission (event) {
  event.preventDefault();
  const usa = document.querySelector("#usd").value;
  document.querySelector("#usd").value = null;
  getAus(usa);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", formSubmission);
});