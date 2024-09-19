// log out button

document.getElementById("btn-logout")
.addEventListener("click", function(){
    window.location.href = "./index.html"
})

// add money
document.getElementById("btn-add-money")
.addEventListener("click",function(event){
    event.preventDefault();


    const addAmount = document.getElementById("add-money-amount");

    const pinNum = document.getElementById("add-money-pin-num");


    if (pinNum.value === "5") {
        const currentBalance = document.getElementById("current-balance");

        let newBalance = parseFloat(currentBalance.innerText) + parseInt(addAmount.value);

        currentBalance.innerText = newBalance;
        addAmount.value = "";
        pinNum.value = "";
    }
})