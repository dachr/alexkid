const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const compteurDisplay = document.getElementById('compteur')
let userChoice
let computerChoice
let result
let pointUser = 0
let pointComputer = 0
let a
let b



possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    
    userChoice =  e.target.id  
    userChoiceDisplay.innerHTML = userChoice
    switch (userChoice) {
        case ('Pierre'):
            efface('affichageuser')
            afficherImageUser('pierreg.png')
            break;
        case ('Papier'):
            efface('affichageuser')
            afficherImageUser('papierg.png')
            break;
        case ('Ciseaux'):
            efface('affichageuser')
            afficherImageUser('ciseauxg.png')
            break;
    }

    generateCOmputerChoice()
    getResult()
    compteur(pointUser, pointComputer);
}))

function generateCOmputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoice.lenght 
    switch (randomNumber) {
        case 1 :
            computerChoice = 'Pierre'
            efface('affichageComputer')
            afficherImageComputer('pierred.png')
        
            break;
        case 2 :
            computerChoice = 'Papier'
            efface('affichageComputer')
            afficherImageComputer('papierd.png')
           
            break;
        case 1 :
            computerChoice = 'Ciseaux'
            efface('affichageComputer')
            afficherImageComputer('ciseauxd.png')            
            break;
        default :
            computerChoice = 'Papier'
            efface('affichageComputer')
            afficherImageComputer('papierd.png')
            break;
           
    }
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    switch (true) {
        case (computerChoice === userChoice):
            result = "C'est une égalitée"
            break;
        case (computerChoice === 'Pierre' && userChoice === 'Papier'):
            result = "Tu as Gagné"
            pointUser++;
            break;
        case (computerChoice === 'Pierre' && userChoice === 'Ciseaux'):
            result = "Tu as perdu"
            pointComputer++;
            break;
        case (computerChoice === 'Papier' && userChoice === 'Ciseaux'):
            result = "Tu as Gagné"
            pointUser++;
            break;
        case (computerChoice === 'Papier' && userChoice === 'Pierre'):
            result = "Tu as perdu"
            pointComputer++;
            break;
        case (computerChoice === 'Ciseaux' && userChoice === 'Papier'):
            result = "Tu as Gagné"
            pointUser++;
            break;
        case (computerChoice === 'Ciseaux' && userChoice === 'Papier'):
            result = "Tu as perdus"
            pointComputer++;
            break;
        default :
            result = "no result"
            break;
    }

    resultDisplay.innerHTML = result;
    console.log(pointComputer);
    console.log(pointUser);

 
}

function afficherImageComputer(image) {
    var img = document.createElement("img");
    img.src = image;
    var div = document.getElementById("affichageComputer");
    div.appendChild(img);
    //block.setAttribute("style", "text-align:center");
}

function afficherImageUser(image) {  
    var img = document.createElement("img");
    img.src = image;
    var div = document.getElementById("affichageuser");
    div.appendChild(img);
    //block.setAttribute("style", "text-align:center");
}



function efface(image) { document.getElementById(image).innerHTML=""; }

function compteur(a, b) {
    var affichage = "          Joueur : "+a+"      Machine : "+b
    compteurDisplay.innerHTML = affichage;
    if (a === 3) {
        window.location.replace("gagne.html")
    }else if (b === 3) {
        window.location.replace("perdu.html")
    }

}