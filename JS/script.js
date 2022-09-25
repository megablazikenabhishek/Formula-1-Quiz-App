// importing questions
import  {quiz}  from "./quiz.js";

//DOM
const timeEl = document.getElementById("timer-el");
const questionEl = document.getElementById("question-el");
const option1 = document.getElementById("op1");
const option2 = document.getElementById("op2");
const option3 = document.getElementById("op3");
const option4 = document.getElementById("op4");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const showQuestion = document.querySelector("#questionContainer");
const showAns = document.querySelector("#resultScreen");
const showBtn = document.querySelector("#show-btn");

//variables
let index = 0;
let attempted = 0;
let score = 0;
let wrong = 0;
let flagCheck = false;

//start function
const start = ()=>{
    // console.log(timeEl);
    let givenTime = 200;
    let count=0;
    let min=0; 
    let sec =0;

    // console.log(questionEl);
    // console.log(option1);

    setInterval(() => {
        count++;
        min  = Math.floor( (givenTime-count)/60 );
        sec = givenTime-(min*60)-count;

        // console.log(min+" "+sec);
        timeEl.textContent = min+":"+sec;

        if(count==givenTime){
            alert("Time's Up!!!!!!!!!!!");
            
            showQuestion.style.display = "none";
            showAns.style.display = "";

            document.getElementById("resultQuestion").textContent = quiz.length;
            document.getElementById("resultAttempt").textContent = attempted;
            document.getElementById("resultCorrect").textContent = score;
            document.getElementById("resultWrong").textContent = wrong;
        }
    }, 1000);

    printQuestion(index);
}

//printing the question
const printQuestion = (i)=>{
    questionEl.textContent = quiz[i].question;
    option1.textContent = quiz[i].option[0];
    option2.textContent = quiz[i].option[1];
    option3.textContent = quiz[i].option[2];
    option4.textContent = quiz[i].option[3];
}

//check the answer
option1.addEventListener("click", ()=>{
    if(flagCheck==false) flagCheck =true;
    else return;

    attempted++;

    if(quiz[index].answer === 1){
        score++;
        option1.classList.add("sucess");
    }
    else{
        wrong++;
        option1.classList.add("wrong");
    }

    scoreEl.textContent = score;
})
option2.addEventListener("click", ()=>{
    // console.log(2);
    if(flagCheck==false) flagCheck =true;
    else return;
     
    attempted++;

    if(quiz[index].answer === 2){
        score++;
        option2.classList.add("sucess");
    }
    else{
        wrong++;
        option2.classList.add("wrong");
    }

    scoreEl.textContent = score;
})
option3.addEventListener("click", ()=>{
    // console.log(3);
    if(flagCheck==false) flagCheck =true;
    else return;
     
    attempted++;

    if(quiz[index].answer === 3){
        score++;
        option3.classList.add("sucess");
    }
    else{
        wrong++;
        option3.classList.add("wrong");
    }

    scoreEl.textContent = score;
})
option4.addEventListener("click", ()=>{
    // console.log(4);
    if(flagCheck==false) flagCheck =true;
    else return;
     
    attempted++;

    if(quiz[index].answer === 4){
        score++;
        option4.classList.add("sucess");
    }
    else{
        wrong++;
        option4.classList.add("wrong");
    }

    scoreEl.textContent = score;
})

//next button
nextBtn.addEventListener("click", ()=>{
    if(index===quiz.length-1){
        showResult();
        return;
    }

    index++;
    printQuestion(index);
    resetOption();
    flagCheck = false;
})

//show button
showBtn.addEventListener("click", ()=>{
    showResult();
})

//reset function
let resetOption= ()=>{
    option1.classList.remove("sucess");
    option1.classList.remove("wrong");

    option2.classList.remove("sucess");
    option2.classList.remove("wrong");

    option3.classList.remove("sucess");
    option3.classList.remove("wrong");

    option4.classList.remove("sucess");
    option4.classList.remove("wrong");
}

let showResult = ()=>{

    if(index!=quiz.length-1 && !confirm("Do you want to end the quiz??")){
        return;
    }

    showQuestion.style.display = "none";
    showAns.style.display = "";

    document.getElementById("resultQuestion").textContent = quiz.length;
    document.getElementById("resultAttempt").textContent = attempted;
    document.getElementById("resultCorrect").textContent = score;
    document.getElementById("resultWrong").textContent = wrong;
}

//Ejector code
start();