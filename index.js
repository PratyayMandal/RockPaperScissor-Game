let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("user-score");
const computerScore_div =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");
const result_p = document.querySelector(".result-screen > p");
const rock_div = document.getElementById('r'); 
const user_pick_div = document.getElementById("user-pick");
const computer_pick_div = document.getElementById("computer-pick");
const userPickedIcon_div = document.getElementById("userPickedIcon");
const computerPickedIcon_div = document.getElementById("computerPickedIcon");
const scissor_div = document.getElementById('s'); 
const paper_div = document.getElementById('p'); 
const playAgain = document.getElementById("playAgain");
const next = document.getElementById("next");
const startNew = document.getElementById("startNew");
const startNew2 = document.getElementById("startNew2");
const againstcomp_span = document.getElementById("againstComputer");
const boxShadow1_div = document.getElementById("boxShadow1");
const boxShadow2_div = document.getElementById("boxShadow2");
const hurray_div = document.getElementById("hurray");
const frame2_div = document.getElementById("frame2");
const frame1_div = document.getElementById("frame1");

function getComputerChoice(){
    const choice = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function convertToImage(letter) {
    if(letter === 'r')  return `<img src="icons/rock sign.png" >`;
    if(letter === 's')  return `<img src="icons/scissor sign.png" >`;
    return `<img src="icons/paper sign.png" >`;

}


function getBorderColor(userChoice,computerChoice){
    if(userChoice === 'r'){
        user_pick_div.style.border = "16px solid #0074B6";
    }
    else if(userChoice === 's'){
        user_pick_div.style.border = "16px solid #BD00FF";
    }
    else if(userChoice === 'p'){
        user_pick_div.style.border = "16px solid #FFA943";
    }
    if(computerChoice === 'r'){
        computer_pick_div.style.border = "16px solid #0074B6";
    }

    if(computerChoice === 's'){
        computer_pick_div.style.border = "16px solid #BD00FF";
    }
    
    if(computerChoice === 'p'){
        computer_pick_div.style.border = "16px solid #FFA943";
    }
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = `YOU WON`;

    userPickedIcon_div.innerHTML = `${convertToImage(userChoice)}`;
    computerPickedIcon_div.innerHTML = `${convertToImage(computerChoice)}`;

    boxShadow1_div.style.display = "block";
    console.log("WIN");
    if(userScore>computerScore){
        next.style.display = "block";
    }
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = "YOU LOST";

    userPickedIcon_div.innerHTML = `${convertToImage(userChoice)}`;
    computerPickedIcon_div.innerHTML = `${convertToImage(computerChoice)}`;
    boxShadow2_div.style.display = "block";
    console.log("LOSE");
    if(userScore>computerScore){
        next.style.display = "block";
    }
}
function draw(userChoice,computerChoice){
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = "TIE UP";

    userPickedIcon_div.innerHTML = `${convertToImage(userChoice)}`;
    computerPickedIcon_div.innerHTML = `${convertToImage(computerChoice)}`;
    againstcomp_span.style.display = "none";
    console.log("DRAW");
    if(userScore>computerScore){
        next.style.display = "block";
    }
}

function gameLogic(userChoice){
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    getBorderColor(userChoice,computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function getresult(){
    frame2_div.style.display = "block";
    frame1_div.style.display = 'none';
}

function main(){
    rock_div.addEventListener('click',function(){
        gameLogic('r');
        getresult();
    })
    scissor_div.addEventListener('click',function(){
        gameLogic('s');
        getresult();
    })
    paper_div.addEventListener('click',function(){
        gameLogic('p');
        getresult();
    })
}
main();

/*.........PLAY AGAIN.........*/
playAgain.addEventListener('click',function(){
    frame2_div.style.display = "none";
    frame1_div.style.display = 'block';
    againstcomp_span.style.display = 'block';
    boxShadow1_div.style.display = "none";
    boxShadow2_div.style.display = "none";
    next.style.display = "none";
})

/*...........NEXT BUTTON.............*/
next.addEventListener('click',function(){
    console.log("hey,Congratulations on your well-deserved success!");
    scoreBoard_div.style.display = "none";
    hurray_div.style.display = "block";
    frame2_div.style.display = "none";
    
})

/*..........START NEW BUTTON ON RESULT PAGE.............*/
startNew.addEventListener('click',function(){
    console.log("hey");
    hurray_div.style.display = "none";
    frame2_div.style.display = "none";
    frame1_div.style.display = 'block';
    boxShadow1_div.style.display = "none";
    boxShadow2_div.style.display = "none";
    userScore = 0;
    computerScore = 0;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
})

/*..........START NEW BUTTON ON HURRAY PAGE.............*/
startNew2.addEventListener('click',function(){
    console.log("Lets start a new match!!!");
    scoreBoard_div.style.display = "flex";
    hurray_div.style.display = "none";
    frame2_div.style.display = "none";
    frame1_div.style.display = 'block';
    boxShadow1_div.style.display = "none";
    boxShadow2_div.style.display = "none";
    userScore = 0;
    computerScore = 0;
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
})

/*..............JS FOR RULES POP UP.............*/

function togglePopup(){
    document.getElementById("rules1").classList.toggle("active");
}


/*..............JS FOR LOCAL STORAGE.............*/
function loadScores() {
    const savedUserScore = localStorage.getItem('userScore');
    const savedComputerScore = localStorage.getItem('computerScore');
    if (savedUserScore !== null || savedComputerScore !== null) {
      userScore = parseInt(savedUserScore);
      computerScore = parseInt(savedComputerScore);
      userScore_div.textContent = userScore;
      computerScore_div.textContent = computerScore;
    }
}
loadScores();
// ..........Save scores to local storage
function saveScores() {
localStorage.setItem('userScore', userScore);
localStorage.setItem('computerScore', computerScore);
}
//...........Update scores before window is closed or refreshed
window.addEventListener('beforeunload', () => {
saveScores();
});

