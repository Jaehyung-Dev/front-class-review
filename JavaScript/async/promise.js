'use strict';

// Promise is a JavaScript object for asynchronous operation
// 비동기적인 것을 사용할 때 콜백함수 대신 유용하게 사용가능
// state: pending -> fulfiled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
// Promise는 만들어진 순간 excute 콜백함수가 바로 실행된다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    // 네트워크에서 데이터를 받아오거나 파일에서 큰 데이터를 읽는 것은 시간이 많이 걸린다.
    // 만약 이런 heavy work를 동기적으로 하게되면 처리가 끝날때까지 다음 코드가 실행되지 않는다.
    // 그래서 시간이 많이 걸리는 일들은 비동기적 처리를 하는것이 좋다.
    console.log('doing something...');
    setTimeout(() => {
        // resolve('사용자이름: JH');
        // Error: js에서 제공하는 오브젝트로 에러를 나타낼 때 사용
        reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers: then, catch, finally
promise.then((value) => {
    console.log(value);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
// then은 값뿐만아니라 또다른 Promise도 전달할 수 있다.
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
});

const getEgg = hen => new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    // 
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});

const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
    // .then(hen => getEgg(hen)) // 아래 문장과 같음
    .then(getEgg) // 위의 문장과 같음
    .catch(error => {
        return '💰';
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);