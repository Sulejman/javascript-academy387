function pomjeriLovca(pocetna, krajnja){
    var razlika_x = pocetna[0] - krajnja[0];
    if(razlika_x < 0){
        razlika_x *= -1;
    }
    
    var razlika_y = pocetna[1] - krajnja[1];
    if(razlika_y < 0){
        razlika_y *= -1;
    }
    
    if(razlika_x!=razlika_y){
        return "Lovac ne moze da ide na tu poziciju sa trenutne!";
    }
    else{
        return "Lovac moze da ide na tu poziciju!";
    }
    
}

function pomjeriTopa(pocetna, krajnja){
    
    if(pocetna[0]==krajnja[0]^pocetna[1]==krajnja[1]){
       return "Top moze da ide na tu poziciju!";
    }
    else if((pocetna[0]-krajnja[0])==0 && (pocetna[1]-krajnja[1]) == 0){
        return "Top miruje!";
    }
    else{
        return "Top ne moze da ide na tu poziciju!";
    }
    
}

var pocetna = [4,4];
var krajnja = [4,4];
console.log(pomjeriLovca(pocetna, krajnja));
console.log(pomjeriTopa(pocetna, krajnja));