console.log("Space Launch Dash running");

const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);

let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors
const apolloBtn   = document.querySelector("#apollo-Btn");
const nebulaBtn   = document.querySelector("#nebula-Btn");
const cometBtn    = document.querySelector("#comet-Btn");

const apolloRocket = document.querySelector("#apollo-Rocket");
const nebulaRocket = document.querySelector("#nebula-Rocket");
const cometRocket  = document.querySelector("#comet-Rocket")

const winnerBox = document.querySelector("#winner-Box");

// Click Handlers
const boostApollo = () => {
  shoppingCart.innerHTML += `<p> Apollo</p>`;
  totalInCent += 67;
  updateTotal();
};

const boostNebula = () => {
shoppingCart.innerHTML += `<p> Nebula </p>`;
totalInCent += 76;
updateTotal();
};

const boostComet = () => {
shoppingCart.innerHTML += `<p> Comet </p>`;
};

// Winner Check
const checkWinner = (position,color) => { 

}

if (position === 5) {
    winnerText.innerHTML = color + "is the Winner!";
}
// Events
apolloBtn.addEventListener("click", advanceApolloBtn);
nebulaBtn.addEventListener("click", advanceNebulaBtn);
cometRocket.addEventListener("click", advanceCometRocket);
