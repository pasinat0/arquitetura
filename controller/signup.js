document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const user = {
        fullName: fullName,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Sign up successful!');
});