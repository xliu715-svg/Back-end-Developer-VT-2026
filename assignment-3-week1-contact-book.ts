interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = [];

//Function 1: addContact(contatct: Contact)

const addContact = (contact: Contact) => {
    contacts.push(contact);
    console.log("You have successfully added " + contact.name + " in the contact book.");
}

const newContact1 = {
    id: 1,
    name: "Xiaohui Liu",
    email: "xliu715@gmail.com"
};

const newContact2 = {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@gmail.com"
};

addContact(newContact1);

addContact(newContact2);

//Function 2 listContacts()
const listContacts = () => {
    contacts.forEach((contact) => {
        console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email ?? 'N/A'}, Phone: ${contact.phone ?? 'N/A'}, Tags: ${contact.tags ?? 'N/A'}`)})
                        //"ID: " + contact.id + ", Name: " + contact.name + ", Email: " + contact.email? + ", Phone: " + contact.phone ? contact.phone : "N/A");
};

listContacts();


//Function 3: findByName(name: string): Contact[] 
const findByName = (name: string) => {
    return contacts.filter(contact => contact.name === name)
};
const res = findByName("Jane Doe");
console.log(res);

//Function 4: removeById(id: number): boolean 
const removeById = (id: number): boolean=> {
    //find the index of the contact, for instance if Xiaohui has id 1, then the index should be 0
    const index = contacts.findIndex(contact => contact.id === id);
    //First, filter out all the contacts that are NOT the number I want to remove, we should keep them and return true in the end
    if (index !== -1) {
        contacts = contacts.filter(contact => contact.id !== id);
        console.log(`You have removed the contact with ID ${id}.`);
        return true;
    } else {
        console.log(`The contact with ID ${id} cannot be found.`);
        return false;
    }
    ;
};

removeById(5);



//Step 5 test your code

//1. add 3 contacts
const newContact3 = {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.j@gmail.com",
    phone: "555-0123",
    tags: ["work", "colleague"]
};

const newContact4 = {
    id: 4,
    name: "Michael Chen",
    email: "mchen@example.com",
    phone: "555-0456",
    tags: ["friend", "tech"]
};

const newContact5 = {
    id: 5,
    name: "Emma Williams",
    email: "emma.w@outlook.com",
    tags: ["family"]
};

addContact(newContact3);
addContact(newContact4);
addContact(newContact5);


//2. List all contacts 
listContacts();

//3. Search for one contact by name 
findByName("Sarah Johnson");

//4. Remove for one tact by id
removeById(4);

//5. LIst all contacts again
listContacts();