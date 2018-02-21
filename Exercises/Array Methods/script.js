var fruits= ["banana", "apple", "orange", "watermelon"];
// add lemon to the end of the array
fruits.push("lemon");
console.log(fruits);

// remove the first item from the array
fruits.splice(0,1);
console.log(fruits);

// find the index of the orange
var orangeIndex = fruits.indexOf("orange");
console.log(orangeIndex);

// add the index to the end of the array
fruits.push(orangeIndex);
console.log(fruits);

// sort the array
fruits.sort();
console.log(fruits);

// get the length of the array
var fruitsLength = fruits.length;
console.log(fruits);

// add the length to the start of the array
fruits.unshift(fruitsLength);
console.log(fruits);

// reverse the array
fruits.reverse();
console.log(fruits);

// remove two items from the array starting at position 3
fruits.splice(3,2);
console.log(fruits);

// extra credit
console.log("Extra credit");
var vegetables = ["carrot", "tomato"];

// concatenate the two arrays 
var food = fruits.concat(vegetables);
console.log(food)

// convert the new array into string
console.log(food.join())