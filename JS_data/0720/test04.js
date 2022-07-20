// Set - 데이터 중복 불허 - 찾기

const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s.has('one'));  // one을 찾음
s.delete('one');    // one을 삭제
console.log(s.has('one'));  // one을 못찾음
console.log(s.has('two'));
