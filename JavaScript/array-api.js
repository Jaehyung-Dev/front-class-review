// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());
    console.log(fruits.join(' and '));
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(',', 2));
    console.log(fruits.split()); // 구분자를 전달하지 않으면 문자열 하나에 담긴다.
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
    console.log(array); // reverse를 사용하면 기존 배열 자체의 순서가 변경된다.
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2, 5)); // slice는 배열에서 원하는 부분만 리턴해서 받아올 때 사용
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    // find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    // Predicate: 입력을 받고 boolean을 반환하는 함수
    // find는 첫번째로 true가 나오면 해당하는 배열의 요소를 리턴하는 API
    console.log(students.find(function (student) {
        return student.score === 90;
    }));
  }
  
  // Q6. make an array of enrolled students
  {
    console.log(students.filter(function (student){
        return student.enrolled === true;
    }));

    // 화살표함수로 변형
    console.log(students.filter(student => student.enrolled === true));
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    // 배열 안 요소들을 다른 요소로 변환 => 아래처럼 score만 따로 추출하여 배열 생성
    console.log(students.map((student) => student.score)); 
    // 콜백함수로 전달되는 인자는 이해하기 쉬운 단어 사용 => value, item 등은 직관적이지 않기 때문.
    // 위의 students의 인자를 student로 받으니 직관적으로 이해하기 쉬워짐.
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    // some: 배열의 요소 중 하나라도 조건을 충족하면 true 리턴 => 배열의 요소 마다 조건을 만족하는지 확인
    console.log(students.some((student) => student.score < 50));

    // every: 배열의 모든 요소들이 조건을 충족하면 true 리턴 => 모든 배열이 조건을 만족하는지 확인
    console.log(students.every((student) => student.score < 50));
  }
  
  // Q9. compute students' average score
  {
    // reduce: 배열 안 모든 요소들의 값을 누적 => 함께 모아놓을 때 사용 
    // previousValue는 리턴한 값이 다음번 호출될 때 넘어가는 곳 => 리턴하는 값들이 순차적으로 전달됨
    console.log(students.reduce((prev, curr) => {
        console.log('-------------------------------------------------------------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0)); // 이렇게 initialValue 지정도 가능 => 0부터 시작
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    // API는 섞어서 호출 가능
    // map으로 score만 따로 빼서 새로운 배열을 만들고
    // filter로 50점 이상인 것만 배열로 만들고
    // join으로 string타입으로 변환하여 표출
    console.log(students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join());
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    console.log(students.map((student) => student.score)
    // sort는 a와 b(이전값, 현재값)가 전달되고 -값이 리턴이 되면 a의 값이 b의 값보다 작다고 간주되어 정렬이된다.
    .sort((a, b) => a - b)
    .join());
  }