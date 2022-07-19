// 객체에서 키만 추출
const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

// const arr = Object.keys(obj);    // 키만 추출
// const arr = Object.values(obj);  // 값만 추출
const arr = Object.entries(obj);    // 객체를 배열로 변환


console.log(arr);