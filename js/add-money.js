document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const balance = document.getElementById('myBalance').innerText;
    const balanceNumber = parseFloat(balance);
    const addMoneyInput = document.getElementById('amount').value;
    const inputMoneyNumber = parseFloat(addMoneyInput);
    const pin = document.getElementById('password').value;

    //Varify Pin Number
    if (pin === '1234') {
      const newBalance = balanceNumber + inputMoneyNumber;
      console.log(newBalance);
      // Update the Balance
      document.getElementById('myBalance').innerText = newBalance;
    } else {
      alert('Wrong Pin');
    }
  });

document.getElementById('cash-out-btn').addEventListener('click', function () {
  window.location.href = '/cash-out.html';
  console.log('cahs out');
});
