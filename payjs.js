document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryMonth = document.getElementById('expiry-month').value;
    const expiryYear = document.getElementById('expiry-year').value;
    const cvv = document.getElementById('cvv').value.trim();

    // Validation flag
    let isValid = true;

    // Validate full name
    if (fullName === '' || !/^[a-zA-Z\s]+$/.test(fullName)) {
        alert('Please enter a valid cardholder name.');
        isValid = false;
    }

    // Validate email
    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate phone
    if (phone === '' || !/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        isValid = false;
    }

    // Validate card number (only check for 16 digits)
    if (cardNumber === '' || !/^\d{16}$/.test(cardNumber.replace(/-/g, ''))) {
        alert('Please enter a valid 16-digit card number.');
        isValid = false;
    }

    // Validate expiry month and year
    if (expiryMonth === '' || expiryYear === '') {
        alert('Please select a valid expiry month and year.');
        isValid = false;
    }

    // Validate CVV
    if (cvv === '' || !/^\d{3}$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        isValid = false;
    }

    // If all fields are valid, proceed to payment
if (isValid) {
    alert('Payment information is valid. Proceeding to payment...');
    // Redirect to confirmation page
    window.location.href = 'http://localhost/iwt/Payment confirmation.html'; // Use appropriate URL
}

});
