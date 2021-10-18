/*
Title:  Deal or No Deal
Author:  Ryan Hawkins
Lanuage(s):  Javascript
*/

const $ = (q) => document.querySelector(q)
const $$ = (q) => [...document.querySelectorAll(q)]

// Set variables.
const header = $("header")
const briefcases = $$(".briefcases")
const instructions = $("#instructions")

// Set event listeners.
briefcases.forEach((e) => {
    e.addEventListener("click", () => {
        console.log(`You chose briefcase #${e.id}.`);
        chooseBriefcase(e)
    })
})
header.addEventListener("click", playGame)

window.onload = () => {
    console.log("window loaded");
    playGame();
}

let briefcasesSelected = []
let firstCase = ""
const ORIGINALMESSAGE = "Let's plays Deal or No Deal"
const ORIGINALINSTRUCTIONS = "Choose a briefcase to start with."

// Start the logic.

function playGame() {
    firstCase = ""
    briefcases.forEach((e) => e.style.display = "initial")
    let round = 1
    briefcasesSelected = []
    console.log("Started game.")
    let offerAccepted = false;
    instructions.innerText = ORIGINALINSTRUCTIONS

    

}

function chooseBriefcase(briefcase, round = 1) {

    if (briefcasesSelected.length == 0) {
        firstCase = briefcase;
        instructions.innerText = `You chose briefcase #${firstCase.id}.`
    }
    briefcase.style.display = "none";
    briefcasesSelected.push(briefcase.id);
    console.log(`Cases selected:  ${briefcasesSelected}`)
}

function getBankOffer(round, highestCaseAmount) {
    let bankOffer = 0
    console.log(`The bank offered to buy your case for ${bankOffer}.`)
}