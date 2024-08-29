
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
const currencyElement_one = document.getElementById('currency-one');
const amountElement_one = document.getElementById('amount-one');
const currencyElement_two = document.getElementById('currency-two');
const amountElement_two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch exchange rate and update the DOM

//Event Listeners