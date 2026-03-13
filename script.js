let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset.button");
let newgameBtn=document.querySelector("#newbutton");
let msgcontainer=document.querySelector("msg-container");
let msg=document.querySelector("#msg");
let tutno=true;
let winlist=[ [0,1,2],[0,3,6],[0.4,8],[1,4,7],[2,5,7],[2,4,6],[2,4,6],
];
const resetGame=()=> {
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addeventlistener("click",() => {
        console.log("Boxeswasclicked");
        if (turnO){
            box.innerText="0";
            turno =false;
        }
        else{
            box.disabled=true;
            checkwinner();
        });
    });
    const boxesdisabled=()=> {
        for(letbox of boxes){
            box.disabled=true;
            box.innerText="";
        }
    };
    const showwinner=(winner)=> {
        msg.innerText=congratulationwinneris$(winner);
            msgcontainer.classList.remove("hide")

        }
        const checkwinner=()=> {
            for(let pattern of winlist){
                let pos1val=boxes[pattern[0]].innerText;
                let pos2val=boxes[pattern[1]].innerText;
                let pos3val=boxes[pattern[2]].innerText;
                if(pos1val !=""&&pos2val !=""&&pos3val !=""){
                    console.log("winner",pos1val);
                    showwinner(pos1val);
                
                }
            }
        }
    newgameBtn.addeventlistener("click",resetGame);
    resetBtn.addeventlistener("click",resetGame);
        

    

    

