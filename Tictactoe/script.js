let user=0;
let comp=0;
let choice=document.querySelectorAll(".choice");
let compscore=document.querySelector("#compscore");
let userscore=document.querySelector("#userscore");
let msg=document.querySelector("#msg");
const compmove=()=>{
    let moves=["rock","paper","scissors"];
    let compchoice=moves[Math.floor(Math.random()*3)];
    console.log("compchoice", compchoice);
    return compchoice;
}
const playgame=(userchoice)=>{
    const compchoice=compmove();
    if(compchoice==="rock" && userchoice==="scissors" || compchoice==="scissors" && userchoice==="paper"||compchoice==="paper" && userchoice==="rock")
    {
    console.log("comp won");
    comp++;
    compscore.innerText=comp;
    msg.style.backgroundColor="red";
    msg.innerText=`You lost! ${compchoice} beats ${userchoice}`;
    }
    else if(compchoice!=userchoice)
    {
        console.log("user won");
     user++;
     msg.style.backgroundColor="green";
     userscore.innerText=user;
     msg.innerText=`You won! ${userchoice} beats ${compchoice}`;
    }
    else
    {
        msg.style.backgroundColor="#04042A";
        console.log("draw");
    msg.innerText=`It's a draw!`;
    }
}
choice.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userchoice=choices.getAttribute("id");
        console.log("userchoice", userchoice);
        playgame(userchoice);
    });
});
