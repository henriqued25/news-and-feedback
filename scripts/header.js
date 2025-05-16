const singleTicket = document.querySelector(".button-home");
const busCode = document.querySelector('.button-busCode');
const busFare = document.querySelector('.button-busFare');
const accessInformation = document.querySelector('.button-information');

function removeClass() {
    document.querySelectorAll(".nav-link").forEach(button => {
        button.classList.remove("border-bottom", "border-primary", "border-3");
    })
}

const pagAtual = window.location.pathname.split('/').pop();
switch (pagAtual) {
    case "SingleTicket.html":
        removeClass()
        singleTicket.classList.add("border-bottom", "border-primary", "border-3");
        break;
    case "BusCode.html":
        removeClass()
        busCode.classList.add("border-bottom", "border-primary", "border-3");
        break;
    case "FarePricing.html":
        removeClass()
        busFare.classList.add("border-bottom", "border-primary", "border-3");
        break;
    case "AccessInformation.html":
        removeClass()
        accessInformation.classList.add("border-bottom", "border-primary", "border-3");
        break;
    default:
        removeClass();
        break;
}
