// async & await

// 1. async: 함수를 promise형태로 만들어준다.
async function fetchUser() { // 2.fetchUser함수가 실행되고
    // do network request in 10 secs... 
    return 'JH'; // 3.위의 request가 끝난 뒤에 해당하는 값을 리턴
}

const user = fetchUser(); // 1.fetchUser함수가 호출되면
// 이렇게 동기적으로 시간이 오래 걸리는 코드를 짜놓으면 이후 코드 대기 발생 
// ㄴ> 함수에 promise를 만들거나 async 키워드 사용
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return '🍎';
}

// 아래와 똑같은 코드 => await가 더 가독성이 좋다
async function getBanana(){
    await delay(1000);
    return '🍌';
}

// 위와 똑같은 코드 => 체이닝기법
// function getBanana() {
//     return delay(1000)
//     .then(() => '🍌');
// }

// 아래처럼 짜면 코드가 복잡해짐
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banbana => `${apple} + ${banbana}`);
//     });
// }

// 위 코드 async 활용
// async function pickFruits() {
//     const apple = await getApple();
//     const banbana = await getBanana();
//     return `${apple} + ${banbana}`;
// }

// 위 코드 비동기처리 => 기존에는 getApple이 진행된 후에 getBanana가 실행
// => promise를 만들어 getApple이 실행되는동안 getBanana도 실행
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 위처럼 코드가 병렬적 실행이 가능한 경우(getApple과 getBanana사이 연관성이 없음)유용한 APIs
// 3. useful Promise APIs
function pickAllFruits() {
    // all: Promise배열을 전달하게되면 모든 Promise들을 다 받을 때까지 병렬적으로 모아준다
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    // race: 먼저 수행되어 전달되는 값을 가진다.
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);