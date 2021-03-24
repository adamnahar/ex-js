//array
var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

//access
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//add et remove

var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
objects.pop();
console.log(objects);
objects.push("laptop");
objects.shift();
console.log(objects);
