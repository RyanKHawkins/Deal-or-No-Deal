/*
Title:  Deal or No Deal
Author:  Ryan Hawkins
Lanuage(s):  Javascript
*/

const $ = (q) => document.querySelector(q)
const $$ = (q) => [...document.querySelectorAll(q)]

// Set variables.
const cases = $$(".cases")
const message = $("#message")

// Set event listeners.
cases.forEach((e) => {
    e.addEventListener("click", () => console.log(`You chose case #${e.id}.`))
})

window.onload = () => {
    console.log("window loaded")
}



// Start the logic.

function startGame() {
    
}