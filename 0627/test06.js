// var와 ES6에서 추가된 let와의 차이
// let는 범위와 중복불허
if(true){
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue);
console.log(blockScopeValue);




