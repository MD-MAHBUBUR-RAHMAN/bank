function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputValue = parseFloat(inputText);
    //clear input
    input.value = "";
    return inputValue;
}

function currentBalanceUpdate(fildInput, amount) {
    const currentBalance = document.getElementById(fildInput);
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceValue = parseFloat(currentBalanceText);
    currentBalance.innerText = currentBalanceValue + amount;
}

function totalBalance(initialAmount, isAdd) {
    const primeryBalance = document.getElementById("balance");
    const primeryBalanceText = primeryBalance.innerText;
    const primeryBalanceValue = parseFloat(primeryBalanceText);
    if (isAdd == true) {
        primeryBalance.innerText = primeryBalanceValue + initialAmount;
    } else {
        primeryBalance.innerText = primeryBalanceValue - initialAmount;
    }
}

document.getElementById("dipositButton").addEventListener("click", function () {
    //input for diposit
    const inputValueDeposit = getInputValue("diposit-input");
    //get current deposit
    currentBalanceUpdate("diposits", inputValueDeposit)
    //balance after adiposit
    totalBalance(inputValueDeposit, true)

});

//handel withdraw event handeler
document.getElementById("withdrawButton").addEventListener("click", function () {
    //input withdrawal
    const inputWithdrawAmount = getInputValue("withdraw-input")
    //update withdraw total
    currentBalanceUpdate("withdraw", inputWithdrawAmount)
    //after withdrawal total
    totalBalance(inputWithdrawAmount, false)

})