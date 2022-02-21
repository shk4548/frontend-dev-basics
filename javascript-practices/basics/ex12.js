/*
    Array 확장 (prototype 기반의 확장): List 메소드 추가

    함수안의 this 는 호출이지 value 값이 아님
*/
Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i = 0; i <value.length; i++){
        //     this.splice(index++, 0 , value[i]);
        // }

        // 오류!!
        // 콜백 안의 this는 예측 못한다. (어휘상의 this와 일치하지 않는다.)
        // value.forEach(function(e){
        //     this.splice(index++, 0, e);
        // });

        // 해결 방법 1: (어휘상의 this를 변수로 잡아 놓음)
        // var _this = this;
        // value.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // });
        
        // 해결 방법 2: bind로 함수 실행 때의 this를 세팅 해줄 수 잇다.
        value.forEach(function(e){
            this.splice(index++, 0 , e);
        }.bind(this));

        // value.forEach(f.bind(this));

    } else {
    this.splice(index, 0, value);
    }
}
Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// List로 사용하기
var a = [1, 2, 4];

console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']) // 기대 [1,2,'a','b','c']
console.log(a);