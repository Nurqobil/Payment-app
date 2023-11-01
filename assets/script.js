"use strict";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match the predefined values
    if (username === 'your_username' && password === 'your_password') {
      // Redirect to another page
      window.location.replace('http://127.0.0.1:5500/assets/main.html');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });