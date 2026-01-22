// Week 1


// Homework: Introduction to Node.js & Variables


// Instructions:

// 1. Create a file called homework.js.

// 2. Make 3 variables about yourself:

// · firstName (string)

// · favoriteNumber (number)

// · likesCoding (boolean)

// 3. Print them in a full sentence using template literals:

// console.log(`Hi, my name is ${firstName}, my favorite number is ${favoriteNumber}, and it is ${likesCoding} that I like coding.`);

// 4. Run the script in Node.js and take a screenshot of the output.

// 5. (Optional) Push the file to GitHub.

// 6. Complete the other challenges if you want the challenge.


// Write your code here:


// Paste your terminal output (screenshot):


// Extra practice:

// 1. Add two more variables:

// o birthYear (number)

// o currentYear (number)

// 2. Calculate your age using subtraction.

// 3. Print another sentence with your age:


// Advanced:


// 1. Make an array of your 3 foods.

// 2. Make an object called “student” that contains:

// a. Your name

// b. Favourite number

// c. likesCoding

// d. the array of foods

// 3. Print the whole object and also one of the properties.


//1st part
const firstName = "Xiaohui";
const favoriteNumber  = 8;
const likesCoding = true;


console.log(`Hi, my name is ${firstName}, my favourite number is ${favoriteNumber}, and it is ${likesCoding} that I like coding.`);


//2nd part
const birthYear = 1989;
const currentYear = 2026;
const age = currentYear - birthYear;


console.log(`I am ${age} years old.`);


//3rd part
let arr = ["noodles", "meatballs", "salad"];
let obj = {
   firstName,
   favoriteNumber,
   likesCoding,
   arr
};


console.log(obj);
console.log(typeof firstName);
