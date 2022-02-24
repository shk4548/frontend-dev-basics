var MyObject = function(name,age){
    this.name = name,
    this.age = age    
};

// myobject 안에 prototype 생김

obj1 = new MyObject('딸기',10);
// _proto_ 생김

MyObject.prototype.bbbb = 30;
obj1.bbbb = 50;


obj2 = new MyObject('자바', 20);

console.log(obj1.bbbb);
console.log(obj2.bbbb);

console.log(obj1);
console.log(obj2);

console.log(MyObject)