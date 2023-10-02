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


const sliFruits3 = ["Banana", "Orange", "Apple", "Mango"];
let sliVar1 = sliFruits3.slice(2);    //['Apple', 'Mango']
console.log(sliFruits3, sliVar1);   //['Banana', 'Orange', 'Apple', 'Mango'], but slice method won't log out from its sliced elements.



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
let splVar1 = splFruits4.splice(2);
console.log(splFruits4, splVar1);    //['Banana', 'Orange'], ['Apple', 'Mango']




/* flat - Flattening an array is the process of reducing the dimensionality of an array. */

const myArr = ["str", [true, [false]], [2, [3]]];
const newArr = myArr.flat();
console.log(newArr);    //['str', true, Array(1), 2, Array(1)]




/* Finding Max and Min Values in an Array
There are no built-in functions for finding the highest or lowest value in a JavaScript array. */




/* sort */

const sortArr1 = ["str", [true, [false]], [2, [3]], [[undefined], null, [[NaN]]]];
sortArr1.sort();    //[LOG]: [[[undefined], null, [[NaN]]], [2, [3]], "str", [true, [false]]]
console.log(sortArr1);




/* reverse */

const sortArr2 = ["str", true, false, 2, 3, undefined, null, NaN];
sortArr2.sort();
sortArr2.reverse();
console.log(sortArr2);




/* map */

/** 
 * 'map()' method is to create a new array by applying a given function to each element of an existing array. 
 * Using map() to create a new array where each element is doubled. 
*/
const nums1 = [1, 2, 3, 4, 5];

const doubledNums1 = nums1.map(function (number) {
  return number * 2;
});

console.log(doubledNums1); // Output: [2, 4, 6, 8, 10]


/* brevity of the function using arrow */

const nums2 = [1, 2, 3, 4, 5];

const doubledNums2 = nums2.map((number) => {
  return number * 2;
});

console.log(doubledNums2); // Output: [2, 4, 6, 8, 10]


function fN(num) {
  let variable = num.map((num) => {
    return Math.pow(num, 2);
  })
  return variable;
};

fN([1, 2, 3, 4, 5]);  //[1, 4, 9, 16, 25]



/* join */

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits1.join(" & "); //Banana & Orange & Apple & Mango
console.log(typeof text);   //string



/*  */



