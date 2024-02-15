



    // JavaScript code to handle form submission and display message

    // Function to handle form submission
    function handleFormSubmission(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form data
        var formData = new FormData(event.target);

        // Example: Log form data to the console
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        // Display a success message (you can modify this as needed)
        alert('Thanks for contacting me!');
    }

    // Add event listener to the form for form submission
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleFormSubmission);

   