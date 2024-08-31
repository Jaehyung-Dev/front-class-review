'use strict';

// JavaScript is synchronous
// 호이스팅 된 이후부터 코드가 작성된 순서에 맞게 동기적으로 실행된다.
console.log(1);

// 브라우저 API를 만나면 브라우저에 먼저 요청을 보낸다 => 응답을 기다리지 않고 다음 코드로 넘어감
setTimeout(function() {
    console.log(2);
}, 1000);
console.log(3);

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
// 콜백지옥의 문제점: 가독성이 떨어짐 => 에러발생시 디버깅, 유지보수 어려움
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'JH' && password === '1234') ||
                (id === 'JH' && password === '5678')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'JH') {
                onSuccess({name: 'JH', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter ur id');
const password = prompt('enter ur password');
userStorage.loginUser(
    id, 
    password, 
    user => {
    userStorage.getRoles(
        user, 
        userWithRole => {
            alert(`Hello ${userWithRole.name}, u have a ${userWithRole.role} role`);
        }, 
        error => {
            console.log(error);
        }
    );
},
error => {
    console.log(error);
});