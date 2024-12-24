let choice=document.querySelectorAll(".choice");
let reset=document.querySelector("button");
let t=document.querySelector(".block3");
let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");
let pl=0;
let comp=0;
function compChoice(){
    let rpc=["rock","paper","scissors"];
    let j=Math.floor(Math.random() *3);
    let c=rpc[j];
    return c;
}
choice.forEach((c)=>{
    c.addEventListener("click",()=>{
        let userCh=c.getAttribute("id");
        console.log("user choice ",userCh);
        let compCh=compChoice();
        console.log("comp choice",compCh);
        if(userCh=="rock" && compCh=="paper"){
            comp++;
            t.innerText="You lost :( Paper beats rock";
            p1.innerText="You : "+pl;
            p2.innerText="Comp : "+comp;
        }
        else if(userCh=="paper" && compCh=="scissors"){
            comp++;
            t.innerText="You lost :( Scisssor beats paper";
            p1.innerText="You : "+pl;
            p2.innerText="Comp : "+comp;
        }
        else if(userCh=="scissors" && compCh=="rock"){
            comp++;
            t.innerText="You lost :( rock beats scissors";
            p1.innerText="You : "+pl;
            p2.innerText="Comp : "+comp;
        }
        else if(userCh=="paper" && compCh=="rock"){
            pl++;
            t.innerText="You won :) Paper beats rock";
            p1.innerText="You : "+pl;
            p2.innerText="Comp : "+comp;
        }
        else if(userCh=="scissors" && compCh=="paper"){
            pl++;
            t.innerText="You won :) scissor beats paper";
            p1.innerText="You : "+pl;
            p2.innerText="Comp : "+comp;
        }
        else if(userCh=="rock" && compCh=="scissors"){
            pl++;
            t.innerText="You won :) rock beats scissors";
            p1.innerText="You : "+pl;
            p2.innerText="Comp : "+comp;
        }
        else{
            t.innerText="Its a tie";
        }
    });
});
reset.addEventListener("click",()=>{
    p1.innerText="You : 0";
    p2.innerText="Comp : 0"; 
    t.innerText="";
    pl=0;
    comp=0;
});
