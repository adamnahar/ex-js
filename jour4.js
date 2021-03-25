var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};
console.log(cat);
console.log(cat.age);
console.log(cat["age"]);
if (cat.isCute) {
    console.log("So cute !");
}

var cat2 = {
    name: "Felix",
    age: 20,
    isCute: false
};
console.log(cat2);
var cats = [cat, cat2];
console.log(cat.age, cats[0].age);
console.log(cat2.isCute, cats[1].isCute);

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkIfEven(3);
checkIfEven(4);
checkIfEven(543);
checkIfEven(86734319);