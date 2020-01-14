'use strict';

function getDogImages(userInput) {
    const dogURL = "https://dog.ceo/api/breeds/image/random/" + userInput;
    console.log(dogURL);
    fetch("https://dog.ceo/api/breeds/image/random/" + userInput)
        .then(response => response.json())
        .then(responseJson =>
            console.log(responseJson.message))
        .catch(error => alert("Something went wrong. Try again later."));
}

function checkInput () {
    const userInput = $('.input-number').val();
    if (userInput < 1 || userInput > 50) {
        alert("Please enter a number equal to or greater than 1 and equal to or less than 50.");
    } else {
        getDogImages(userInput);
    }
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      checkInput();
    });
  }

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });