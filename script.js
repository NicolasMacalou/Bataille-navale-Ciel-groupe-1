
const btnjouer = document.getElementById('btnjouer');
const titre = document.getElementById('titre');

function generatetable(){
    //La version propre pour générer un tableau, y'a une autre fonction en dessous pour refaire le 'Guess the Number'
let table = document.getElementById("tableau");
let counter=1;


for(let i = 0; i<10; i++){
    let tr = document.createElement("tr");
    for(let j = 0; j<10; j++){
        let td = document.createElement("td");
        td.textContent = counter;
        td.addEventListener("click", () =>{
            caseClicked(td.textContent);
        })
        tr.appendChild(td);
        counter++;
        
    }
    table.appendChild(tr);
    btnjouer.style.display = 'none';
    titre.style.display = 'none';
}
}
function onetohundred(){
    for(let i=1; i<101; i++){
        console.log(i);
    }
}

function guessthenumberStart(){

}
function caseClicked(caseNumber){
    console.log("Case cliquée"+ caseNumber);
}


function generateBatailleNavale(){
    let table = document.getElementById("tableau");
    lettrelist = ["A","B","C","D","E","F","G","H","I","J"];
    for (let i = 0; i<10; i++){
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.textContent = i;
        for (let j=0; j<=10; j++){
            if(j==0){
                td= document.createElement("td")
            }
        }
    }
}