const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
    let obj = {};
    obj.name = name;
    obj.greetings = function () {
        return `Hello, this is ${this.name}`;
    };
    return obj;
}
/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1");
let person2 = createNewPerson("P2");
output.textContent = person1.greetings();

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greetings = function () {
        return `Hello, this is ${this.name.firstName}`;
    };
}
/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person3 = new Person("P3", 90, "Female", ["I1", "I2", "I3"]);
/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();
car.brand = "Honda";
car.model = "Civic";

/* STEP 4b: Once 'car' is created, add various properties and methods… */

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
console.log(anotherCar.brand);

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
function Hamburger(bun, garnishes, cheeses, sauces, patties) {
    this.bun = bun;
    this.garnishes = [...garnishes];
    this.cheeses = [...cheeses];
    this.sauces = [...sauces];
    this.patties = [...patties];
    this.printInfo = function () {
        return "This burger has a " + this.bun + " bun, " + this.garnishes.length + " garnish/garnishes including " + this.garnishes.toString() + ". This burger has " + this.cheeses.length + " cheeses including " + this.cheeses.toString() + ". This burger has " + this.sauces.length + " sauces including " + this.sauces.toString() + ". Finally, this burger has " + this.patties.length + " patty/patties including " + this.patties.toString() + ".";
    };
}

let burger = new Hamburger("pretzel", ["cucumber"], ["Mozzarella", "Swiss"], ["Mayo", "Chipotle", "Ketchup", "Mustard"], ["Chicken", "Beef"]);
console.log(burger.printInfo());


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS