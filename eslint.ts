//Task 1
const greet = (firstName: string) => {
  return `Hello ${firstName}`;
};
console.log(greet("Student"));

//Task 2
const double = (n: number) => {
  return n * 2;
};
console.log(`The result is ${double(5)}`);

//Task 3
const isEven = (num: number) => {
  return num % 2 === 0;
};

console.log(`It is ${isEven(5)} that is an even number.`);

//Task 4
const square = (x: number) => {
  return x * x;
};

console.log(`The result is ${square(4)}`);

//Task 5
//Put year as your birth year
const getAge = (year: number) => {
  //The function calculates your age by using 2026 subtracted your birth year
  return 2026 - year;
};

console.log(`Your age is ${getAge(1989)}`);

//Task 6
const prices = [10, 20, 30];
let total = 0;
prices.forEach((p) => {
  return (total += p);
});

console.log(`The total price is ${total}`);

//Task 7
const user = { name: "John" };
const sayHi = () => {
  return console.log(`Hi ${user.name}`);
};

sayHi();

//Task 8
const colors = ["red", "blue"];
colors.forEach((c) => {
  return console.log(`Color: ${c}`);
});

//Task 9
const items = [1, 2, 3];
const doubled = items.map((i) => {
  return i * 2;
});

console.log(`The results are ${doubled}`);

//Task 10
const checkAuth = (user: { isAdmin: boolean }) => {
  return user.isAdmin ? true : false;
};
console.log(checkAuth({ isAdmin: true }));
console.log(checkAuth({ isAdmin: false }));

//Task 11
// Import { readFile } from "fs/promises";

// Const read = async (path: string) => {
//   Try {
//     Const data = await readFile(path, "utf8");
//     Console.log(data);
//     Return data;
//   } catch (error) {
//     Console.log(`Error: ${error}`);
//   }
// };
// Read("file.text");

//Task 12
const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
};

getData("https://api.example.com/data");

//Task 13
const processData = (data: number[]) => {
  return data
    .filter((x) => {
      return x > 10;
    })
    .map((x) => {
      return x * 2;
    });
};

const numbers = [5, 12, 8, 15, 20, 3];
const result = processData(numbers);
console.log(`Result: ${result}`); // Result: 24,30,40

//Task 14
const timer = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const testTimer = async () => {
  console.log("Timer starts...");
  await timer(2000);
  console.log("Timer finishes after 2 seconds!");
};

testTimer();

//Task 15
const logErr = (m: string) => {
  return console.error(`Error: ${m}`);
};
logErr("connection failed.");
