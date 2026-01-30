let currentBalance = 0;

let transactions = [];

const balanceDisplay = document.getElementById("balance-display");
const amountInput = document.getElementById("amount-input");
const descInput = document.getElementById("desc-input");
const list = document.getElementById("transaction-list");

window.onload = function () {
  if (localStorage.getItem("myWalletData")) {
    const saveData = JSON.parse(localStorage.getItem("myWalletData"));

    currentBalance = saveData.balance;
    transactions = saveData.list;

    updateScreen();

    transactions.forEach(function (item) {
      addToListHTML(item.description, item.amount, item.type);
    });
  }
};

function addTransaction(type) {
  const amount = parseFloat(amountInput.value);
  const description = descInput.value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  if (description === "") {
    alert("Please enter a description!");
    return;
  }
  if (type === "income") {
    currentBalance += amount;
  } else {
    if (amount > currentBalance) {
      alert("Insufficent Funds!");
      return;
    }
    currentBalance -= amount;
  }
  const newTransaction = {
    description: description,
    amount: amount,
    type: type,
  };
  transactions.push(newTransaction);

  saveData();
  updateScreen();
  addToListHTML(description, amount, type);

  amountInput.value = "";
  descInput.value = "";
}
function updateScreen() {
  balanceDisplay.innerText = "$" + currentBalance.toFixed(2);
}
function saveData() {
  const dataToSave = {
    balance: currentBalance,
    list: transactions,
  };
  localStorage.setItem("myWalletData", JSON.stringify(dataToSave));
}
function addToListHTML(description, amount, type) {
  const li = document.createElement("li");
  const colorClass = type === "income" ? "income-text" : "expense-text";
  const sign = type === "income" ? "+" : "-";

  li.innerHTML = `
  <span>${description}</span>
  <span class="${colorClass}">${sign}$${amount}</span>
  `;
  list.prepend(li);
}
