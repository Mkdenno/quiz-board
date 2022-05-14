
var userAnswers=[];

document.getElementById("question").addEventListener('submit', (e )=>{


const question1=document.getElementById("q_one");
const question2=document.getElementById("q_two");
const question3=document.getElementById("q_three");
const question4=document.getElementById("q_four");
const question5=document.getElementById("q_five");

//pushing users answer to empty array
for(let i=0; i<userAnswers.length; i++)
{
    if(question1[i].checked)
    {
        userAnswers.push(question1[i].value);
    }
}

for(let i=0; i<userAnswers.length; i++)
{
    if(question2[i].checked)
    {
        userAnswers.push(question2[i].value);
    }
}

for(let i=0; i<userAnswers.length; i++)
{
    if(question3[i].checked)
    {
        userAnswers.push(question3[i].value);
    }
}

for(let i=0; i<userAnswers.length; i++)
{
    if(question4[i].checked)
    {
        userAnswers.push(question4[i].value);
    }
}

for(let i=0; i<userAnswers.length; i++)
{
    if(question5[i].checked)
    {
        userAnswers.push(question5[i].value);
    }
}

})