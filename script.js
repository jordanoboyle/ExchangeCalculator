

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