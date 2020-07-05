let pet_info = {
    name: "Izzy",
    weight: 14,
    happiness: 9    
}

console.log(pet_info)


function checkWeight() {
    let petWeight = 6;
    if (petWeight > 10){
        console.log("you have a happy pet")
    }
    else {
        console.log("you have a fit pet")
    }
}

checkWeight();

function clickedTreatButton() {
    pet_info[`happiness`] = pet_info[`happiness`] + 1;
    pet_info[`weight`] = pet_info[`weight`] + 1;
}
