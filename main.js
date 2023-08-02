// find the lowest number in an array

function lowestNumber(numbers){
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[0] > numbers[i]){
            numbers[0] = numbers[i];
        }
    }
    return numbers[0];
}

let numberOfTheList = [56, 764, 937, 465, 4398 ,34897 ,439587,2 , 578934];
let lowest = lowestNumber(numberOfTheList);

console.log("The lowest number is " , lowest);