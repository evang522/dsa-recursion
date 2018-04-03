'use strict';

// What is the input to the program
//How many sheep we have
// What is the output of the program
// A recursive display of each sheep as it jumps over. 
// What is the input to each recursive calls
// The number of sheep left to jump
// What is the output of each recursive calls
// Output of the recursive calls is the message 'Another sheep jumps over the fence'
// along with the number of the current sheep jumping.



// ================================================ RECURSIVE ===================================>
// const countSheep = sheepNum => {
  
//   // Set a base condition of 0 sheep. If the remaining amount of sheep is 0, end the function
//   if (sheepNum === 0) {
//     return;
//   }

//   console.log(`${sheepNum} - Another sheep jumped over the fence`);
//   countSheep(sheepNum -1);

// };


// countSheep(10);


// ================================================ ITERATIVE =====================================>

// const countSheepIterate = sheepNum => {
//   for(let i=sheepNum; i!==0; i--) {
//     console.log(`${i} - Another sheep jumped over the fence`);
//   }
// };

// countSheepIterate(10);




// Array Double

// ======================================= RECURSIVE================ === === === === === >


// const arrayDouble = arr => {
//   if (arr.length === 0) {
//     return [];
//   }

//   return [(arr[0]*2), ...arrayDouble(arr.slice(1))];
// };

// arrayDouble([1,2,3]);


// ======================================= ITERATIVE ================ === === === === === >


const arrayDouble = arr => {
  const newArr = [];

  for(let i=0;i<arr.length;i++) {
    newArr[i] = arr[i]*2;
  }

  return newArr;
};

arrayDouble([1,2,3]);




// ======================================= RECURSIVE================ ===|= ===|= ===|= ===|= ===|= >

// const reverseStr = str => {
//   if (str === '') {
//     return '';
//   }

//   return (reverseStr(str.slice(1)) + str[0]);

// };



// ======================================= ITERATIVE ================ === === === === === >


// const reverseStr = str => {
//   if (str.length === 0) {
//     return '';
//   }
//   let newStr = '';

//   for(let i=0; i<str.length; i++)  {
//     newStr = str[i] + newStr;
//   }

//   return newStr;
// };




// ======================================= RECURSIVE================ ===|= ===|= ===|= ===|= ===|= >


// // Input:  The amount of dots on one side of the eq. triangle
// // Output: The triangular number.

// // Example: Input:2, Output: 3

// const calculateNthTriangle = num => {
//   if (num===1) {
//     return num;
//   }

//   return calculateNthTriangle(num-1) + num;

// };

// console.log(calculateNthTriangle(9));


//=================================================================================================>

/**
 * Recursively splits a string with the use of a separator.
 * @param {String} string The string to separate.
 * @param {String} delimeter The character to act as the separator.
 * @returns {String[]} A new array separated by the separator.
 * @example
 * // returns ['1', '21', '2018']
 * split('1/21/2018','/');
 */
function split (string, delimeter ) {
  const delimIndex = string.indexOf(delimeter);
  // console.log(string);
  if (delimIndex === -1) {
    return [string];
  }


  // slice from beginning of string to the location of the delimeter
  return [string.slice(0,delimIndex), ...split(string.slice(delimIndex+delimeter.length), delimeter)];
}

console.log(split('1//21/2018','//'));  



//===============================================================BINARY REPRESENTATION=========================================== ===>

// Input: Decimal based number
// Output: Binary representation
// Base Case: 0,1

/** 
 * Recursively represents a number in Binary
 * @param {number} num The number to convert to Binary
 * @returns {string} The Binary Representation
 * @example 
 * // repInBin(3) 
 * // returns 11;
 */
const repInBin = num => {
  if (num === 1) {
    return '1';
  }
  if (num === 0) {
    return '0';
  }
  
  // We need to call repInBin recursively until num equals '1'. But we also need to return the binary string value produced. 
  // num%2


  return (repInBin(Math.floor(num/2))).toString() + (num%2).toString();
};



//==============================================================Factorials

// Input: A number to factorialize
// Output: The Factorialized number

/**
 * factorialize: Returns the factorial of a given number, recursively
 * @param {number} num The number to factorialize
 * @returns {number} The resulting factorial
 */
const factorialize = num => {
  if (num === 1) {
    return num*1;
  }

  return factorialize(num-1) * num;
};



//======================================================================Fibonacci


// We need to return the number of the fibonacci sequence of the supplied index.
// So, if the number supplied is 4, we need to return 5
    

// const fibonaccize = num => {

//   if (num === 1) {
//     return [0];
//   }
//   let fibo = [0,1];
//   for(let i=2; i<num; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
//   }
//   return fibo[num-1];
// };



// INTERVIEW QUESTION
/**
 * Fibonaccize: Print the fibonnaci sequence of an Nth number
 * @param {number} num The index of the fibonacci sequence to print
 */

// Need to calculate out the fibonacci sequence to the index specified by the number, then return the 
const fibonaccize = num => {
  if (num<2)
    return num;


  return (fibonaccize(num-2) + fibonaccize(num-1));
  
};

// Flatten This Array
// var arr = [5, 1, 23, 45, [], [1,8,9,0,5],[[1,2, 345, 78, 899]]];



const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
]

const traverse = (arrOfObj, parent) => {
  const node = {};
	
  arrOfObj.filter(cat => cat.parent === parent)
    .forEach(elm => {
			 node[elm.id] = traverse(arrOfObj, elm.id);
    });
  return node;
};


traverse(animalHierarchy,null);