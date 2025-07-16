let user = 0;
let computer1 = 0;
let draw = 0;

let udraw = document.getElementById("dscore");
let uwin = document.getElementById("uscore");
let comp = document.getElementById("cscore");

function computerchoice() {
    const cc = ["rock", "paper", "scissors"];
    let rr = Math.floor(Math.random() * 3);
    return cc[rr];
}

function playgame(userchoice) {
    let result = document.getElementById("result");
    let computer = computerchoice();

    if (userchoice === computer) {
        result.innerHTML = "Draw";
        draw++;
        udraw.innerHTML = draw;

    } else if (
        (userchoice === "rock" && computer === "paper") ||
        (userchoice === "paper" && computer === "scissors") ||
        (userchoice === "scissors" && computer === "rock")
    ) {
        result.innerHTML = "Computer Wins!";
        computer1++;
        comp.innerHTML = computer1;

    } else {
        result.innerHTML = "You Win!";
        user++;
        uwin.innerHTML = user;
    }
}

const choice = document.querySelectorAll(".immg img");

choice.forEach(ch => {
    ch.addEventListener("click", () => {
        const uchoice = ch.getAttribute("id"); 
        playgame(uchoice);
    });
});
