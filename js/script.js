let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-input");
let selectElement = document.querySelector(".js-select");
let scoreElement = document.querySelector(".js-score");
let result;

let euroCash = 4.56;
let gbpCash = 5.28;
let usdCash = 3.79;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let fromCash = +inputElement.value;
    let selectCash = selectElement.value;

    switch (selectCash) {
        case "eur":
            result = fromCash * euroCash;
            break;
        case "gbp":
            result = fromCash * gbpCash;
            break;
        case "usd":
            result = fromCash * usdCash;
            break;
    }
    scoreElement.innerText = `${result.toFixed(2)}zł`



});