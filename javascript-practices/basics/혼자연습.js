let person1 = {
    name: 'Jo'
};

let person2 = {
    name: 'Kim',
    study: function() {
        console.log(this.name + '이/가 공부를 하고 있습니다.');
    }
};

person2.study(); // Kim이/가 공부를 하고 있습니다.

// bind()
let student = person2.study.bind(person1);

student(); // Jo이/가 공부를 하고 있습니다.