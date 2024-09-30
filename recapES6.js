// string class ------->

// const num1 = 20;
// const num2 = 20;
// const add = `The number of sum ${num1} and ${num2} is: ${num1 + num2}`;
// console.log(add)

// const sentence = `My name is jahid hasan.
// I am live in Bangladesh.
// My distric cumilla and village muradnagar.
// My collage name cumilla governmet collage.`;
// console.log(sentence)


// Arrow function --------->

// const add = function(a, b){
//     return a + b;
// }
// console.log(add(10, 20))



// const add = (a, b) => a * b;
// console.log(add(20, 30));

// const add = a => a * a;
// console.log(add(5))

// const myName = (a) => a * a;
// console.log(myName('2'))

// const getPI = () => Math.PI;
// console.log(getPI())

// const doMath = (a, b, c) => {
//     const sum = a + b + c;
//     const multiply = a * b * 3;
//     const result = sum + multiply;
//     return result;
// }
// console.log(doMath(5, 10, 15))

// spread ---------------->

// const max = Math.max(4, 6, 7, 8, 9, 45, 67, 89);
// const numbers = [4, 6, 7, 8, 9, 45, 67, 89];
// const arrayMax = Math.max(...numbers);
// console.log(...numbers)
// console.log(arrayMax)

// const nums = [34, 45, 65, 76];
// const nums2 = nums;

// const nums3 = [...nums];
// nums.push(100);
// console.log(nums3)
// console.log(nums);


// const numbers = [34, 54, 67, 89, 23];
// const num = [...numbers];
// const numbs = numbers;
// numbers.push(100)
// console.log(numbs)
// console.log(numbers);
// console.log(num);


// let numbers = [4, 5, 6, 7];
// let allNumbers = [1, 2, 3, ...numbers, 8, 9, 10];
// console.log(allNumbers)

// let sentence = ['My name is'];
// let fullSentence = `${sentence} JAHID HASAN`;
// console.log(fullSentence)


// destructuring---------->

// const actor = {
//     name: 'jahid hasan',
//     phone: '34656765768',
//     money: 1000,
//     age:45
// }
// // const phone = actor.phone;
// // console.log(phone)
// // console.log(phone)
// // console.log(phone)

// const {phone, age, money: tk} = actor;
// // const {money} = actor;
// console.log(phone, age, tk)
// // console.log(phone)

// function square(a, b){
//     return[a*a, b*b];
// }
// console.log(square(5, 10))

// let num1 = 1;
// let num2 = 2;

// [num1, num2] = [num2, num1];
// console.log(num1, num2)

// function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32));