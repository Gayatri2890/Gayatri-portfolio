// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Code to run when the DOM is fully loaded

    // Example: Add form submit event listener
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Example: Get form input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        // Example: Log form input values to console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // You can add further processing here, such as sending the form data to a server
    });
});
