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
const message = $("#message")


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



// Start the logic.

function playGame() {
    briefcases.forEach((e) => e.style.visibility = "initial")
    let round = 1
    let briefcasesSelected = []
    console.log("Started game.")
    let offerAccepted = false;

}

function chooseBriefcase(briefcase, round = 1) {
    briefcase.style.visibility = "hidden"
}

function getBankOffer(round, highestCaseAmount) {
    let bankOffer = 0
    console.log(`The bank offered to buy your case for ${bankOffer}.`)
}