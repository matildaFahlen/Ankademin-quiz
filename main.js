let score = 0;

function calc(x) {
    if (!x) {
        alert("Du måste svara på alla frågor");
    }
    else if (x.value === "right") {
        return score++;
    }
}

let submitBtn = document.querySelector("#submit");
let finalScore = document.querySelector("#finalScore");
let showResult = document.createElement("h2");

submitBtn.addEventListener("click", () => {
    score = 0;
    calc(document.querySelector("[name='question1']:checked"));
    calc(document.querySelector("[name='question2']:checked"));
    calc(document.querySelector("[name='question3']:checked"));
    calc(document.querySelector("[name='question4']:checked"));
    calc(document.querySelector("[name='question5']:checked"));
    calc(document.querySelector("[name='question6']:checked"));
    calc(document.querySelector("[name='question7']:checked"));
    calc(document.querySelector("[name='question8']:checked"));
    calc(document.querySelector("[name='question9']:checked"));
    calc(document.querySelector("[name='question10']:checked"));
    
    if (score > 7) {
        showResult.innerText = `Du fick ${score} rätt. Mycket väl godkänt - bra jobbat!`;
        showResult.style.color = "green";
        finalScore.append(showResult);
    }
    else if (score >= 5 && score <= 7) {
        showResult.innerText = `Du fick ${score} rätt. Helt klart godkänt!`;
        showResult.style.color = "orange";
        finalScore.append(showResult);
    }
    else if (score < 5) {
        showResult.innerText = `Du fick ${score} rätt. Tror du kan bättre!`;
        showResult.style.color = "red";
        finalScore.append(showResult);
        
        let tryAgainBtn = document.createElement("button");
        tryAgainBtn.innerText = "Försök igen";
        finalScore.append(tryAgainBtn);

        tryAgainBtn.addEventListener("click", () => {
            let radios = document.querySelectorAll("input[type=radio]");
            for (let i=0;i<radios.length;i++) {
                radios[i].checked = false;
            }
        finalScore.innerText = "";
        })
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