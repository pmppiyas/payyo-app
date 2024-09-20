document
  .getElementById('cash-out-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const balance = document.getElementById('myBalance').innerText;
    const balanceNumber = parseFloat(balance);
    const cashOutInput = document.getElementById('cash-out-amount').value;
    const cashOutNumber = parseFloat(cashOutInput);
    const pin = document.getElementById('cash-out-password').value;
    if (pin === '1234') {
      const newBalance = balanceNumber - cashOutNumber;
      document.getElementById('myBalance').innerText = newBalance;
    } else {
      alert('Invalid Pin');
    }
  });
