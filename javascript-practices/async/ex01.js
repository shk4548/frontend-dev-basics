const ex01 = function(param, callback){
    //
    // 비동기 코드 : 파일 시스템 접근, 네트워크 통신, SQL to DB , callback
    //
    setTimeout(function(){
        if(param === 'param-data'){
            callback(null, "ok");
        }
            callback(new Error('Fail'), null);
         
    },2000);
}

// test01 : success
ex01('param-data',function(error, res){
    if(error){
        console.error(error);
    } else {
        console.log(res);
    }
});


// test01 : fail
ex01('param-error', function(error, res){
    if(error){
        console.error(error);
    } else {
        console.log(res);
    }
});
console.log("wait........");