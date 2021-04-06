let select=["Rock","Paper","Scissors"];

let playerScore=0;
let pcScore=0;

function computerPlay()
{
  return Math.round(Math.random()* 2);
  
}

function play(playerSelect)
{

    pcSelect = (select[computerPlay()]);
    playerSelect = (prompt("Unesi znak","TVoj unos"));
    console.log(playerSelect + " "+ pcSelect);

switch(playerSelect.toLowerCase()){

case "rock": 
switch(pcSelect.toLowerCase()){

case "rock": result="Tie"; 
break;

case "paper": result="You Lose"; 
break;

case "scissors": result="You Win"; 
break;
}
break;

case "paper":
switch(pcSelect){

case "rock": result="You Win"; 
break;

case "paper": result="Tie"; 
break;

case "scissors": result="You Lose"; 
break;
}
break;

case "scissors": 
switch(pcSelect){

case "rock": result="You Lose"; 
break;

case "paper": result="You Win"; 
break;

case "scissors": result="Tie"; 
break;
}
break;

}

    addScore()
return result;

}

function addScore(){

    if (result=="You Lose") {
        pcScore++;
        console.log("Player Score:" + " " + playerScore + " " + "Pc Score" + " " + pcScore);
        }
        else if(result=="You Win"){
        playerScore++;
        console.log("Player Score:" + " " + playerScore + " " + "Pc score" + " " + pcScore);
        }
        else if(result =="Tie"){

            console.log("Player Score:" + " " + playerScore + " " + "Pc Score" + " " + pcScore);

        }
    }
        
function roundPlay(){
counter = 0;
while(counter < 5){
play();
counter++;
}
declareWinner();


}

function declareWinner(){

    if(playerScore == pcScore)
    {
        alert("It's a tie!!")
    }
    else if (playerScore < pcScore)
    {

        alert("You lost!!")
    }

    else if (playerSCore > pcScore)
    {
        alert("You won!!")
    }


}

roundPlay();



