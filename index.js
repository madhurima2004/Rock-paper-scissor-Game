let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
   const ranId= Math.floor(Math.random()*3);
   return options[ranId];
    //rock,paper,scissors

}

const drawFunc =()=>{
    // console.log("game was draw.");
    msg.innerText="Draw game";
    msg.style.backgroundColor ="yellow";
}

const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`you win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you loose!");
        msg.innerText=`you lose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice=genComputerChoice();
    // console.log("comp choice =",compChoice);


    if(userChoice === compChoice){
        //draw game
        drawFunc();
    }else{
        let userWin=true;
        if(userChoice == "rock"){
            //scissors or paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice =="paper"){
            //rock or scissors
            userWin=compChoice==="scissors"? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log(choice);
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });

});