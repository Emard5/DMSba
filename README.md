# My Budget tracker app SBA Project

## Requirements

### Easiest Requirements complete (Html) 
- Added at least one input/form with HTML Attribute validation

- Ensured Html runs without error

### Javsascript Requirements
- Cache at least one element using getElementById.
Yes (form, descriptionInput, amountInput, categoryInput, expenseList, totalAmount).

- Cache at least one element using querySelector/querySelectorAll.
Yes (const container = document.querySelector('.container');). 

- Use parent-child-sibling relationship.
    Yes (e.target.parentElement.dataset.id).

- Iterate over a collection of elements.
    Yes (expenses.forEach(...)).

- Create at least one element using createElement.
    Yes (document.createElement('li')).

- Use appendChild/prepend.
    Yes (fragment.appendChild(li), expenseList.appendChild(fragment)).

- Use DocumentFragment or cloneNode.
    Yes (const fragment = document.createDocumentFragment()).

- Modify HTML/text content dynamically.
    Yes (li.innerHTML = ..., totalAmount.textContent = ...).

- Modify style/classList dynamically.
    Yes (li.classList.add('highlight')).

- Modify at least one attribute dynamically.
    Yes (li.dataset.id = exp.id).

- Register at least two event listeners.
    Yes (form.addEventListener('submit', ...) and expenseList.addEventListener('click', ...)).

- Use at least two BOM properties/methods.
    Yes: localStorage.setItem/getItem  ,window.confirm(), (even alert() for validation).

- Include at least one form/input with DOM event-based validation.
    Yes (if (expense.amount <= 0) { alert(...) }).

- Ensure that thhe program runs without errors
    Yes

### CSS Requirements passed
- Modify style and/or CSS classes dynamically
    #expense-list li.highlight {
  background: ;} 