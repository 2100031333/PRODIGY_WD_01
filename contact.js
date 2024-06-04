document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('sucessfully submited');
    alert('Thank you for your message!');
    // Here you can add code to send the form data to your server using AJAX or similar methods
    this.reset(); // Resets the form fields after submission
});
