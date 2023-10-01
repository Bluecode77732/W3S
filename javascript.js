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




/* slice */

const sliFruits1 = ["Banana", "Orange", "Apple", "Mango"];
sliFruits1.slice(2);    //['Apple', 'Mango']


const sliFruits2 = ["Banana", "Orange", "Apple", "Mango"];
sliFruits2.slice(2);
console.log(sliFruits2);   //['Banana', 'Orange', 'Apple', 'Mango']



/* splice */

const splFruits3 = ["Banana", "Orange", "Apple", "Mango"];
splFruits3.splice(2);
console.log(splFruits3);    // ['Banana', 'Orange']


const splFruits1 = ["Banana", "Orange", "Apple", "Mango"];
splFruits1.splice(0, 1, "Lemon", "Kiwi");
console.log(splFruits1);    //['Lemon', 'Kiwi', 'Orange', 'Apple', 'Mango']


const splFruits2 = ["Banana", "Orange", "Apple", "Mango"];
splFruits2.splice(0, 3);
console.log(splFruits2);    //['Orange', 'Apple', 'Mango']


const splFruits4 = ["Banana", "Orange", "Apple", "Mango"];
let splVar = splFruits4.splice(2);
console.log(splFruits4, splVar);    //['Banana', 'Orange'], ['Apple', 'Mango']




/* flat - Flattening an array is the process of reducing the dimensionality of an array. */

const myArr = ["str", [true, [false]], [2, [3]]];
const newArr = myArr.flat();
console.log(newArr);    //['str', true, Array(1), 2, Array(1)]




/* Finding Max and Min Values in an Array
There are no built-in functions for finding the highest or lowest value in a JavaScript array. */




/*  */







