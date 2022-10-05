window.onload = function() {

    let numbers = document.querySelectorAll(".numbers");
    let ratingCard = document.querySelector("#ratingCard");
    let thanksCard = document.querySelector("#thanksCard");
    let ratingResult = document.querySelector("#ratingResult");
    let ratingEmpty = document.querySelector("#ratingEmpty");


    let button = document.querySelector("#button");

    let rate = 0;
    numbers.forEach (number => {
        number.addEventListener("click", () => {
            rate = number.innerHTML;
            numbers.forEach ( rating => {
                rating.classList.add ("selected");
                rating.classList.remove ("selected");
            })
            number.classList.remove ("selected");
            number.classList.add ("selected");
            ratingEmpty.innerText = "";
            ratingEmpty.classList.add("hide");
        })
    })

    button.addEventListener("click" , (e)=> {
        if (rate == 0 ){
            ratingEmpty.classList.remove("hide");
            ratingEmpty.innerText = "You must select one"
        } else {
            ratingResult.innerText = `You selected ${rate} out of 5`
            ratingCard.classList.add("hide");
            thanksCard.classList.remove("hide");
        }
    })
};