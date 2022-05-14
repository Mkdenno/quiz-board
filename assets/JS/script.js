
const answer = ["HTML","ECMAscript", "YES","Cascading style sheet","Css"];
var userAnswers = [];
let score=0;


document.getElementById("question").addEventListener("submit", (e) => {
    e.preventDefault();

   const question1 = document.getElementsByName("q_one");
   const question2 = document.getElementsByName("q_two");
   const question3 = document.getElementsByName("q_three");
   const question4 = document.getElementsByName("q_four");
   const question5 = document.getElementsByName("q_five");
   
   //pushing users answer to empty array
   for(let i = 0; i < question1.length; i++) {
    if(question1[i].checked) {
        userAnswers.push(question1[i].value);
    }
}

for(let i = 0; i < question2.length; i++) {
    if(question2[i].checked) {
        userAnswers.push(question2[i].value);
    }
}

for(let i = 0; i < question3.length; i++) {
    if(question3[i].checked) {
        userAnswers.push(question3[i].value);
    }
}

for(let i = 0; i < question4.length; i++) {
    if(question4[i].checked) {
        userAnswers.push(question4[i].value);
    }
}

for(let i = 0; i < question5.length; i++) {
    if(question5[i].checked) {
        userAnswers.push(question5[i].value);
    }
}

   console.table(userAnswers);
   checkAnswers();

})
//function to check answers
function checkAnswers(){
    for(let i=0; i < userAnswers.length; i++){

        for(let j=0; j < answer.length; j++){

            if(userAnswers[i]==answer[j])
            {
                score +=20;
            }
        }
    }
    document.getElementById("score").innerHTML =  score + "%";
    console.log(score + "%");
}