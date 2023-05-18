const allButtons = document.querySelectorAll("button");
const cartSummary = document.querySelector(".cart-summary");

let cartSum = 0;

for (let button of allButtons) {
  button.addEventListener("click", function (event) {
    // alert("click");
    const clickedButton = event.target;
    console.log("click, price is: ", clickedButton.innerText);

    const productPrice = parseInt(clickedButton.innerText.replace("$", ""));
    cartSum += productPrice;

    cartSummary.innerText = "Suma koszyka: " + cartSum;
  });
}
