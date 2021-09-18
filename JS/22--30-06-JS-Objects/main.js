//const person = new Object();

const person = {
    name: 'John',
    age: 30,
    'Likes books': true
}

console.log(`Name of person: ${person.name}, age: ${person.age}`);

person.name = 'Vasya';

console.log(person.name);

person.isMarried = true;

console.log(person);
console.log(person.person);  //underfined

console.log(person['Likes books']);
console.log(person['age']);

let key = 'like books';
console.log(person[key]);  //person.key ->don't work
console.log(`Person like book: ${person[key]}`)

/*delete person.age;
console.log(person.age);
console.log(person);*/

/*let personKey = prompt('what you would like know about person?', 'name');

alert(person[personKey]);*/

const item = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },

    padding: {
        top: 10,
        bottom: 20,
        left: 50
    }
}

for (let key in item) {
    if (typeof (item[key]) === 'object') {
        for (let colors_key in item[key]) {
            console.log(`Properties '${colors_key}' has value ${item[key][colors_key]}`)
        }
    } else {
        console.log(`Properties '${key}' has value ${item[key]}`)
    }
}

console.log(item.colors.border) // item['colors']['border']

let salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900
}
