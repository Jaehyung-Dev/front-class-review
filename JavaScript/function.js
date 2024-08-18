// Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing => 하나의 함수는 하나의 일만
// naming: doSomething, command, verb
// js에서 function은 object => 변수나 파라미터에 할당 가능 
function printLog(message){
    console.log(message);
}

printLog('Hello');

// Parameters
// primitive parameters: value가 전달
// object parameters: reference가 전달
function changeName(obj){
    // 매개변수 obj의 ref가 가리키는 name을 coder로 변경
    obj.name = 'coder';
}
const myName = {name: 'JH'};
changeName(myName);
console.log(myName);

// Default parameters (added in ES6)
// 파라미터가 없는 경우 기본값을 지정 
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// Rest parameters (added in ES6)
// 파라미터들을 배열형태로 받음
function printAll(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // 향상된 for문
    for(const arg of args){
        console.log(arg);
    }

    // forEach
    args.forEach((arg) => console.log(arg));
}
printAll('hello', 'world', 'hello', 'code');

// Return a value
// return이 없는 함수는 return undefined;상태
function sum(a, b){
    return a + b;
}
console.log(sum(1, 2));

// Early return, early exit
// bad
function upgradeUser(user) {
    if (user.pount > 10) {
        // upgrade logic...
    }
}

// good
// 조건이 아닌경우 빠르게 return문으로 함수를 끝내고, 조건인 경우만 로직이 실행되게끔
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // upgrade logic...
}

// First-class function
// functions are traeted like any other variable
// can be assigned as a value to variable => 변수 할당 가능
// can be passed as an argument to other functions => 파라미터로 전달 가능
// can be returned by another function => 리턴값으로 사용 가능

// Function expression
// function declaration: 일반적인 함수 선언(hoisted) => js엔진이 선언된 것을 제일 위로 올려주기때문
// function expression: 변수에 함수를 할당하는 것 => 호이스팅x
// 아래에서 함수를 선언함과 동시에 print라는 변수에 할당 
const print = function () { // 이렇게 함수에 이름이 없는 것을 anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love u') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('yes!');
};
// named function
// Function expression에서 name을 쓰는 이유는 디버깅시 디버깅 stacktrace에 함수이름이 나오게 하기 위함
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love u', printYes, printNo);

// Arrow function
// 화살표함수는 항상 이름이 없는 anonymous function
const simplePrint1 = function () {
    console.log('simplePrint!');
}
// 위 함수를 화살표함수로 => 한 줄인 경우 조건문 처럼 중괄호 없이 사용
const simplePrint2 = () => console.log('simplePrint!');

const add1 = function(a, b) {
    return a + b;
};
const add2 = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 호출 원래는 hello();를 사용해서 호출했어야 함
(function hello() {
    console.log('IIFE');
})();