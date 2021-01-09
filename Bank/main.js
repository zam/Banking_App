// ACCOUNT CLASS
function User(name, balance) {
    this.name = name;
    this.balance = balance;
}

// CREATE BANK ACCOUNT
function createUser() {
    let name = prompt('Type your full name here');
    let account = new User(name, 0);
    let accString = JSON.stringify(account);
    localStorage.setItem(name, accString);
    console.log(localStorage);
}

// DEPOSIT
function deposit() {
    let accName = prompt('Type your account name here');
    // ACCESS LOCAL STORAGE SET A VARIABLE AS AN OBJECT
    let accData = JSON.parse(localStorage.getItem(accName));
    let amount = prompt('How much would you like to deposit?' + '\n' + 'Your current balance is: $' + accData.balance);
    accData.balance = parseFloat(amount) + accData.balance;
    alert('Your new balance is: $' + accData.balance);
    // UPDATE DATA AT LOCAL STORAGE
    localStorage.setItem(accName, JSON.stringify(accData));
    return accData.balance;
}

// WITHDRAW
function withdraw() {
    let accName = prompt('Type your account name here');
    let accData = JSON.parse(localStorage.getItem(accName));
    let amount = prompt('How much would you like to withdraw?' + '\n' + 'Your current balance is: $' + accData.balance);
    accData.balance = accData.balance - parseFloat(amount);
    alert('Your new balance is: $' + accData.balance);
    localStorage.setItem(accName, JSON.stringify(accData));
    return accData.balance;
}

