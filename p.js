let boxes=document.querySelectorAll(".t");
let r=document.querySelector("#r");
let hh=document.querySelector(".w")
let turno=true;
const wp=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let d=document.querySelector(".container");
const checkwinner=() => {
    let b1,b2,b3;
    for(let p of wp) {
        b1=boxes[p[0]].innerText;
        b2=boxes[p[1]].innerText;
        b3=boxes[p[2]].innerText;
    
    if(b1!=""&&b1==b2&&b2==b3) {
       
        hh.textContent="WINNER-"+b1;
        boxes.forEach(box => {
        if(box.innerText=="")
        box.disabled=true;
    });
        return true;
        
    } }
    return false;
};
boxes.forEach(box => {
    box.addEventListener("click",() => {
        if(turno) {
            box.innerText="O";
            turno=false;
            hh.textContent="TURN-X";
        }
        else {
            box.innerText="X";
            turno=true;
            hh.textContent="TURN-O";
        }
        box.disabled=true;
        checkwinner();
    }

    )}
);
const disable=() => {
    boxes.forEach(box => {
        box.innerText="";
        box.disabled=true;
    });
};
const enable=() => {
    boxes.forEach(box => {
        box.disabled=false;
        box.innerText="";
        hh.textContent="START THE GAME";
    });
}
r.addEventListener("click",enable);