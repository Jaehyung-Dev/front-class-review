// 브라우저 위에서 동작하는 웹사이트나 어플리케이션같은 client가 어떻게 server와 통신할 수 있는지
// 정의한 것이 HTTP : Hypertext Transfer Protocal
// 여기서 Hypertext는 하이퍼링크뿐만 아니라 전반적인 리소스들(문서, 이미지파일)

// AJAX: Asynchronous JavaScript And XML => 웹페이지에서 서버와 동적으로 데이터를 주고받는 기술
// 대표적인 예: XHR(XML Http Request) Object => 브라우저 API에서 제공하는 오브젝트로 간단하게 서버에게 데이터를 요청하고 받아올 수 있다.

// xml: HTML과 같은 markup언어
// xml은 불필요한 태그들이 너무 많이 들어가서 파일 사이즈가 커지고 가독성도 좋지않아 잘 사용되지 않음
// => JSON으로 대체하여 사용

// 서버와 통신은 XMLHttpRequest객체를 사용하거나 fetch() API를 사용

// JSON => 프로그램언어나 플랫폼에 관계없이 사용가능
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true); // boolean타입의 primitive타입도 JSON으로 변환 가능
console.log(json);

// 배열을 JSON으로 변환
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// Object를 JSON으로 변환
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // Symbol: Symbol("id"), // Symbol같은 JS에만 있는 데이터형태 JSON에 포함되지 않음
    jump: () => {
        console.log(`${rabbit.name} can jump!`);
    }, // 함수(jump)는 obj의 데이터가 아니기 때문에 함수는 JSON에 포함되지 않음
};

json = JSON.stringify(rabbit);
console.log(json);

// rabbit obj에서 특정 속성값만 JSON 형태로
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

// JSON의 replacer 콜백함수를 이용해 JSON 변환 데이터 통제하기
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // key에 name이 있다면 value를 toggi로 바꾸고 아니면 value 그대로 
    return key === 'name' ? 'toggi' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump(); 
//obj.jump(); // 함수는 serialize될 때 포함되지않아 obj에는 jump 함수가 없다

console.log(rabbit.birthDate.getDate());
// JSON으로 변환할때 date => String 형태로 변환되었고, obj의 birthDate는 date형태가 아니라
// String이기 때문에 getDate()함수를 사용할 수 없어 에러가 발생한다.
// console.log(obj.birthDate.getDate()); 
console.log(obj.birthDate); 

// parse reviver 콜백함수 전달
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // key가 birthDate라면 value형태의 Date타입 객체를 만들어 리턴하고 아니면 value 그대로 
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate());

// 결론: json에는 stringify와 parse 함수가 있고 콜백함수를 전달하여 더 세밀하게 JSON을 통제가능.