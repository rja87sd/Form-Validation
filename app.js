"use strict";
console.log('Proof of life.');

const form = document.querySelector("#myForm");

// This listens for the form to be submitted
form.addEventListener("submit", (e) => {
  console.log('The event listener has been read.');
  // If the number of characters in the username is less than 5, prevent default and alert the user with the message below.
  if (form.username.value.length < 5) {
    console.log('The if statement has been read.');
    
    alert("Username must be at least 5 characters");
  }
e.preventDefault();
  // If the age value is less than 18 or greater than 120 or blank, prevent default and alert the user with the message below.
  if (
    form.age.value < 18 ||
    form.age.value > 120 ||
    form.age.value == ""
  ) {
    
    alert("Enter a valid age.");
  }
e.preventDefault();
  // This regex depicts the acceptable format for entering an email address.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the entered data against the regex and if it is true, make it false and prevent default and alert the user with the message below.
  if (!emailRegex.test(form.email.value)) {
    
    alert("Enter a valid email address.");
  }
  e.preventDefault();
});
