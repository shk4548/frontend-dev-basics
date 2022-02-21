/*
    자바스크립트 객체1: object 타입

    1. 자바스크립트 객체는 object 타입과 function 타입 두가지 있다.
    2. 보통, function 타입의 객체는 '함수' 라고 부른다
    3. 따라서 자바스크립트에서 우리가 흔히 객체라 부르는 것은 object 타입의 객체라고 할 수 있다.
*/

// 생성방법 1
// 생성자 함수를 사용하는 방법
// Object, Number, String, RegExp, Date, Array - 내장객체 (내장 생성자 함수)

var o1 = new Object();
o1.name = '둘리';
o1.age = 10;
o1.anoter = new Object();
o1.anoter.name = '마이클';
o1.anoter.age= 30;

console.log(o1);

// 사용자 정의 생성자 함수
var MyObject = function(name){
    this.name = name;
}

var o2 = new MyObject("김선혁");
console.log(o2);

// 생성방법 2
// {} 리터럴을 사용하는 방법
var o3 = {};
o3.name = '둘리';
o3.age = 10;
o3.anoter = {};
o3.anoter.name = '마이클';
o3.anoter.age= 30;

console.log(o3);

// 생성방법 3
// (J)ava(S)cript (O)bject (N)otation
var o4 = {
    name: '둘리',
    age: 10,
    another: {
        name: '마이콜',
        age: 30
    }
};

console.log(o4);

// XmlHttpRequest 호스트 (브라우저) 객체를 사용해서 통신(AJAX)에서 데이터 교화의 
// 포맷으로 JSON을 사용한다.

var response = '{name: "둘리", age:10, email:"dooly@gmail.com"}';
var userVo = eval("(" + response + ")");
console.log(userVo.name, userVo.age, userVo.email);
