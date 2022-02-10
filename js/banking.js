document.getElementById("dipositButton").addEventListener("click", function () {
    const input = document.getElementById("diposit-input");
    const inputText = input.value;
    const inputValueDeposit = parseFloat(inputText);
    //get current deposit
    const currentDeposit = document.getElementById("diposits");
    const currentDepositText = currentDeposit.innerText;
    const currentDepositValue = parseFloat(currentDepositText);
    const totalDepositeValue = currentDepositValue + inputValueDeposit;
    currentDeposit.innerText = totalDepositeValue;

    //balance after adiposit
    const primeryBalance = document.getElementById("balance");
    const primeryBalanceText = primeryBalance.innerText;
    const primeryBalanceValue = parseFloat(primeryBalanceText);
    primeryBalance.innerText = primeryBalanceValue + inputValueDeposit;

    //clear input
    input.value = "";

});

//handel withdraw event handeler
document.getElementById("withdrawButton").addEventListener("click", function () {
    //Get the amount to be withdraw
    const inputWithdraw = document.getElementById("withdraw-input");
    const inputWithdrawText = inputWithdraw.value;
    const inputWithdrawAmount = parseFloat(inputWithdrawText);
    //update withdraw total
    const withdrawTotal = document.getElementById("withdraw");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    const newWithdrawTotal = withdrawTotalAmount + inputWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update balance after withdraw
    const reduceBalance = document.getElementById("balance");
    const reduceBalancebalanceText = reduceBalance.innerText;
    const newReduceBalance = parseFloat(reduceBalancebalanceText);
    reduceBalance.innerText = newReduceBalance - inputWithdrawAmount;
    //clear input
    inputWithdraw.value = "";

})