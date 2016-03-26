///////////////////////////////////////////////////////////////////////////////////

var jagode = 6;
var borovnica = 6;
var malina = 10;

if(jagode < 3){
    borovnica --;
    malina -= 2;
}
else{
    jagode -= 3;
}


console.log(jagode);
console.log(borovnica);
console.log(malina);

///////////////////////////////////////////////////////////////////////////////////

var godine = prompt("Koliko godina imate");

if(godine == 63){
    console.log("Vrijeme je za penziju");
}
else if(godine > 63){
    console.log("Korisnik je vec u penziji.");
}
else{
    console.log("Nije jos.")
}


prompt("Pitanje?")
Math.random()

///////////////////////////////////////////////////////////////////////////////////

var userChoice = prompt("Izaberite jedno (kamen, makaze, papir)");
console.log(userChoice);
var computerChoice;
var randomNumber = Math.random();

if(randomNumber<0.33){
    computerChoice = "kamen";
}
else if(randomNumber>=0.33 && randomNumber<0.66){
    computerChoice = "makaze";
}
else{
    computerChoice = "papir";
}

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);


if(userChoice == computerChoice){
    alert("Nerijeseno");
}
else if(userChoice == "makaze"){
   if(computerChoice=="kamen"){
       alert("Computer Wins!!");
   } 
   else{
       alert("User Wins!!");
   }
}
else if(userChoice == "kamen"){
    if(computerChoice=="makaze"){
       alert("User Wins!!");
   } 
   else{
       alert("Computer Wins!!");
   }
}
else if(userChoice == "papir"){
    if(computerChoice=="makaze"){
       alert("Computer Wins!!");
   } 
   else{
       alert("User Wins!!");
   }
}
else{
    alert("Unesite pravilno (kamen, papir ili makaze) !");
}

///////////////////////////////////////////////////////////////////////////////////

var userChoice = prompt("Izaberite jedno (kamen, makaze, papir)");


switch(userChoice){
    case 'kamen':
        alert("Kamen");
        break;
    case 'papir':
        alert("Papir");
        break;
    case 'makaze': 
        alert("Makaze");
        break;
    default:
        alert("Napišite korektno (kamen, makaze, papir) !");   
}



var computerChoice;
var randomNumber = Math.random();

switch(true){
    case randomNumber < 0.33:
        computerChoice = "papir";
        break;
    case randomNumber >= 0.33 && randomNumber < 0.66:
        computerChoice = "kamen";
        break;
    case randomNumber > 0.66:
        computerChoice = "makaze";
        break;
    default: 
        console.log("Nekorektno!");
}

///////////////////////////////////////////////////////////////////////////////////

var dan = prompt("Koji je danas dan.");

switch(true){
    case 'ponedjeljak':
        console.log("Radni dan");
        break;
    case 'utorak':
        console.log("Radni dan");
        break;
    case 'srijeda':
        console.log("Radni dan");
        break;
    case 'cetvrtak':
        console.log("Radni dan");
        break;
    case 'petak':
        console.log("Radni dan");
        break;
    case 'subota':
        console.log("Neradni dan");
        break;
    case 'nedjelja':
        console.log("Neradni dan");
        break;
    default:
        console.log("Napisite dan u sedmici i to malim slovima");
}

///////////////////////////////////////////////////////////////////////////////////

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for(var i=5; i > 0; i--){
    console.log(i);
}

///////////////////////////////////////////////////////////////////////////////////

for(var i = 0; i < 10; i++){
    for(var j = 0; j < i; j++){
        process.stdout.write("#");
    }
    //console.log("\n");
}

///////////////////////////////////////////////////////////////////////////////////

var string = "";
for(var i = 0; i < 10; i++){
    string += '#';
    console.log(string);
}

///////////////////////////////////////////////////////////////////////////////////

var string = "";
var i = 0;
while(i < 10){
    string += '#';
    console.log(string);
    i++;   
}

///////////////////////////////////////////////////////////////////////////////////

var userAnswer = confirm("Da li zelite da nastavimo dalje");
for(;;){
    if(userAnswer == false){
        break;
    }
    userAnswer = confirm("Da li zelite da nastavimo dalje");
}

///////////////////////////////////////////////////////////////////////////////////

var userAnswer = confirm("Da li zelite da nastavimo dalje");
while(userAnswer == true){
    userAnswer = confirm("Da li zelite da nastavimo dalje");
}

///////////////////////////////////////////////////////////////////////////////////

var userAnswer = confirm("Da li zelite da nastavimo dalje");;
do{
   if(userAnswer == true){
       userAnswer = confirm("Da li zelite da nastavimo dalje");
       console.log("true answer");
   }   
}while(userAnswer);

///////////////////////////////////////////////////////////////////////////////////






