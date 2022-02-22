/*
    글로벌 객체 global Object
*/
console.log("=== global Object ==================");

//  global 선언 -> variable context에 저장
 global.name = '둘리';
console.log(name, global.name);

//cf
n2 = '둘리';
console.log(n2, global.n2);

// var , let , const 사용하면 global 로 사용하지않음, 안적어주면 global로 만들어짐.
email = 'dooly@gmail.com';
console.log(email, global.email);


console.log("=== function의 객체 메서드 apply ================");
var f1 = function(){
    console.log(this);
}
f1();

// this 바꾸기
var o = {
    name : '마이콜'
}
f1.apply(o);

console.log("=== function의 객체 메서드 call ===================")
var f2 = function(s1 , s2){
    console.log(s1 +" " + s2 + " " + this.name);
}

f2('hi'); // global인 둘리가 나옴

f2.call(o, 'hi', 'again');
//f2.call(o, 'hi');

f2.apply(o, ['hi', 'again']);