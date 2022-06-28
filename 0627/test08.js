// 클로저 이해하기
// increase 함수와 getCount 함수는 createCounterCourse 실행 컨텍스트의
// 렉시컬 환경을 기억하고 있는 클로저가 됨.
function createCounterCourse(){
    let count = 0;
    return{
        increase : function(){
            count++;
        },
        getCount: function(){
            return count;
        }  
    };
}
const counter1 = createCounterCourse();
const counter2 = createCounterCourse();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());