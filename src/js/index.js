// email validation check
function validateForm() {
    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false; 
    }
    return true;
}