import readline from "readline";

//Store to-do in an array

type Todo = {
  id: number;
  text: string;
};

let todos: Todo[] = [];

//Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//(C)reate a new to-do

const addTodo = () => {
  rl.question("Enter Todo: ", (text: string) => {
    if (text.trim() === "") {
      console.log("Your todo cannot be empty!\n");
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
      };
      todos.push(newTodo);
      console.log("Todo is added successfully!");
    }
    showMenu();
  });
};

/*
//Ask a question and handle the response
rl.question('What is your name? ',(name) => {
    console.log(`Hello, ${name}!`);

    //Ask follow-up question
    rl.question('How old are you? ', (age) => {
        console.log(`In 5 years, you'll be ${parseInt(age) + 5} years old`);

        //Close the interface when done
        rl.close();
    })
})
*/

//(R)ead all todos
const readTodos = (): void => {
  if (todos.length === 0) {
    console.log("You have no dotos!");
  } else {
    console.log("You have the following todos: \n");
    todos.forEach((todo: Todo) => {
      console.log(`${todo.id} - ${todo.text}`);
    });
  }
  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

//(U)pdate a todo
const updateTodos = () => {
  rl.question("Which todo would you like to update? ", (input: string) => {
    const id: number = parseInt(input);
    //Find the todo to update

    const todoToUpdate = todos.find((todo: Todo) => todo.id === id);
    if (!todoToUpdate) {
      console.log("Task not found");
      showMenu();
    } else {
      //show the current todo
      console.log(`Current todo: ${todoToUpdate.text}`);

      //ask for new text
      rl.question("Enter new todo text: ", (newText: string) => {
        if (newText.trim() === "") {
          console.log("Your todo cannot be empty!\n");
        } else {
          todoToUpdate.text = newText.trim();
          console.log("Todo updated successfully!");
        }
        process.stdout.write("> ");
        rl.question("", (command: string) => {
          handleCommand(command);
        });
      });
    }
  });
};

//(D)elete a todo
const deleteTodo = () => {
  rl.question("Which todo would you like to delete? ", (input: string) => {
    const id: number = parseInt(input);

    const updatedTodos: Todo[] = todos.filter((todo: Todo) => todo.id !== id);
    if (updatedTodos.length === todos.length) {
      console.log("Task not found");
    } else {
      todos = updatedTodos;
      console.log("Todo removed successfully!");
    }
    process.stdout.write("> ");
    rl.question("", (command: string) => {
      handleCommand(command);
    });
  });
};

//Handle command logic

const handleCommand = (command: string): void => {
  switch (command.trim().toLowerCase()) {
    case "add":
      addTodo();
      break;
    case "read":
      readTodos();
      break;
    case "delete":
      deleteTodo();
      break;
    case "update":
      updateTodos();
      break;
    case "exit":
      console.log("Goodbye!");
      rl.close();
      break;
    default:
      console.log("Unknown command \n");
      showMenu();
  }
};

//Show meny with handle commands
const showMenu = (): void => {
  console.clear();
  console.log("\n === Todo List App ===");
  console.log("Commands: add, read, update, delete, exit \n");
  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};
//Show the meny on startup
showMenu();
