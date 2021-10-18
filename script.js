/*
Title:  Deal or No Deal
Author:  Ryan Hawkins
Lanuage(s):  Javascript
*/

const $ = (q) => document.querySelector(q)
const $$ = (q) => [...document.querySelectorAll(q)]

// Set variables.
const briefcases = $$(".briefcases")
const message = $("#message")
let briefcasesSelected = []

// Set event listeners.
briefcases.forEach((e) => {
    e.addEventListener("click", () => console.log(`You chose briefcase #${e.id}.`))
})

window.onload = () => {
    console.log("window loaded")
}



// Start the logic.

function startGame() {
    let round = 0

}

function chooseBriefcase(round, briefcase) {

}

function getBankOffer(round, highestCaseAmount) {
    
}