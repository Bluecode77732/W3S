/* I am having a accessing on array and any other methods in JS. Therefore, I write in here the codes I don't understood or forget, and some of methods made me noticed. */

/* concat */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.concat() //"Mango"


const name1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); //["Emil", "Tobias", "Linus", "Peter"]


const name2 = ["Emil", "Tobias", "Linus"];
const name3 = ["Gecko"]
const newName = ["Tamir", name3];
name2.concat(newName);   //["Emil", "Tobias", "Linus", "Tamir", "Gecko"]




/* splice */

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(0, 1, "Lemon", "Kiwi");
console.log(fruits1); //['Lemon', 'Kiwi', 'Orange', 'Apple', 'Mango']


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits2); //['Orange', 'Apple', 'Mango']




/* flat - Flattening an array is the process of reducing the dimensionality of an array. */

const myArr = ["str", [true, [false]], [2, [3]]];
const newArr = myArr.flat();
console.log(newArr);    //['str', true, Array(1), 2, Array(1)]




/* Finding Max and Min Values in an Array
There are no built-in functions for finding the highest or lowest value in a JavaScript array. */




/*  */







