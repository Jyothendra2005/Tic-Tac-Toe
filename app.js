let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rst");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turnO=true;//playerO,playerX;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count=0;
boxes.forEach((box)=>{
        box.addEventListener("click",function(){
            console.log("box clicked");
            if(turnO){
                box.innerText="O";
                turnO=false;
            }else{
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            count++;
            let isWinner=checkWinner();
            if(count==9 && !isWinner){
                tieGame();
            }
        });
});

const tieGame=()=>{
      msg.innerText=`Game was a draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
        console.log("Game was a draw.");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (win)=>{
    msg.innerText=`Congratulations, Winner is ${win}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
};


const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
     count=0;
};


newBtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);