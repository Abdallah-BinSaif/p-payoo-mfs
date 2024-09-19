// log out button

document.getElementById("btn-logout")
.addEventListener("click", function(){
    window.location.href = "./index.html"
});

// toggole
document.getElementById("btn-add-money-section")
.addEventListener("click", function(){
    document.getElementById("cash-out-section").classList.add("hidden")
    document.getElementById("add-money-section").classList.remove("hidden")
})
document.getElementById("btn-cash-out-money-section")
.addEventListener("click", function(){
    document.getElementById("add-money-section").classList.add("hidden")
    document.getElementById("cash-out-section").classList.remove("hidden")
});

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
});


// cash out 
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
    }else{
        alert("your pin or amount is invalid")
    }
});