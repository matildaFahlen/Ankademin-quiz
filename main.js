let submitBtn = document.querySelector("#submit");
let score = 0;
let finalScore = document.querySelector("#finalScore");
let showResult = document.createElement("h2");

function calc(x) {
    if (x === "right") {
        return score++;
    }
    else if (x === "wrong") {
        
    }
    else {
        alert("Du måste fylla i ett av svarsalernativen"); //Fixa denna... Funkar ej! Träffar bara null-värde och går ej att köra-
    }
}

submitBtn.addEventListener("click", () => {
    calc(document.querySelector("[name='question1']:checked").value);
    calc(document.querySelector("[name='question2']:checked").value);
    calc(document.querySelector("[name='question3']:checked").value);
    calc(document.querySelector("[name='question4']:checked").value);
    calc(document.querySelector("[name='question5']:checked").value);
    calc(document.querySelector("[name='question6']:checked").value);
    calc(document.querySelector("[name='question7']:checked").value);
    calc(document.querySelector("[name='question8']:checked").value);
    calc(document.querySelector("[name='question9']:checked").value);
    calc(document.querySelector("[name='question10']:checked").value);
   
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