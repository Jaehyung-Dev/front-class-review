// Objcets
// object = { key : value}; => obj는 key와 value의 집합체 

// 1.Literals and properties
const name = 'JH';
const age = '20';
function print(name, age) {
    console.log(name);
    console.log(age);
}
print(name, age);

// Object로 관리하는 것이 훨씬 편하다.
const JH = { name: 'JH', age: 20};
function printObj(person) {
    console.log(person.name);
    console.log(person.age);
}
printObj(JH);

// Object 만드는 방식 2가지
// 'object literal' syntax 문법
const obj1 = {}; // js에서는 class가 없어도 {}를 이용하여 obj를 생성가능
// 'object constructor' syntax 문법
const obj2 = new Object(); // obj를 new 키워드를 사용해 호출하면 obj에서 정의된 constructor가 호출

// js는 동적으로 타입이 Runtime때 동작(dynamically typed language)
JH.hasJob = false; // 다음과 같이 속성 추가 가능 => 유지보수가 힘들어 사용 자제

delete JH.hasJob;

// 2.Computed properties
// .은 코딩하는 순간 키에 해당하는 값을 받고 싶은 경우 사용
console.log(JH.name); 
// ['']은 정확히 어떤 키가 필요한지 모를 때 => 키 값이 runtime에서 결정될 때 사용
console.log(JH['name']); // key는 String 타입으로 지정해서 사용
console.log(JH[name]); // undifined
JH['hasJob'] = false;
console.log(JH.hasJob);

function printValue(obj, key) {
    console.log(obj.key); // undifined
    console.log(obj[key]);
}
printValue(JH, 'name');
printValue(JH, 'age');

// 3.Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = makePerson('JH', 20);
console.log(person2);

function makePerson(name, age) {
    return {
        // js의 shorthand 기능 때문에 key와 value의 이름이 동일하다면 key를 생략 가능
        // name: name,
        // age: age,
        name,
        age,
    };
}

// 4.Constructor Function
// 클래스가 없던 ES6 전까지 사용한 방식이다.
// 이렇게 다른계산을 하지 않고 순수하게 obj 생성하는 함수는 대문자 시작으로 함수를 만든다.
function Person(name, age) {
    // return문을 쓰지않고 클래스의 생성자처럼 this를 사용
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
} 
// 호출할 때도 클래스와 같이 new 키워드를 이용해 호출
const person3 = new Person('JH', 20);
console.log(person3);

// 5.in operator: property existence check (key in obj)
console.log('name' in JH); // 정의된 키 => true 리턴
console.log('gender' in JH); // 정의되지 않은 키 => false 리턴

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in JH) {
    console.log(key);
}

// for (value of iterable) => obj가 아니고 배열이나 리스트 등의 순차적인(iterable) 것의 value 
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for(value of array) {
    console.log(value);
}

// 7.cloning
const user = {name: 'JH', age: '20'};
const user2 = user; // user와 user2는 같은 ref를 가져 같은 값을 가리키게 된다.
user2.name = 'coder'; // 따라서 user2의 name을 변경하면 user의 name도 변경되는
console.log(user); // coder 출력

// old way => 하나씩 복사하여 같은 값을 갖게 만들기
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.log(user3);

// new way: Object.assign(dest, [obj1, obj2, obj3, ...])
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user); // => user4와 같은 방식(short)

// 
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
// 동일한 속성키가 있다면 뒤에있는 속성이 덮어써진다.
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // => fruit2의 blue 리턴
console.log(mixed.size);