// Initial Balance
let currentBalance = 0;

// Select HTML Elements
const balanceDisplay = document.getElementById("balance-display");
const amountInput = document.getElementById("amount-input");
const descInput = document.getElementById("desc-input");
const list = document.getElementById("transaction-list");

function addTransaction(type) {
  // 1. Get Values
  const amount = parseFloat(amountInput.value);
  const description = descInput.value;

  // 2. Validation (Check if empty)
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  if (description === "") {
    alert("Please enter a description!");
    return;
  }

  // 3. Calculation Logic
  if (type === "income") {
    currentBalance += amount;
  } else {
    // Check for sufficient funds
    if (amount > currentBalance) {
      alert("Insufficient Funds! You cannot spend more than you have.");
      return;
    }
    currentBalance -= amount;
  }

  // 4. Update Display
  balanceDisplay.innerText = "$" + currentBalance.toFixed(2);

  // 5. Add to List (DOM Manipulation)
  const li = document.createElement("li");

  // Set color based on type
  const colorClass = type === "income" ? "income-text" : "expense-text";
  const sign = type === "income" ? "+" : "-";

  li.innerHTML = `
        <span>${description}</span>
        <span class="${colorClass}">${sign}$${amount}</span>
    `;

  // Add to the top of the list
  list.prepend(li);

  // 6. Clear Inputs
  amountInput.value = "";
  descInput.value = "";
}
