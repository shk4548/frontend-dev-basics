/*
    Date 객체 메서드 (Date.prototype.*)
*/

// 현재 시간
var now = new Date();
console.log(now);

// 2022년 02-22- 22:22
var d1 = new Date(2022, 1/*month-1*/);
console.log(d1);

var d2 = new Date(2022, 1/*month-1*/, 22, 22, 22, 22);
console.log(d2);

// 객체 메서드
console.log(
    "년도: " + (now.getYear() + 1900) + "\n" +
    "월:" + (now.getMonth() + 1) + "\n" +
    "일:" + now.getDate() + "\n" + // day -> 오늘이 일주일의 몇번째인지
    "시:" + now.getHours() + "\n" +
    "분:" + now.getMinutes()  + "\n" +
    "초:" + now.getSeconds()  + "\n" +
    "밀리초:" + now.getMilliseconds() 
    
);

d2.setFullYear(2024);
console.log(d2);

d2.setMonth(11); // 12월 - 1
console.log(d2);