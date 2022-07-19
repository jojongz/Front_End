const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/; // 최소 검색 결과만 반환한다
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex =- /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));

// match는 일치하는 배열을 반환한다. 일치하는곳이 없다면 null을 반환한다.
