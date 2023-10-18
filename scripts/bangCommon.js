//set initial global variables

var scoreTeamA = 0;
var scoreTeamB = 0;
var questionCount = 0;
var difficultyLevel = 2;

var answer = 0;
 var dummyAnswer1 = 0;
 var dummyAnswer2 = 0;
 var dummyAnswer3 = 0;

 var answersArray = new Array(4);
var questionNumberArray = [];

var gameEndedFlag = false;

var teamAWrongAnswer = false;
var teamBWrongAnswer = false;
var wrongAnswerFlag = false;

var questionsRemaining = 10;





function soundPlay(src){
var audioElement = document.getElementById('player-src');
audioElement.src =src ; //src for the player
var myAudio = document.getElementById("player");
myAudio.load();
myAudio.play();
}

<!-- *********************** function to end the game before 10 questions are completed ********************-->

function endGame()
    {
        if(confirm('Are you sure you want to end the game?'))
           {
           var endMessage = checkWinners();
			//alert(""+endMessage);
        
    //    setTimeout(function() {message.innerHTML = endMessage;}, 3000);
        
			message.innerHTML = endMessage;

			questionCount = 0;

        
            //    setTimeout(function() {startButton.disabled = false;}, 3000);
endButton.disabled = true;
				startButton.disabled = false;

			disableTeamAButtons();
			disableTeamBButtons();
			return;
           }
           else
           {
           return;
           }
        
    }


    <!-- *********************** functions to enable and disable buttons ********************-->


function disableTeamAButtons ()

{

teamAButton1.disabled = true;
teamAButton2.disabled = true;
teamAButton3.disabled = true;
teamAButton4.disabled = true;

return;

}

function disableTeamBButtons ()

{

teamB_Button1.disabled = true;
teamB_Button2.disabled = true;
teamB_Button3.disabled = true;
teamB_Button4.disabled = true;

return;

}

function enableTeamAButtons ()

{

teamAButton1.disabled = false;
teamAButton2.disabled = false;
teamAButton3.disabled = false;
teamAButton4.disabled = false;

return;

}

function enableTeamBButtons ()

{

teamB_Button1.disabled = false;
teamB_Button2.disabled = false;
teamB_Button3.disabled = false;
teamB_Button4.disabled = false;

return;

}

<!-- *********************** function to countdown for each question ********************-->


/* set your parameters(
number to countdown from,
pause between counts in milliseconds,
function to execute when finished
)
*/

function startCountDown(i, p, f) {
// store parameters
var pause = p;
var fn = f;
// make reference to div
var countDownObj = document.getElementById("countDown");
if (countDownObj == null) {
// error
alert("div not found, check your id");
// bail
return;
}
countDownObj.count = function(i) {
// write out count
countDownObj.innerHTML = i;
if (i == 0) {
// execute function
fn();
// stop
return;
}
setTimeout(function() {
// repeat
countDownObj.count(i - 1);
},
pause
);
}
// set it going
countDownObj.count(i);
}


//function to be called at end of countdown sequence oneQ which produces next question
function myFunction() {
oneQ();
}



<!-- *********************** function to check which team won ********************-->

function checkWinners()

{
var message = "";
        question.innerHTML = "";


if (scoreTeamA>scoreTeamB)

	{
	message = "Game Over! <br/> Team A are the winners!!!"
	}


	if (scoreTeamB>scoreTeamA)

		{
		message = "Game Over! <br/> Team B are the winners!!!"
		}

	if (scoreTeamA == scoreTeamB)

		{
		message = "Game Over! <br/> The game is a tie!"
		}

		return message;


}


<!-- *********************** function to shuffle array ********************-->


function shuffle(array)
{     var tmp, current, top = array.length;

if(top) while(--top)

{         current = Math.floor(Math.random() * (top + 1));

tmp = array[current];
array[current] = array[top];
array[top] = tmp;
}
return array;
}



<!-- *********************** function to update score ********************-->


function updateScore()

{

//pointsTeamA.value = scoreTeamA;
//pointsTeamB.value = scoreTeamB;
//    document.getElementById('pointsTeamA').style.fontSize = '30px';
//        document.getElementById('pointsTeamB').style.fontSize = '30px';

//        pointsTeamB.innerHTML.style.fontSize = '30px';

    pointsTeamA.innerHTML = "Points: " + scoreTeamA;
    pointsTeamB.innerHTML = "Points: " + scoreTeamB;
    
return;

}


<!-- *********************** function to check team id ********************-->

function checkTeamID(whichTeam)

{

if(whichTeam == "teamA")



			{

			//teamAWrongAnswer = true;

			wrongAnswerFlag = true;
			scoreTeamA = scoreTeamA - 1;
			updateScore();
			disableTeamAButtons();
			//return;
			}

			else
			{
			teamBWrongAnswer = true;

			wrongAnswerFlag = true;
			scoreTeamB = scoreTeamB - 1;

			updateScore();
			disableTeamBButtons();
			//return;


			}

}



<!--    Function to check answer -->


function checkAnswer (correctAnswer, studentAnswer, teamID)

{

var whichTeam = "";

whichteam = teamID;
if(studentAnswer==correctAnswer)
	{
                        soundPlay("sounds/correctAnswer.mp3");

			//alert("Correct!");
        message.innerHTML = "Correct! <br/> Well done " +teamID;

						disableTeamAButtons();

						disableTeamBButtons();
                        
                        endButton.disabled = true;


			if(teamID == "teamA")


			{
			scoreTeamA = scoreTeamA + 1;
			updateScore();
			}

			else
			{
			scoreTeamB = scoreTeamB + 1;

			updateScore();

			}

	}

	//else

if (studentAnswer!==correctAnswer)

	{
                            soundPlay("sounds/wrongAnswer.mp3");

			if (wrongAnswerFlag==true)


			{
			//alert("Both teams answered incorrectly! \nThe right answer is "+answer);

                message.innerHTML = "Both teams incorrect! <br/> The right answer is "+answer;
			checkTeamID(teamID);

                endButton.disabled = true;

			//return;
			}



			else

			{

			//alert("Wrong Answer!");

			if(teamID == "teamA")



			{

			//teamAWrongAnswer = true;

			wrongAnswerFlag = true;
			scoreTeamA = scoreTeamA - 1;
			updateScore();
			disableTeamAButtons();
			//alert("Wrong! Your turn Team B");
			message.innerHTML = "Wrong! <br/> Your turn Team B";
            return;
			}

			else
			{
			//teamBWrongAnswer = true;

			wrongAnswerFlag = true;
			scoreTeamB = scoreTeamB - 1;

			updateScore();
			disableTeamBButtons();
			//alert("Wrong! Your turn Team A");
			message.innerHTML = "Wrong! <br/> Your turn Team A";

			return;


			}

		//some code to disable buttons

		}

	}







if (questionCount==10)

	{
			var endMessage = checkWinners();
			//alert(""+endMessage);
        
        setTimeout(function() {message.innerHTML = endMessage;}, 3000);
        
			//message.innerHTML = endMessage;

			questionCount = 0;

        
                setTimeout(function() {startButton.disabled = false;}, 3000);

			//	startButton.disabled = false;

			disableTeamAButtons();
			disableTeamBButtons();
			return;

	}

	else

	{

		startCountDown(3, 1000, myFunction);


			//	oneQ();

	}

}

<!--    Function to generate random multiplication question -->


//function oneQ() {
//var i=0;
//var c=0;
//var d=0;
//var e=0;
//var f=0;
//    
//    //reset message
//    
//    message.innerHTML = "";
//
//
//teamAWrongAnswer = false;
//teamBWrongAnswer = false;
//wrongAnswerFlag = false;
//
//var questionString = ""
//
//
//questionCount = questionCount + 1;
//questionsRemaining = questionsRemaining - 1;
//
////questionsLeft.value = questionsRemaining;
//
//
////questionNumber.value = "Question No:" + questionCount;
//
//  questionNumber.innerHTML = "Question No: " + questionCount + "  ";
//
//    
// c = (Math.floor(Math.random()*11));
// d = (Math.floor(Math.random()*11));
// e = (Math.floor(Math.random()*5));
//
//e = e + 2;
//f = e*2;
//
//c = c + difficultyLevel;
//d = d + difficultyLevel;
//
//
// answer = c*d;
// //dummyAnswer1 = answer -2;
// //dummyAnswer2 = answer +2;
// //dummyAnswer3 = answer*2;
//
//answersArray[0] = answer;
//answersArray[1] = answer -e;
//answersArray[2] = answer +e;
//answersArray[3] = answer +f;
//
////Randomize array
//
//answersArray = shuffle(answersArray);
//
//
//
//questionString = "What is  "  +c+ " &times; " +d+ " ?";
//
////question.value = questionString;
//    question.innerHTML = questionString;
//
////teamAButton1.value = answer;
////teamAButton2.value = dummyAnswer1;
////teamAButton3.value = dummyAnswer2;
////teamAButton4.value = dummyAnswer3;
//
//teamAButton1.value = answersArray[0];
//teamAButton2.value = answersArray[1];
//teamAButton3.value = answersArray[2];
//teamAButton4.value = answersArray[3];
//
//teamB_Button1.value = answersArray[0];
//teamB_Button2.value = answersArray[1];
//teamB_Button3.value = answersArray[2];
//teamB_Button4.value = answersArray[3];
//
//
//
//enableTeamAButtons();
//enableTeamBButtons();
//             
//endButton.disabled = false;
//
//
//
//
//
//
//return ;
//
//
//}


//function to start the game

function startGame() {


message.innerHTML = "";
        question.innerHTML = "";

	startButton.disabled = true;

	scoreTeamA = 0;
	scoreTeamB = 0;
    
        questionNumberArray = generateNumbers();




	updateScore();

questionsRemaining = 10;

//questionsLeft.value = questionsRemaining;


//questionNumber.value = questionCount;

    questionNumber.innerHTML = "Question No: " + questionCount;
//	alert("Click OK for the next question");

//	questionCount = questionCount + 1;

	var getQuestion = "";


startCountDown(3, 1000, myFunction);


//	oneQ();

       


	return;
//	}

}


// function to generate 12 random numbers and store in array
//    
    function generateNumbers()
            {
                
                var arr = []
while(arr.length < 12){
    var randomnumber = Math.floor(Math.random()*12) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
             //   arr.sort(function(a, b){return a - b});
//document.write(arr);
           return arr;
            }





