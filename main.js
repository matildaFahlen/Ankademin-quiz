let score = 0;

function calc(x) {
    if (x.value === "right") {
        return score++;
    }
    else if (x.value === "wrong") {
        
    }
    else {
        alert("Du måste fylla i ett av svarsalernativen"); //Fixa denna... Funkar ej! "Kan inte hitta null"
    }
}
let submitBtn = document.querySelector("#submit");
let finalScore = document.querySelector("#finalScore");
let showResult = document.createElement("h2");

submitBtn.addEventListener("click", () => {
    finalScore.innerText = ""; //Fungerar ej vet inte varför...
    calc(document.querySelector("[name='question1']:checked"));
    calc(document.querySelector("[name='question2']:checked"));
    calc(document.querySelector("[name='question3']:checked"));
    /*    calc(document.querySelector("[name='question4']:checked").value);
    calc(document.querySelector("[name='question5']:checked").value);
    calc(document.querySelector("[name='question6']:checked").value);
    calc(document.querySelector("[name='question7']:checked").value);
    calc(document.querySelector("[name='question8']:checked").value);
    calc(document.querySelector("[name='question9']:checked").value);
    calc(document.querySelector("[name='question10']:checked").value); */
    
    if (score > 7) {
        showResult.innerText = `Du fick ${score} rätt! Mycket väl godkänt. Bra jobbat!`;
        showResult.style.color = "green";
        finalScore.append(showResult);
    }
    else if (score >= 5 && score <= 7) {
        showResult.innerText = `Du fick ${score} rätt! Godkänt`;
        showResult.style.color = "orange";
        finalScore.append(showResult);
    }
    else if (score < 5) {
        showResult.innerText = `Du fick ${score} rätt! Underkänt. Försök igen`;
        showResult.style.color = "red";
        finalScore.append(showResult);
    } 
})

function darkMode() {
    document.body.style.background = "black";
    let intro = document.querySelector("#intro");
    let questions = document.querySelector("#questions");
    let getResult = document.querySelector("#getResult");
    intro.style.color = "white";
    questions.style.color = "white";
    getResult.style.color = "white";
    }

function lightMode() {
    document.body.style.background = "white";
    let intro = document.querySelector("#intro");
    let questions = document.querySelector("#questions");
    let getResult = document.querySelector("#getResult");
    intro.style.color = "black";
    questions.style.color = "black";
    getResult.style.color = "black";
}
// Eventuellt onödig kod
/*   let answer1 = document.querySelector("[name='question1']:checked").value;
let answer2 = document.querySelector("[name='question2']:checked").value;
let answer3 = document.querySelector("[name='question3']:checked").value;
let answer4 = document.querySelector("[name='question4']:checked").value;
let answer5 = document.querySelector("[name='question5']:checked").value;
let answer6 = document.querySelector("[name='question6']:checked").value;
let answer7 = document.querySelector("[name='question7']:checked").value;
let answer8 = document.querySelector("[name='question8']:checked").value;
let answer9 = document.querySelector("[name='question9']:checked").value;
let answer10 = document.querySelector("[name='question10']:checked").value; */