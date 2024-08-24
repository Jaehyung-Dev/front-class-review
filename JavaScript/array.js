'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍉'];
console.log(fruits);

// 3. Looping over an array
// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach: array에 들어있는 값 마다 callback함수를 실행 => value, index, array자체를 받을수 있다.
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// => forEach함수는 2가지 파라미터가 전달되는데 콜백함수와 thisArg(?는 optional로 선택적 매개변수를 의미)
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});

// 위의 함수는 익명함수로 화살표함수로 변경이 가능하다.
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});

// 한 줄인 경우 중괄호도 생략가능
fruits.forEach((fruit, index) => console.log(fruit, index));

console.clear();

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍒', '🍇');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍒', '🍇');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop, push는 기존에 있던 데이터를 건드리지 않고 새로운 데이터를 추가, 삭제
// shift, unshift는 기존에 있던 데이터들을 뒤쪽으로 옮기고 맨 앞에 새로운 데이터를 추가, 삭제

// splice: remove an item by index position
fruits.splice(1); // => deleteCount를 지정하지않으면 지정한 인덱스부터 모든 데이터가 삭제
console.log(fruits);
fruits.push('🍎', '🍉', '🍒', '🥭');

fruits.splice(1, 2);
console.log(fruits);

// splice로 데이터 삽입 => 데이터를 주면 삭제된 인덱스 기준으로 데이터가 삽입
fruits.splice(1, 1, '🍎', '🍉'); // deleteCount에 0을 주면 삭제하지 않고 데이터 삽입도 가능
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['🥝', '🍒'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('🥭'));
console.log(fruits.indexOf('🥝')); // 없으면 -1 리턴

// includes
console.log(fruits.includes('🍎'));
console.log(fruits.includes('🥝'));

// lastIndexOf
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // indexOf는 해당하는 첫번째 데이터의 인덱스 리턴
console.log(fruits.lastIndexOf('🍎')); // lastIndexOf는 해당하는 마지막 데이터의 인덱스 리턴