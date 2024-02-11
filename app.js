let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");
let p = document.querySelector("p");





document.addEventListener("keypress", function(){
    if(started == false){
        //console.log("game is started");
        started = true;

        levelUp();
    }


});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp(){

    userSeq = [];

    level++;
    h2.innerText = `LEVEL: ${level}`;


    //random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}

function checkAns(idx){
    //console.log("current level: ", level);
    //let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");

        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp(), 2000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b> ${level} </b>, <br> Press any key to start the game again.`;
        document.querySelector("body").style.backgroundColor = "red";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";  
        }, 150);
        highestScrore();
        reset();
    }
}

let latestScore = level;
function highestScrore(){
    if(level > latestScore){
        latestScore = level;
    }
    p.innerText = `The highest score is ${latestScore}`;
   }

   
function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;   
}


function displayPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      for (let j = 1; j <= i; j++) {
        pattern += '* ';
      }
      console.log(pattern);
    }
  }
  
  // Change the value below to adjust the number of rows in the pattern
  const numberOfRows = 5;
  
  displayPattern(numberOfRows);
  
