
//Right here is a basic explanation of what is going on with fetch API. 
//Basic GET request
function getTheData() {
  fetch('exampleJson.js')
    .then(function(response) {  //don't forget that functions need a RETURN
      return response.json();
    })
    .then(function(data) {
      return console.log(data);
    });
}
getTheData();

function getTheData2() {
  fetch('exampleJson.js')
    .then(response => response.json())
    .then(data => console.log(data));
}

getTheData2();

//Example of what you can do with this (will be commented out)
//UNCOMMENT: This will replace the whole page but it is meant to teach what we can do with fetched data
// function getTheData3() {
//   fetch('exampleJson.js')
//     .then(response => response.json())
//     .then(data => document.body.innerHTML = data[2].text);
// }
// getTheData3();


//DOM Elements needed:
const currencyElementOne = document.getElementById('currency-one');
const amountElementOne = document.getElementById('amount-one');
const currencyElementTwo = document.getElementById('currency-two');
let amountElementTwo = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch exchange rate and update the DOM
function calculateExchange() {
  const currency_one = currencyElementOne.value;
  const currency_two = currencyElementTwo.value;
  // console.log(currency_one, currency_two);
  

  fetch(`https://open.er-api.com/v6/latest/${currency_one}`)
    .then(response => response.json()) //these are what is known as promises
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];
      console.log(rate);

      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
      console.log(amountElementTwo.value, currencyElementTwo.value);


    })
    .catch(error => console.error("Error fetching rates", error));

}

//Event Listeners
currencyElementOne.addEventListener('change', calculateExchange);
amountElementOne.addEventListener('input', calculateExchange);
currencyElementTwo.addEventListener('change', calculateExchange);
amountElementTwo.addEventListener('input', calculateExchange);

swap.addEventListener('click', () => {
  const tempCurrencyValue = currencyElementOne.value;
  
  currencyElementOne.value = currencyElementTwo.value;
  
  currencyElementTwo.value = tempCurrencyValue;
});

calculateExchange();