//ES6 이전에는 모듈기능이 없어 네임스페이스 패턴을 통해 모듈을 정의
var namespaceA = (function(){
    var privateVariable = '비공개 변수';
    return{
        publicApi : function(){
            console.log(privateVariable + '를 접근할 수 있음');

        }
    }
})();

namespaceA.publicApi();