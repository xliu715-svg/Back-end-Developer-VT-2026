//Part 1: create my own promise
const flipCoin2 = () => {
  return new Promise((resolve, reject) => {
  //Logic if success
  let result = Math.random();

  if (result > 0.5) {
    resolve("You win!");
  } else {
    reject("You lost!");
  }
})};

const flipCoinResult = async () => {
  try {
    const result = await flipCoin2();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

flipCoinResult();


//Part 2: Fetching Data from an API

const fetchJoke2 = async () => {
  try {
    const response = await fetch(`https://icanhazdadjoke.com/`, {
     headers: {
       Accept: "application/json",
     },
   })
   const data = await response.json();
   console.log(`Dad joke (ID: ${data.id}): ${data.joke}`);
  } catch (error) {
    console.log("Error fetching joke: " + error);
  }
};

fetchJoke2();



//Mix them together

const getJokeAfterCoinFlip = async () => {
  try {
    const result = await flipCoin2();
    console.log(result);
    const response = await fetch(`https://icanhazdadjoke.com/`, {
     headers: {
       Accept: "application/json",
     },
   })
   const data = await response.json();
   console.log(`Dad joke (ID: ${data.id}): ${data.joke}`);
  } catch (error) {
    console.log(error);
  }
};
getJokeAfterCoinFlip();

