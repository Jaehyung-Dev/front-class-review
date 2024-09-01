// Callback Hell example
// 콜백지옥의 문제점: 가독성이 떨어짐 => 에러발생시 디버깅, 유지보수 어려움
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(
                    (id === 'JH' && password === '1234') ||
                    (id === 'JH' && password === '5678')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'JH') {
                    resolve({name: 'JH', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter ur id');
const password = prompt('enter ur password');

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, u have a ${user.role} role`))
    .catch(console.log);
