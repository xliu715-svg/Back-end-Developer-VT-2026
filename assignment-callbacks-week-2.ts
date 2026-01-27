// Assignments (1–5: foundational, 6–10: more challenging) 

// 1) Hello Callback 

// Write a function that takes a callback and calls it with 'Hello from callback!'. 


type helloFromCallbackFunction = () => void;
const sayHello = (helloFromCallback: helloFromCallbackFunction) => {
    helloFromCallback();
};

const helloFromCallback = () => {
    console.log("Hello from callback!")
}

sayHello(helloFromCallback);

// 2) Delayed Greeting 

// Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'. 


type helloLaterFromCallbackFunction = () => void;
const sayHelloLater = (helloFromCallback: helloLaterFromCallbackFunction) => {
    setTimeout(() => {
        helloLaterFromCallback();
    }, 2000);
};

const helloLaterFromCallback = () => {
    console.log("Hi, I am late!")
}

sayHelloLater(helloLaterFromCallback);

// 3) Math Callback 

// Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback. 


type printResultFunction = (result: number) => void;

const mathCallback = (a: number, b: number, printResult: printResultFunction) => {
    const result = a + b;
    printResult(result);
};

const printResult = (result: number) => {
    console.log("The result is: ", result);
};

mathCallback(50, 60, printResult);

// 4) Uppercase Callback 

// Write a function that takes a string and a callback. The callback should return the string in uppercase. 

type uppCaseCallbackFunction = (text: string) => void;

const upperCase = (text: string, uppCaseCallback:uppCaseCallbackFunction) => {
    uppCaseCallback(text);
};

const uppCaseCallback = (text: string) => {
    console.log(text.toUpperCase());
}

upperCase("banana",uppCaseCallback);


// 5) Pizza Order 

// Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'. 


type orderStatusFunction = () => void;

const pizzaOrdering = (orderStatus: orderStatusFunction) => {
    console.log("I am ordering pizza...");
    setTimeout(() => {
        orderStatus();
    }, 3000);
};

const orderStatus = () => {
    console.log("Your pizza is ready!");
};

pizzaOrdering(orderStatus);


// 6) Multiple Messages 

// Make a function that takes a callback and calls it three times with different messages. 


type callBackMessageFunction = (message: string) => void;
const writeMessage = (callBackMessage: callBackMessageFunction) => {
    callBackMessage("message 1");
    callBackMessage("message 2");
    callBackMessage("message 3");
};

const callBackMessage = (message: string) => {
    console.log(message);
};

writeMessage(callBackMessage);


// 7) Download Simulation 

// Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. 


type downloadDataFunction = (url: string) => void;
const downloadSimulation = (url: string, downloadData: downloadDataFunction) => {
    setTimeout(()=>{
        downloadData(url);
    }, 2000);
};

const downloadData = (url: string) => {
    console.log(`Downloaded data from ${url}`);
};

downloadSimulation("http://example.com/file.text", downloadData);



// 8) Success and Error Callback 

// Make a function that takes two callbacks: one for success and one for error. Use Math.random() to decide which to call. 


type successCallbackFunction = () => void;
type errorCallbackFunction = () => void;

const messageCall = (successCallback: successCallbackFunction, errorCallback: errorCallbackFunction) => {
    const randomNumber:number = Math.random();
    console.log(randomNumber);
    if (randomNumber > 0.5) {
        return successCallback();
    } else {
        return errorCallback();
    };
};

const successCallback = () => {
    console.log("Yay it is a success!");
};

const errorCallback = () => {
    console.log("Oh no, there is an error!");
};

messageCall(successCallback, errorCallback);


// 9) Math with Different Operations 

// Write one function that can do addition, subtraction, multiplication, and division. It should take two numbers, an operation string, and a callback. 

type printResFunction = (result: number) => void;

const calculator = (operation: string, a:number, b: number, printRes: printResFunction) => {
    let result = 0;
    if (operation === "addition") {
        result = a + b;
    } else if (operation === "subtraction") {
        result = a - b;
    } else if (operation === "multiplication") {
        result = a * b;
    } else if (operation === "division") {
        result = a / b;
    }
    printRes(result);
};

const printRes = (result: number) => {
    console.log(result)
};

calculator("addition", 45, 55, printRes);


// 10) Chained Callbacks 

// Make three functions that each wait 1 second and then call the next callback, printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order. 

type callbackFunction = () => void;

const first = (callBack: callbackFunction) => {
    setTimeout(() => {
        console.log("Step 1 done");
        callBack();
    }, 1000);
};

const second = (callBack: callbackFunction) => {
    setTimeout(() => {
        console.log("Step 2 done");
        callBack();
    }, 1000);
};

const third = () => {
    setTimeout(() => {
        console.log("Step 3 done");
    }, 1000);
};


first(() => {
    second(() => {
        third();
    }
    );
}
);