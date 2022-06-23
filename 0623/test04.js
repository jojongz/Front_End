var x = 5;
var y = 'five';
var istrue = true;
var empty = null;
var nothing;
var sym = symbol('me');

var item = {
    price : 5000,
    count : 10
};


let fruits = ['apple', 'orange', 'kiwi']; // 배열선언
let addFruit = function(fruit){
    fruits.push(fruit);
}
addFruit('wartermelon');
console.log(fruits)