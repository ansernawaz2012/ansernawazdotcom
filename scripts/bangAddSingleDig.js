//function to generate 2 single digit random numbers to be added


function oneQ() {
var i=0;
var c=0;
var d=0;
var e=0;
var f=0;
    
   
    
    //reset message
    
    message.innerHTML = "";


teamAWrongAnswer = false;
teamBWrongAnswer = false;
wrongAnswerFlag = false;

var questionString = ""


questionCount = questionCount + 1;
questionsRemaining = questionsRemaining - 1;

//questionsLeft.value = questionsRemaining;


//questionNumber.value = "Question No:" + questionCount;

  questionNumber.innerHTML = "Question No: " + questionCount + "  ";

    
 c = Math.floor((Math.random()*9)+1);
 d = Math.floor((Math.random()*9)+1);
 e = (Math.floor(Math.random()*2));

e = e + 2;
f = e*2;

//c = c + difficultyLevel;
//d = d + difficultyLevel;


 answer = c+d;
    
 

answersArray[0] = answer;
answersArray[1] = answer -e;
answersArray[2] = answer +e;
answersArray[3] = answer +f;

//Randomize array

answersArray = shuffle(answersArray);



questionString = "What is  " + c + " &#43; " +  d + " ?";
    
//question.value = questionString;
    question.innerHTML = questionString;

//teamAButton1.value = answer;
//teamAButton2.value = dummyAnswer1;
//teamAButton3.value = dummyAnswer2;
//teamAButton4.value = dummyAnswer3;

teamAButton1.value = answersArray[0];
teamAButton2.value = answersArray[1];
teamAButton3.value = answersArray[2];
teamAButton4.value = answersArray[3];

teamB_Button1.value = answersArray[0];
teamB_Button2.value = answersArray[1];
teamB_Button3.value = answersArray[2];
teamB_Button4.value = answersArray[3];



enableTeamAButtons();
enableTeamBButtons();

endButton.disabled = false;




return ;


}