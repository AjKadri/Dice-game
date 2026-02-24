
function rollDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", `images/dice${randomNumber1}.png`);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", `images/dice${randomNumber2}.png`);

    // if player 1 wins
    if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins! 🏆";

    // if player 2 wins
    } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";

    // if it's a draw
    } else {
    document.querySelector("h1").textContent = "It's a Draw!";
    };

}