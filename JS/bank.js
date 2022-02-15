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
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear deposit input field
    depositInput.value = '';
})