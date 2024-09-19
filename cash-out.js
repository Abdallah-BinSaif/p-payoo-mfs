document.getElementById("btn-cash-out-money")
.addEventListener("click",function(event){
    event.preventDefault();


    const outAmount = document.getElementById("cash-out-money-amount");

    const currentBalance = document.getElementById("current-balance");

    const pinNum = document.getElementById("cash-out-money-pin-num");


    if (parseFloat(currentBalance.innerText) > parseInt(outAmount.value) &&  pinNum.value === "5") {

        let newBalance = parseFloat(currentBalance.innerText) - parseInt(outAmount.value);

        currentBalance.innerText = newBalance;
        outAmount.value = "";
        pinNum.value = "";
    }
})