//Beginner Task 1 – Simple Function  Create a function called sayHello that prints "Hello from Node.js!" to the console. Call the function.  

const sayHello = () => {
    return "Hello from Node.js!"
};

console.log(sayHello());

// //Task 2 – Parameters  Write a function called welcomeUser that takes one parameter name and prints: Welcome, <name>! Call it with at least two different names.  
const welcomeUser = (name) => {
    return "Welcome, " + name + "!"
};

console.log(welcomeUser("Anna"));
console.log(welcomeUser("Bianca"));

// Task 3 – Multiple Parameters  Make a function called subtract(a, b) that prints the result of a - b. Call it with subtract(10, 3).  Paste the screenshot here:  
const subtract = (a, b) => {
    const result = a - b;
    return result
};

console.log(subtract(10,3));

//Intermediate Task 4 Return Value Write a function called square(number) that returns the number multiplied by itself. Save the result in a variable and console.log it.  
const square = (number) => {
    const result = number * number
    return result
};

console.log(square(3));


//Task 5 – Profile Function Create a function called profile(name, age, likesCoding) that returns a sentence like: "Hi, I’m Sam, I am 25 years old, and it is true that I like coding." Test it with your own details.  
const profile = (name, age, likesCoding) => {
    return "Hi, I'm " + name + ", I am " + age + " years old, and it is " + likesCoding + " that I like coding."
};

console.log(profile("Xiaohui", 36, true));

//Task 6 – Default Parameters Make a function called greetWithTime(name, timeOfDay = "morning") that returns: "Good <timeOfDay>, <name>!" Call it once with both parameters, and once with only name. 
const greetWithTime = (name, timeOfDay) => {
    return "Good " + timeOfDay + ", " + name + "!"
};

console.log(greetWithTime("Xiaohui", "morning"));
console.log(greetWithTime("Xiaohui"));

//Advanced  Task 7 – Calculator Function  Create a function called calculator(a, b, operator) that returns the result of:  

const calculator = (a, b, operator) => {
    if (operator === "add") {
        return a + b;
    } else if (operator === "subtract") {
        return a - b;
    } else if (operator === "multiply") {
        return a * b;
    } else if (operator === "divide") {
        return a / b;
    }
};
console.log(calculator(6, 3, "divide"));
console.log(calculator(6, 3, "multiply"));
console.log(calculator(6, 3, "subtract"));
console.log(calculator(6, 3, "add"));


//Task 8
const square = (num) => num * num;
console.log(square(5));


//Task 9
const isAdultAge = (age) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const profile = (name, age, likesCoding) => {
    const isAdult = isAdultAge(age);
    return "Hi, I'm " + name + ", I am " + age + " years old, and it is " + likesCoding + " that I like coding. It is " + isAdult + " that I am an adult."
};

console.log(profile("Xiaohui", 36, true));
