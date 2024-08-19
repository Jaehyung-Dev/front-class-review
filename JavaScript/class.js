// 1. Class declarations
class Person {
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const JH = new Person('JH', 99);
console.log(JH.name);
console.log(JH.age);
JH.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
        // 1-2.this.age가 메모리에 올려져있는 데이터를 읽어오는 것이 아니라 정의된 getter 호출 => 무한재귀발생
        // 2-2.= age; 즉 값을 할당할 때 메모리에 값을 할당하는 것이 아니라 setter를 호출 => 무한재귀발생
        // 재귀를 막기위해 일반적으로 getter와 setter의 변수명에 언더스코어(_)를 사용해 내부 프로퍼티 표시
    }

    // 1-1.age라는 getter를 정의하는 순간 
    get age() {
        return this._age;
    }

    // set은 값을 설정하기 때문에 value를 받아와야 한다.
    // 2-1.age라는 setter를 정의하는 순간 
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}
// 나이가 -1인 것은 말이 안되는데 => 이런 상황을 방지하기 위해 getter, setter를 사용
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateFiled);

// 4. Static properties and methods
// 들어오는 데이터에 상관없이 모든 인스턴스에서 공통적으로 사용되는 데이터나 함수에서 static을 이용해서 메모리 사용 감소
class Article {
    static name = 'JH';

    static printName() {
        console.log(Article.name);
    }
}

const article = new Article();
console.log(article.name); // undifined => static은 오브젝트 마다 값이 할당되는 것이 아니라 클래스 자체에 값이 할당
console.log(Article.name); // 클래스 자체에서 호출
Article.printName(); // 클래스 자체에서 호출

// 5.Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // override => 부모에서 정의된 함수를 입맛에 맞게 재선언
    getArea() {
        return (this.width * this.height) / 2;
    }

    // super => 재선언하면 부모의 메소드가 덮어지는데 부모의 메소드도 실행
    draw() {
        super.draw();
        console.log('new draw!!');
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf => 오브젝트가 해당 클래스를 이용해서 만들어졌는지 확인
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // true => js의 모든 Object는 Object 클래스를 상속