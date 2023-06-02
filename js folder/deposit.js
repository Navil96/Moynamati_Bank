/*

1. Add event listener to the deposit button
2. Get deposit amount from deposit field.
2.5 Convert string deposit amount to float type.
3. Clear the input field after getting deposit amount.
4. Get the previous deposit total.
5. Calculate the new deposit total and set the value to the deposit total.
6. Get current balance
7. Calculate the new balance. 
*/
document.getElementById('btn_deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
// Step-03
    depositField.value = '';
// Step-04
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);
//Step-05 
    const newDepositTotal = PreviousDepositTotal+newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

// Step-06
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
// Step-07
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})