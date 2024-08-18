// 글로벌 변수들은 어플리케이션이 실행되는 순간부터 끝까지 메모리에 탑재 -> 최소한으로 사용
// 가능하면 클래스나 함수 등의 필요한 블록에서만 정의해서 지역변수로 사용하는 것이 좋다. 
let globalName = 'global name';
{
    let name = 'name';
}

// var hoisting (move declaration from bottom to top)
// 호이스팅: 끌어올려주다라는 의미로 선언한 위치와 상관없이 선언을 최상단으로 끌어올리는 것
age = 4;
var age;

// let => rw(read/write): 메모리에 읽고쓰기 가능
// constant => r(readOnly): 읽기만 가능
// security: 해커가 값을 변경하는 것을 방지할 수 있다  
// thread safety: 어플리케이션이 실행되면 프로세스가 할당되고 프로세스 안에서 다양한 쓰레드가 실행되며
// 어플리케이션이 빠르게 동작할수 있게 해주는데 이때 쓰레드들이 동시에 변수의 값에 접근하고 값을 변경할 수 있어 위험하다
// reduce human mistakes: 변경하지 않아야하는 값을 실수로 변경하는 것을 방지
const daysInWeek = 7;


// Variable types
// primitive(single item) => 더이상 작은단위로 나눠질 수 없는 제일 작은 타입: number, String, boolean, null, undefined, symbol
// object, box container => single item을 묶어서 한 단위 또는 한 박스로 관리할 수 있게 해주는 것
// function, first-class function 
// => function도 변수에 데이터 할당이 가능하고 함수의 파라미터로 전달할 수도 있으며 리턴 타입으로 function을 사용 가능

// 메모리 저장 방식
// primitive type 메모리 저장 방식: 값 자체가 메모리에 저장
let name1 = JH; // name1이 가리킨 곳에 JH가 메모리에 저장
// object type 메모리 저장 방식: object는 먼저 ref(실제 object가 담긴 메모리)를 가리키고 
const name2 = { 
    name:"JH",
    age:20
} 
// name2가 가리킨 곳에 ref, ref가 실제로 오브젝트 값이 있는 메모리를 가리킴  
// name2가 가리킨 포인터만 잠겨서 name2가 다른 오브젝트로 변경이 불가능하지만
// 실제 오브젝트 값(name, age)은 계속 변경이 가능 


/*primitive 타입들*/

// js에서는 숫자는 정수, 실수 구분없이 number 타입
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt => 숫자 뒤에 n
const bigInt = 1234567890123456789012345678901234567890n; // -2^53 ~ 2^53(js에서 number의 범위)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)

// String => js에서는 char와 String을 구분하지 않는다.
const char = 'c';
const world = 'world';
const helloWorld = 'hello ' + world;
console.log(`value: ${helloWorld}, type:${typeof helloWorld}`);
const n = 'new';
// template literals ${}
console.log(`${n} ${helloWorld}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// null => 값이 없다는 것을 지정(null로 값이 할당된 것)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined => 선언은 되었지만 값이 없는 것(값이 비었는지 아닌지 정해지지 않은 상태)
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol => map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 실행되는 코드에서 우선순위를
// 주고싶은 경우에 고유한 식별자가 필요하여 사용 
// String을 식별자로 사용하면 안되는 이유: String은 다른 모듈이나 파일에서 동일한 식별자로 간주된다
// symbol은 동일한 String으로 작성했어도 다른 식별자로 처리
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

// String이 같으면 같은 symbol로 만들고 싶다면 Symbol.for사용 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2); //true

// symbol은 그냥 출력하면 오류 발생 .description을 통해 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Dynamic typing: dynamically typed language 
// js는 선언할 때 타입을 선언하지않고 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경된다.
let text = 'hello';
console.log(text.charAt(0)); // h값을 예상하고 text의 0번 인덱스를 사용
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 7이라는 문자열에 5를 더한다고 생각하여 5를 문자열로 변환
console.log(`value: ${text}, type: ${typeof text}`); // 75, String
text = '8' / '2'; // 나누기 연산자와 String의 값이 숫자로 변환 가능하여 number타입으로 변환하여 나누기 계산
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
console.log(text.charAt(0)); // h값을 예상 => 타입이 number로 변환 => 에러발생