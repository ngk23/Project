const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        basicPrice.innerText = "₹3599";
        professionalPrice.innerText = "₹9999";
        businessPrice.innerText = "₹7999";
        planDuration.forEach(p => {
            p.innerText = "/ year";
        })
    } else {
        basicPrice.innerText = "₹999";
        professionalPrice.innerText = "₹1500";
        businessPrice.innerText = "₹1200";
        planDuration.forEach(p => {
            p.innerText = "/ month";
        })
    }
})