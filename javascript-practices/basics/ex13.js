/*
    string primitive type과 String 객체 메서드 (String.prototype.*)
*/

s = "hello";
s.substring();  // new String(s).substring()

// 배열처럼 접근이 가능하다. 유사배열
var str1 = 'Hello World';
for(var i = 0; i < str1.length; i ++){
    console.log(str1[i]);
}

// 문자열 합치기 
var str2 = 'Hello';
var str3 = 'Wrold';

var str4 = str2 + ' ' + str3;
console.log(str4);
// 자바에서는
// String str4 = new StringBuffer(str2).append('').append(str3).toString();
// String s ="";
// for(int i = 0; i < 100000000; i++){
//  s = s + "hello";
//  s = new StringBuffer(s).append("hello");
//  }


// 캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean : " + true;
console.log(str6);

// 메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2');
console.log(index);

var index = str7.indexOf('string4');
console.log(index); // 찾지못하면 -1 이 출력됨

var str8 = str7.substr(10, 3 /*count*/);
console.log(str8);

var str8 = str7.substring(10, 13 /*last index -1*/);
console.log(str8);

var a = str7.split(" ");
console.log(a);

var str11 = 'abcdef';
var a = str11.split(":");
console.log(a);