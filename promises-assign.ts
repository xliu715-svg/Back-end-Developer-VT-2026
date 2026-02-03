//Part 1: create my own promise
const flipCoin = new Promise((resolve, reject) => {
  //Logic if success
  let result = Math.random();

  if (result > 0.5) {
    resolve("You win!");
  } else {
    reject("You lost!");
  }
});

flipCoin
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//Part 2: Fetching Data from an API

type DadJokeResponse = {
  id: string;
  joke: string;
};

const fetchJoke = () => {
  const promise: Promise<void> = fetch(`https://icanhazdadjoke.com/`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json() as Promise<DadJokeResponse>;
    })
    .then((data: DadJokeResponse) => {
      const joke: string = data.joke;
      console.log(`Dad joke (ID: ${data.id}): ${data.joke}`);
    })
    .catch((error: unknown) => {
      console.error("Error fetching joke: ", error);
    });
};

fetchJoke();


//Mix them together
flipCoin
.then((message) => {
    console.log(message);
    return fetchJoke();
})
.catch((error) => {
    console.log(error);
});
