//Withdrawal validation
let balance=12000;
let withdrawal=5000;
function checkWithdrawal(balance, withdrawal) {
  if (withdrawal <= 0) {
    console.log("Withdrawal amount must be positive.");
  } else if (withdrawal % 100 !== 0) {
    console.log("Withdrawal amount must be a multiple of ₹100.");
  } else if (withdrawal > balance) {
    console.log("Insufficient balance.");
  } else {
    console.log("Withdrawal successful.");
  }
}

checkWithdrawal();

//Username  password check
const storedUsername = "Nayana";
const storedPassword = "pass123";
let username="Nayana";
let username="pass123";

function login(username, password) {
  if (username === storedUsername && password === storedPassword) {
    console.log("Login successful!");
  } else {
    console.log("Invalid username or password.");
  }
}

login();
// Purchase discount
let amount=25000;
function calculateDiscount(amount) {
  if (amount < 0) {
    console.log("Invalid purchase amount.");
    return;
  }

  let discountRate = 0;
  if (amount < 1000) {
    discountRate = 0.05;
  } else if (amount < 5000) {
    discountRate = 0.10;
  } else {
    discountRate = 0.20;
  }

  const discount = amount * discountRate;
  const finalPrice = amount - discount;

  console.log(`Discount: ₹${discount}, Final Price: ₹${finalPrice}`);
}

calculateDiscount();
// Employee bonus
function calculateBonus(years, basicSalary) {
  if (years < 0 || basicSalary <= 0) {
    console.log("Invalid input.");
    return;
  }

  let bonusRate = 0;
  if (years < 2) {
    bonusRate = 0.05;
  } else if (years <= 5) {
    bonusRate = 0.10;
  } else {
    bonusRate = 0.15;
  }

  const bonus = basicSalary * bonusRate;
  console.log(`Bonus: ₹${bonus}`);
}

calculateBonus(3, 20000);
//Ticket price calculation
function calculateTicketPrice(age, premiumSeating) {
  if (age <= 0) {
    console.log("Invalid age.");
    return;
  }

  let price = 0;
  if (age < 12) {
    price = 100;
  } else if (age < 60) {
    price = 200;
  } else {
    price = 120;
  }

  if (premiumSeating) {
    price *= 1.20; // add 20% surcharge
  }

  console.log(`Ticket Price: ₹${price}`);
}

calculateTicketPrice(65, true);
