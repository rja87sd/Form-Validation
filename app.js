"use strict";

const form = document.querySelector("#myForm");

// This listens for the form to be submitted
form.addEventListener("submit", (e) => {
  // If the number of characters in the username is less than 5, prevent default and alert the user with the message below.
  if (form.username.value < 5) {
    e.preventDefault();
    alert("Username must be at least 5 characters");
  }

  // If the age value is less than 18 or greater than 120 or blank, prevent default and alert the user with the message below.
  if (
    form.assignedSlot.value < 18 ||
    form.assignedSlot.value > 120 ||
    form.assignedSlot.value == ""
  ) {
    e.preventDefault();
    alert("Enter a valid age.");
  }

  // This regex depicts the acceptable format for entering an email address.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the entered data against the regex and if it is true, make it false and prevent default and alert the user with the message below.
  if (!emailRegex.test(form.email.value)) {
    e.preventDefault();
    alert("Enter a valid email address.");
  }
});
