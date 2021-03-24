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

//order
var numbers = [4, 10, 8, 12, 6];
numbers = numbers.reverse();
console.log(numbers);
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

//boucle

var total = 0;
var limit = 10;
for (i = 0; i <= limit; i++) {
  total = total + i;
}
console.log(total);

//Reverse

var string = "Hello Konexio !";
var splitted = string.split("");
var reversed = [];
for (i = 0; i <= splitted.length; i++) {
  reversed.unshift(splitted[i]);
}
var result = reversed.join("");
console.log(result);
