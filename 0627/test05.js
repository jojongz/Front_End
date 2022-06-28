// 호이스팅 (끌어올리기) - 함수를 선언하기 전에 호출이 가능
// 일반적으로는 함수를 선언후 호출하지만 호출후 선언이 가능한 것.
hello();
function hello(){
    console.log('안녕하세요');
}

// hello2();  이와 같은 경우에는 호출을 반드시 함수 아래에서 해야 함.
let hello2 = function(){
    console.log('안녕하세요');
}
hello2();