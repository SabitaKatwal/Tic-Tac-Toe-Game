let box= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; //playerX, PlayerO
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
};
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked");

        if(turnO){
    box.innerText="O";
    turnO=false;
}else{
    box.innerText="X";
    turnO=true;
}
box.disabled=true;

checkWinner();
    });

});
const disableBox=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
}
const enableBox=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText= `congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const checkWinner=()=>{
    for (let pattern of winPattern){
            let pos1Val= box[pattern[0]].innerText;
            let pos2Val=box[pattern[1]].innerText;
            let pos3Val=box[pattern[2]].innerText;

            if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
                if(pos1Val===pos2Val&& pos2Val===pos3Val){
                    console.log("winner!", pos1Val);
                    showWinner(pos1Val);
                }
            }
        

    }
};
newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);