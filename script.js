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

//briefcases.forEach((e) => {
//    e.addEventListener("click", chooseBriefcase(e))
//})
header.addEventListener("click", playGame)

window.onload = () => {
    console.log("window loaded");
    playGame();
}

let briefcasesSelected = []
let firstCase = ""
const ORIGINALMESSAGE = "Let's play Deal or No Deal"
const ORIGINALINSTRUCTIONS = "Choose a briefcase to start with."

// Start the logic.

function playGame() {
    firstCase = ""
    briefcases.forEach((e) => e.style.display = "initial")
    let round = 1
    briefcasesSelected = []
    console.log("Started game.")
    let offerAccepted = false;
    message.innerText = ORIGINALMESSAGE
    instructions.innerText = ORIGINALINSTRUCTIONS
    $("#chosen_area").innerHTML = ""

}

function chooseBriefcase(briefcase, round = 1) {
    if (briefcasesSelected.length == 0) {
        
        let casesToSelect = 6;
        firstCase = briefcase;
        console.log(`first case:  ${firstCase.id}`)
        message.innerText = `You chose briefcase #${firstCase.id} to be your case.`
        instructions.style.visibility = "none"

        // while (casesToSelect > 0) {
        //     instructions.innerText = `Choose ${casesToSelect} more cases for round ${round}.`
        //     casesToSelect--
        // }
        let caseEl = document.createElement("div")
        //caseEl.classList.add("briefcases")
        caseEl.id = "chosen_case"
        caseEl.innerText = firstCase.id

        let caseHandle = document.createElement("div")
        caseHandle.classList.add("handles")
        caseHandle.classList.add("golden")
        caseEl.append(caseHandle)

        $("#chosen_area").append(caseEl)
    }


    briefcase.style.display = "none";
    briefcasesSelected.push(briefcase.id);
    console.log(`Cases selected:  ${briefcasesSelected}`)
}

function getHighest$Remaining () {

}

function getBankOffer(round, highestCaseAmount) {
    let bankOffer = 0

    // TODO:  Setup switch case to determine the bank offer.




    console.log(`The bank offered to buy your case for ${bankOffer}.`)
}