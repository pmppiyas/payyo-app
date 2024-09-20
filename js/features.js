document.getElementById('cash-out-btnn').addEventListener('click', function () {
  document.getElementById('cash-out-from').classList.remove('hidden');
  document.getElementById('add-money-from').classList.add('hidden');
  document.getElementById('add-btn').classList.remove('bg-green-500');
  document.getElementById('cash-out-btnn').classList.add('bg-green-500');
});
