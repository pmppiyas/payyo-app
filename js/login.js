document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Log in button Clicked');
    const phoneNumber = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    if (password === '1234') {
      window.location.href = '/cash-in.html';
    } else {
      alert('Invalid Number or Pin');
    }
  });
