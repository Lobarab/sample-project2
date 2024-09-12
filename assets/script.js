//Loads DOM content and initializes the quiz
document.addEventListener('DOMContentLoaded', function(){

    
    timer = setInterval(updateTimer, 1000);

    //Hide all questions except the first one on page load
    for(let i=2; i<=totalQuestions; i++){
        document.getElementById('question'+i).style.display = 'none'; 
    }
    document.getElementById('question1').style.display = 'block';
});


//Global variables
let currentQuestion =1;
const totalQuestions =8; //total number of questions.
let timer = 0;//timer variable
let timeLeft = 30; //seconds per question

//Correct answers:
const correctAnswers = {
    1: "Bogota",
    2: "North America",
    3: "Russia",
    4: "Mount Everest",
    5: "Nile",
    6: "Maldives",
    7: "Australia",
    8: "Greece"


};

function updateTimer(){
    timeLeft--;
    document.getElementById('time-left').textContent=timeLeft;//Update the display
}
