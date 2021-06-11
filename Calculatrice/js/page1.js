

// corps 

let myBody = document.querySelector("body");
console.log(myBody);

let corps = document.createElement("div");
corps.setAttribute("class","black")
myBody.appendChild(corps);

let ecran = document.createElement("input");
console.log(ecran);
ecran.setAttribute("class","ecran")
corps.appendChild(ecran)

let divBtn = document.createElement("div");
corps.appendChild(divBtn)
divBtn.setAttribute("class","divBtn")


let title = document.createElement("h1");
let titleTxt = document.createTextNode("👁️‍🗨️🕳️👁️‍🗨️");
title.appendChild(titleTxt);
let divTitle = document.createElement("div");
myBody.appendChild(divTitle)

divTitle.setAttribute("class","styleH1")

let mySpan = document.createElement("span");
let txtSpan = document.createTextNode("meth")
mySpan.appendChild(txtSpan);

mySpan.style.textDecoration = "line-through"
mySpan.style.border ="black solid"
console.log(mySpan.innerHTML);



divTitle.appendChild(title)
let titleTxt2 = document.createTextNode(`let's do ${mySpan.innerHTML} `);
divTitle.appendChild(titleTxt2)




// Create btn 

let mesBtn = ["1","2","3","4","5","6","7","8","9","0",".","c"];
console.log(mesBtn);

mesBtn.forEach(element => {
    
    mesBtn = divBtn.appendChild(document.createElement("button"));
    mesBtn.textContent = element;
    mesBtn.style.width ="80px";
    mesBtn.style.height = "30px"
    mesBtn.style.border = "solid purple 2px"
    mesBtn.style.borderRadius = "10px"
    mesBtn.style.marginTop = "20px"
    mesBtn.style.cursor = "pointer"

    mesBtn.addEventListener("click", (e) =>{
        console.log(e.target.innerText);

        
        switch(e.target.innerText){
            case "c": ecran.value = "";
                break;
            default: ecran.value += e.target.innerText    

        }
    })

});



// let nb1;
// let nb2;

// let valueNumber = (e) => {
//     console.log(e);
//     if(e.target.innerText =="c"){
//         ecran.value = 0
//     }else {
//         ecran.value = e.target.innerText;
//         nb1 = ecran.value = e.target.innerText
//         console.log(nb1);
//         nb2 = parseInt(nb1) + parseInt(e.target.innerText);
//         console.log(nb2);
//         ecran.value = parseInt(nb1) + parseInt(nb2);

//     }
// }



// divBtn.addEventListener("click",valueNumber)


let divOp = document.createElement("div");
corps.appendChild(divOp);
divOp.setAttribute("class","divOp")
let mesOp = ["+","-","*","/"];

mesOp.forEach(element => {
    
    mesOp = divOp.appendChild(document.createElement("button"));
    mesOp.textContent = element;
    mesOp.style.width ="80px";
    mesOp.style.height = "30px"
    mesOp.style.border = "solid purple 2px"
    mesOp.style.borderRadius = "10px"
    mesOp.style.marginTop = "20px"
    mesOp.style.cursor = "pointer"

    mesOp.addEventListener("click", (e) =>{
        console.log(e.target.innerText);
        ecran.value += e.target.innerText  
    })

    
});



// let valueOp = (e) => {
//     console.log(e);
//     ecran.value = e.target.innerText;

// }

// divOp.addEventListener("click", valueOp)

console.log(mesOp);


let divEgal = document.createElement("div");
corps.appendChild(divEgal);
divEgal.setAttribute("class","divEgal");
let btnEgal = document.createElement("button");
btnEgal.style.width = "100%";
btnEgal.innerText = "=";
btnEgal.style.cursor = "pointer"
btnEgal.style.border = "purple solid 2px"
btnEgal.style.borderRadius = "10px"


divEgal.appendChild(btnEgal)

divEgal.addEventListener("click", (e) =>{
    console.log(e.target.innerText);
    ecran.value = Math.round(eval(ecran.value))
    // if(ecran.value == ""){
    //     ecran.value == "Fais un"
    // }
    

})




// Touche ENTER 

myBody.addEventListener("keyup", (event) =>{
    let name = event.key;
  if (name === 'Enter') {
    ecran.value = Math.round(eval(ecran.value))
  }
}, false);



