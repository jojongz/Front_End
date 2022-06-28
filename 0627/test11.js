// 자바스크립트에서 객체지향(OOP) 프로그램
const teacherJay = {
    name: '제이',
    age: 30,
    teachJavaScript: function(student){
        student.gainExp();
    }
}

const studentBbo = {
    name : '뽀',
    age : 20,
    exp : 0,
    gainExp : function(){
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavaScript(studentBbo);
console.log(studentBbo.exp);
