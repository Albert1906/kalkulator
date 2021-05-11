
{

    const calculateResult = (fromCash, selectCash) => {
        const euroCash = 4.56;
        const gbpCash = 5.28;
        const usdCash = 3.79;
        switch (selectCash) {
            case "eur":
                return fromCash * euroCash;

            case "gbp":
                return fromCash * gbpCash;

            case "usd":
                return fromCash * usdCash;

        }
    };

    const updateResultText = (result) => {
        const scoreElement = document.querySelector(".js-score");
        scoreElement.innerText = `Otrzymasz ${result.toFixed(2)}zł`
    }


    const onFormSubmit = (event) => {
        event.preventDefault();
        const inputElement = document.querySelector(".js-input");
        const selectElement = document.querySelector(".js-select");


        const fromCash = +inputElement.value;
        const selectCash = selectElement.value;

        let result = calculateResult(fromCash, selectCash);

        updateResultText(result);


    };



    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };


    init();



}





