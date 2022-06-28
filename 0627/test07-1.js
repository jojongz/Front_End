// const의 정삭적인 실행 예제
// 객체 내부의 상대만 변경 할 수 있음.


const CONST_USER = {name: 'jay', age:30};
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name:'bbo'};

const myName = 'kim';
myName = 'Lee';



















