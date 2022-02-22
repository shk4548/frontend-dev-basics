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