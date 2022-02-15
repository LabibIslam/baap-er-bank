//handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositeAmountText = depositInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositeAmount;

    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const preciousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(preciousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear deposit input field
    depositInput.value = '';
});;

//handle withdraw button event
document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const preciousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(preciousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    withdrawInput.value = '';
});