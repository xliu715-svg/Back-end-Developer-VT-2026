// Challenge 1
/*  Create a function addTwo that accepts one input and adds 2 to it. */

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

const addTwo = (num: number) => {
    return num + 2;
};

console.log(addTwo(3));
console.log(addTwo(10));


// ________________________________________________________________________________________________
// Challenge 2
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));

const addS = (text: string) => {
    return text + "s";
};
console.log(addS("pizza"));
console.log(addS("bagel"));


// ________________________________________________________________________________________________
// Challenge 3
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
//console.log(map([1, 2, 3], addTwo));

type addTwoFunction = (num: number) => number;
const map = (input: number[], addTwo: addTwoFunction) => {
    const result: number[] = [];

    input.forEach(element => {
        result.push(addTwo(element));
    });

    return result;
};

const addTwo = (num: number) => {
    return num + 2;
};

console.log(map([1, 2, 3], addTwo));


// ________________________________________________________________________________________________
// Challenge 4
/* 
The function forEach takes an array and a callback, and runs the callback on each element of the array. 
forEach does not return anything.
*/

type callbackFnFunction = (char: string) => string;
const forEachFn = (letters: string[], callbackFn:callbackFnFunction) => {
    for (const letter of letters) {
        callbackFn(letter);
    }
};

const callbackFn = (char: string) => {
    return alphabet += char;
};

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEachFn(letters, callbackFn);
console.log(alphabet);


// ________________________________________________________________________________________________
// Challenge 5
/* 
Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. 
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/
//console.log(mapWith([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]

//redefine forEachFn so it returns not only a string but can be any type

const forEachFn = <T>(array: T[], callbackFn:(element: T) => void): void => {
    for (const element of array) {
        callbackFn(element);
    }
};

//create a new mapWith function

type mapWithFunction = (num: number) => number;
const mapWith = (array: number[],callback: mapWithFunction) => {
    const res: number[] = [];
    forEachFn(array, (element) => {
        res.push(callback(element));
    }
    );
    return res;
};

const addTwo = (num: number) => {
    return num + 2;
};

console.log(mapWith([1, 2, 3], addTwo));


// ________________________________________________________________________________________________
// Challenge 6
/* 
The function reduce takes an array and reduces the elements to a single value. 
For example it can sum all the numbers, multiply them, 
or any operation that you can put into a function.
*/

type ReduceFunction = (accumulator: number,initialValue:number) => number;
const reduce = (array: number[],initialValue: number, callback: ReduceFunction): number => {
    let accumulator = initialValue;
    
    forEachFn(array, (element) => {
        accumulator = callback(accumulator, element);
    });

    return accumulator;
};

const sum = reduce([1, 2, 3, 4], 0, (acc, num) => acc + num);
console.log(sum);

const multiply = reduce([1, 2, 3, 4], 1, (acc, num) => acc * num);
console.log(multiply);



// ________________________________________________________________________________________________
// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
 */


const forEachFn = <T>(array: T[], callbackFn:(element: T) => void): void => {
    for (const element of array) {
        callbackFn(element);
    }
};
//Redefine reduce so it can take generic types

type ReduceFunction<T> = (accumulator: T,currentValue:T) => T;
const reduce = <T>(array: T[],initialValue: T, callback: ReduceFunction<T>): T => {
    let accumulator = initialValue;
    
    forEachFn(array, (element) => {
        accumulator = callback(accumulator, element);
    });

    return accumulator;
};

const intersection = (...arrays: number[][]): number[] => {
    if (arrays.length === 0) return [];

    return reduce(arrays.slice(1), arrays[0]!, (acc, currentArray) => {
        return acc.filter(element => currentArray.includes(element));
    });
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

