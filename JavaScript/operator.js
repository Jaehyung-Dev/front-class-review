// String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:
''''
1 + 2 = ${1 + 2}`);

// Logical operators: ||, &&, !
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// or은 하나라도 true면 true이기 때문에 앞 조건 중 true가 나오면 뒤의 조건은 실행하지 않는다.
// => expresion이나 함수를 호출하는 조건을 제일 뒤에 배치하는 것이 효율적
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// and는 하나라도 false이면 false이기 때문에 앞 조건 중 false가 나오면 뒤의 조건은 실행하지 않는다.
// => expresion이나 함수를 호출하는 조건을 제일 뒤에 배치하는 것이 효율적
console.log(`and: ${value1 || value2 || check()}`);

// &&는 null체크로도 많이 쓰인다
// nullableObject && nullableObject.something
// => 앞의 조건 nullableObject가 null이면 뒤의 조건도 실행되지 않음
// 위의 코드를 풀어쓰기
// if(nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
    return true;
}

// object equality by reference
// 오브젝트는 메모리에 탑재될 때 레퍼런스 형태로 탑재
// name1과 name2는 데이터는 같으나 ref는 서로 다름 name3은 name1의 ref를 할당(같은 ref)
const name1 = {name: 'JH'};
const name2 = {name: 'JH'};
const name3 = name1
console.log(name1 == name2);
console.log(name1 === name2);
console.log(name1 === name3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// if에서 else if를 여러개 반복한다면 switch-case 사용 고려
// typeScript에서 정해져있는 타입을 검사하거나 enum을 검사할때 switch-case 사용