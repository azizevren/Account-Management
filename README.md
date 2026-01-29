# 💸 Wallet Manager (Web App)

A simple, interactive web application to track your income and expenses in real-time. Originally designed as a Python script, this project has been transformed into a modern web application using **Vanilla JavaScript**.

🔗 **Live Demo:** [Click here to open the App](https://azizevren.github.io/Account-Management/)

## 🎯 About the Project
This project demonstrates the fundamentals of **DOM Manipulation** and **State Management** in JavaScript. It allows users to:
* Add income (increases balance).
* Add expenses (decreases balance).
* Prevent spending more than the current balance (Validation).
* View a history of recent transactions.

## 🛠 Technologies Used
* **HTML5:** Semantic structure.
* **CSS3:** Modern styling with Flexbox for layout.
* **JavaScript (ES6+):** Logic for calculations and dynamic HTML updates.

## ✨ Key Features
* **Dynamic Balance:** The header updates automatically with every transaction.
* **Input Validation:** Prevents empty inputs or negative numbers.
* **Smart Logic:** You cannot add an expense if your balance is insufficient (No debt allowed!).
* **Visual Feedback:** Incomes are shown in <span style="color:green">Green</span>, expenses in <span style="color:red">Red</span>.

## 💻 Code Snippet
Here is how the application handles the balance logic:

```javascript
if (type === 'income') {
    currentBalance += amount;
} else {
    // Check for sufficient funds
    if (amount > currentBalance) {
        alert("Insufficient Funds!");
        return;
    }
    currentBalance -= amount;
}
