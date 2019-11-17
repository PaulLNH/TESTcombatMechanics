async function sleep(milliseconds = 1000) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const combatBar = $("#combatBar");
const player1 = $("#player1");
const player2 = $("#player2");
const pause = $("#pause");
let gameRunning = pause.data().pause;
const timerPerRound = 10;
let timer = 0;

pause.on("click", () => {
  gameRunning = !gameRunning;
  console.log(`Game has been ${gameRunning ? "paused" : "unpaused"}.`);
  console.log(gameRunning);
  gameRunning ? 
    (pause.text("Stop") && pause.attr("class", "btn btn-danger")) :
    (pause.text("Start") && pause.attr("class", "btn btn-success"));
});

const combatTimer = setInterval(function() {
  if (gameRunning) {
    timer += 1;
    player1.css("width", `${timer * 10}%`).attr("aria-valuenow", timer * 10);
    player2.css("width", `${timer * 10}%`).attr("aria-valuenow", timer * 10);
    if (timer >= (timerPerRound)) {
      // clearInterval(combatTimer);
      player1.css("width", `${timer * 10}%`).attr("aria-valuenow", timer * 10);
      player2.css("width", `${timer * 10}%`).attr("aria-valuenow", timer * 10);
      timer = -1;
      combatTimer;
    }
    console.log(timer);
  }
}, 1000);
