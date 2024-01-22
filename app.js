"use strict";

const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  if (form.username.value < 5) {
    e.preventDefault();
    alert("Username must be at least 5 characters");
  }

  if (form.assignedSlot.value < 18 || form.assignedSlot.value > 120 || form.assignedSlot.value == ""){
    e.preventDefault();
    alert('Enter a valid age.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if(!emailRegex.test(form.email.value)){
    e.preventDefault();
    alert('Enter a valid email address.');
  }
});

