const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];



/*var email = person.email;
console.log(email);
var password = person.password;
console.log(password);
var firstAnimal = animals[0];
console.log(firstAnimal);
var secondAnimal = animals[1];
console.log(secondAnimal);
var thirdAnimal = animals[2];
console.log(thirdAnimal);

const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;
*/

const password = '12345';
const { password: hashedPassword } = person;

console.log(hashedPassword);