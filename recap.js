// const money = 50;
// const rich = money + 100;
// // console.log(rich)

// const numbers = [23, 45, 56, 67, 78];
// numbers[2] = 55;
// // console.log(numbers)
// let sum = 0;
// for(let i = 0; i < 10; i++){
//     const num = i;
//     sum = sum + num;
// }
// console.log(sum)

// default parameter---->

// function add(num1=100, num2=5, num3){
//     const result = num1 + num2 + num3;
//     console.log(num1, num2, num3, result);
//     return result;
// }
// const sum = add();
// // console.log(sum)

// function fullName(first, last='hasan'){
//     const full = first + " " + last;
//     return full;
// }
// console.log(fullName('jahid'))

// string explore---->

// const first = 'jaan';
// const last = 'pakhi';

// const name = first + ' ' + last;

// console.log(name)

// const a = 20;
// const b = 10;
// const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
// console.log(result);

// const numbers = [34, 56, 567,];
// const friends = {name: 'jahid hasan', age: 21}
// const math = `The sum of ${numbers[1]} and ${friends.age} is ${numbers[1] + friends.age}`;
// console.log(math);

// const challenge = `jahid tumake
// chena chena lage
// tmar sathe ek match khelbo`;
// console.log(challenge)

// Arrow function---->

// function add(a, b){
//     const result = a+ b;
//     return result;
// }
// const sum = add(5, 10);
// console.log(sum)

// function declaration
// function add(a, b){
   
//     return a + b;
// }
// const sum = add(5, 10);
// console.log(sum)
// function expression
// const add2 = function(a, b){
//     return a + b;
// }

// // arrow function
// const add3 = (a, b) => a + b;
// const add4 = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;

// const sum = add4(20, 20, 10, 10);
// console.log(sum)

// More arrow function---->

// const getAge = (info) => info.boyos;
// const details = {name: 'jahid', age: 24, boyos: 45};
// const age = getAge(details);
// console.log(age)

// const double = num => num * 5;
// console.log(double(5));

// const getPI = () => Math.PI * 2;
// console.log(getPI());

// const doMath = (x, y, z) => {
//     const sum = x + y + z;
//     const multi = x * y * z;
//     const result = sum + multi;
//     return result;
// }
// console.log(doMath(5, 10, 5))


// spread---->

// const max = Math.max(4, 56, 67, 7, 8, 78);

// const numbers = [23, 45, 56, 67, 87, 89, 89, 90];
// const arrayMax = Math.max(...numbers)
// console.log(arrayMax)


// const friends = [23, 45, 56, 67, 87, 89, 89, 90];
// const bondhu = friends;
// const dosto = [...friends]
// friends.push(120);

// console.log(dosto)
// console.log(friends)

// // advanced

// const songkha = [...friends, 800];
// console.log(songkha)

// let name = ['jahid', 'hasan', 'kamrul', 'mehedi'];
// console.log(...name)

// let numbers = [ 2, 3];
// let allNumbers = [1, ...numbers, 4, 5, 6];
// console.log(allNumbers)

// destructuring---->

// const actor = {
//     name: 'jahid',
//     age: 21,
//     phone: '0192833734',
//     money: 32435456

// }

// const phone = actor.phone;
// const {age: boyos} = actor
// console.log(phone);
// console.log(boyos)

// array destructuring.
// const numbers = [34, 56];
// const [first, second] = numbers;
// console.log(first, second)

// // 
// function doubleThem(a, b){
//     return [a*2, b*2];
// }
// const [prothom, dithiyo] = doubleThem(6, 9);
// console.log(prothom, dithiyo)

// const user ={
//     name: 'Rowan Atkinson',
//     propularity: 'Mr. Bean',
//     age: 34,

// }
// const {propularity: famous, name, age} = user;
// console.log(famous, name, age)

// const user ={
//     name: 'Rowan Atkinson',
//     propularity: 'Mr. Bean',
//     age: 34,

// }

// const name = user.name;
// console.log(name)


// let [num1,, num3] = [1, 2, 3];
// console.log(num1, num3)



// const glass = {
//         name: 'glass',
//         color: 'golden',
//         price: 12,
//         isCleaned: true
// }
// console.log(glass)
// const key = Object.keys(glass);
// const value = Object.values(glass);
// const pair = Object.entries(glass)

// console.log(key);
// console.log(value);
// console.log(pair);


// const {isCleaned, ...rest} = glass;
// console.log(rest)
// Object.freeze(glass);
// Object.seal(glass);
// glass.source = 'canada';
// console.log(glass)
// delete glass.name;
// console.log(glass);
// glass.price = 500;
// console.log(glass)
// delete glass.isCleaned;
// console.log(glass);


// const glass = {
//         name: 'glass',
//         color: 'golden',
//         price: 12,
//         isCleaned: true
// }

// for(const key in glass){
//     const value = glass[key]
//     // console.log(key, value)
// }

// const keys = Object.keys(glass);
// console.log(keys);

// for(const key of keys){
//     const value = glass[key]
//     console.log(key, value)
// }


// Again reply module work---->

// const a = 10;
// const b = 10;

// const sum = 'the number of sum is:' + (a + b);
// const result = 'the sum of ' + a + ' and ' + b + ' is ' + (a + b);
// const result = `the sum of ${a} and ${b} is ${a + b}`
// console.log(result)

// const sentence = `Hello jahid 
// how are you 
// tmake paile marbo bujle`;
// console.log(sentence)

// const arraw = () => num * 3;
// console.log(arraw(5))

// function expression-->
// const numbers = function(a, b){
//     return a / b;
// }
// console.log(numbers(50, 5))

// const getBook = info => info.book;
// const details = {name: 'jahid', year: 2020, book: 'bangla'};
// const book = getBook(details);
// console.log(book)

// const getPI = () => Math.random;
// console.log(getPI())