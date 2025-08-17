const form = document.getElementById('expense-form'); 
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');
const container = document.querySelector('.container'); 

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
updateExpenses();

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const expense = {
    id: Date.now(),
    description: descriptionInput.value,
    amount: parseFloat(amountInput.value),
    category: categoryInput.value
  };

  if (expense.amount <= 0) {
    alert('Amount must be greater than zero!');
    return;
  }

  expenses.push(expense);
  saveAndUpdate();

  form.reset();
});

expenseList.addEventListener('click', function(e) {
  if(e.target.classList.contains('delete-btn')) {
    const id = parseInt(e.target.parentElement.dataset.id);
    
    if (window.confirm('Are you sure you want to delete this expense?')) {
      expenses = expenses.filter(exp => exp.id !== id);
      saveAndUpdate();
    }
  }
});

function saveAndUpdate() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
  updateExpenses();
}

function updateExpenses() {
  expenseList.innerHTML = '';

  let total = 0;

  const fragment = document.createDocumentFragment();

  expenses.forEach(exp => {
    total += exp.amount;

    const li = document.createElement('li');
    li.dataset.id = exp.id; 

    li.innerHTML = `${exp.description} - $${exp.amount.toFixed(2)} <span class="delete-btn">x</span>`;

    li.classList.add('highlight');

    fragment.appendChild(li);
  });

  expenseList.appendChild(fragment);

  totalAmount.textContent = total.toFixed(2);
}



