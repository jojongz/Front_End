// 배열의 특정 조건을 기준으로 필터링
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterdeTwo = arr.filter(a => {
    console.log(`현재 위치의 값은 ${a} 입니다.`);
    return a % 2 == 0;
});
console.log(filterdeTwo)    // 2의 배수만 출력

const filterThree = arr.filter( a => a % 3 == 0)
console.log(filterThree)    // 3의 배수만 출력