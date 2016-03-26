var suma = 8;

var sabiranje = function(a, b){
    var suma = a + b;
    return suma;
}

console.log(sabiranje(3));
//console.log("Globalni scope: " + suma);

var kreirajKvadrat = function(stranica, boja){
    
    var povrsina = stranica * stranica;
    
    if(boja == undefined){
        boja = "white";
    }
    
    var kvadrat = [povrsina, boja];
    console.log("Povrsina: "  + kvadrat[0]);
    console.log("Boja: "  + kvadrat[1]);
    return kvadrat;
}

console.log(kreirajKvadrat(3));

var ucionica = [["selma", "nedzad"], ["prazno", "ognjen"], ["emina", "milica"]];
console.log(ucionica[1][1]);

var power = function(base, exponent){
    var rezultat = base;
    if(exponent > 0){
        exponent --;
        return rezultat * power (base, exponent);

    }
    else{
        return 1;
    }
}

console.log(power(10, 3));

var imeFunkcije = function(parametri){return parametri};

function Funkcija(parametri){};

console.log(kreirajKvadrat(4, "black").length);


