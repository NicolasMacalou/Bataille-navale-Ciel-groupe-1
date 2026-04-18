// Constantes 
const btnjouer = document.getElementById('btnjouer');
const titre = document.getElementById('titre');

// Fonction de génération du tableau
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
            td.style.color = "none";
            td.style.backgroundColor = "white";

            // Code à corriger
            const utilisateur = "test";
            fetch("game.json").then(res => res.json()).then(donnees => {
                donnees.push({id: i,case: td.textContent,nom_utilisateur: utilisateur});
                console.log(donnees);
            });

        })
        tr.appendChild(td);
        counter++;
        
    }
    table.appendChild(tr);

    btnjouer.style.display = 'none';
    titre.style.display = 'none';
    table.style.display = 'initial';
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
    console.log("Case cliquée "+ caseNumber);
}

function caseClickedBatailleNavale(caseNum){
    alert(caseNum);
}


function generateBatailleNavale(){
    let table = document.getElementById("tableau");
    lettrelist = ["A","B","C","D","E","F","G","H","I","J"];
    let inittr = document.createElement("tr");
    for(let i=0; i<=10; i++){
        if (i==0){
            let initth = document.createElement("th");
            inittr.appendChild(initth);
        } else {
        let initth = document.createElement("th");
        initth.textContent = lettrelist[i-1];
        inittr.appendChild(initth);
        }
    }
    table.appendChild(inittr);
    for (let i = 1; i<=10; i++){
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.textContent = i;
        tr.appendChild(th);
        for (let j=0; j<10; j++){
            td = document.createElement("td");
                td.addEventListener("click", () =>{
                    caseClickedBatailleNavale(lettrelist[j]+i);
                })
            
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
    }
    btnjouer.style.display = 'none';
    titre.style.display = 'none';
    table.style.display = 'initial';
}