document.getElementById("btn-login")
.addEventListener("click", function(event){
    event.preventDefault();
    const phoneNumber = parseFloat(document.getElementById("phone-number").value)
    const pinNum = document.getElementById("pin-num").value;
    console.log(phoneNumber, pinNum)

    if (phoneNumber === 5 && pinNum === "1234") {
        window.location.href = "./home.html"
    }else {
        alert("your phone number or pin number is incorrect")
    }
})
