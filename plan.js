const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        basicPrice.innerText = "$349";
        professionalPrice.innerText = "$999";
        businessPrice.innerText = "$799";
        planDuration.forEach(p => {
            p.innerText = "/ year";
        })
    } else {
        basicPrice.innerText = "$90";
        professionalPrice.innerText = "$159";
        businessPrice.innerText = "$129";
        planDuration.forEach(p => {
            p.innerText = "/ month";
        })
    }
})