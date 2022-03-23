const fetch = require('./ex02');

const ex03 = async function(param){ // async 달아줌
    try{
        const res = await fetch(param);
        console.log(res)
    } catch(error){
        console.error('error');
    }
}

ex03('param-data');
ex03('param-error');
console.log('wait.....');