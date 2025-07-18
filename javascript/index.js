const loanAmount = document.querySelector('#loanAmount');
const interestRate = document.querySelector('#interestRate');
const monthstoPay = document.querySelector('#MonthsToPay');
const result = document.querySelector('.result');


function loadCalculator(){
    let loanValue = loanAmount.value;
    let interestValue = interestRate.value;
    let monthsValue = monthstoPay.value;
    let interest = (loanValue * (interestValue * 0.01)) / monthsValue;
    let monthlyPay = (loanValue / monthsValue + interest).toFixed(2);
    result.innerHTML = `Monthly Payment: ${monthlyPay}`;
}

loadCalculator();
loanAmount.addEventListener('change',loadCalculator);
interestRate.addEventListener('change',loadCalculator);
monthstoPay.addEventListener('change',loadCalculator);