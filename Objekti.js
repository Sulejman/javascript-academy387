var house = {
    
    floors: 2,
    windows: 10,
    garage: true,
    isGarageOpen: true,
    owner: "Edin",
    location: "Ilidza",
    
    openGarage: function(isGarageOpen){
        if(isGarageOpen==true){
            console.log("It's already opened");
            return isGarageOpen;
        }
        else{
            isGarageOpen = true;
            return isGarageOpen;
        }
    }
    
    
}

var array = [];
var broj = 3;
var nesto = function(){};
function nestodrugo(){};

// console.log(house.owner);
// house.owner = "Azra";
// console.log(house.owner);
// console.log(house.isGarageOpen);
// house.isGarageOpen = house.openGarage(house.isGarageOpen);
// console.log(house.isGarageOpen);
var kuca =  house;
kuca.owner = "Milica";
house.owner = "Edin";

console.log(house.owner);
console.log(kuca.owner);

