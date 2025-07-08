// This file contains the JavaScript code for the web application.

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const output = document.getElementById('output');

    button.addEventListener('click', function() {
        output.textContent = 'Hola mundo';
    });
});