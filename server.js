// console.log('Ankan is learning node_js')


// var add = function(a,b){
//     return a+b;
// }

// var add = (a , b)=>{return a+b;}
// var add = (a , b) => a+b;
// var result = add(1000,7)
// console.log(result)

// (function(){
//     console.log('Ankan is added');
// })()


// function callback(){
//     console.log('Now adding is successfully completed by Ankan');
// }
// const add =  (x , y , callback)=>  {
//     var mul = x * y;
//     callback();
//     console.log('Multiplication is : ' + mul);
// }
// add(187345637,28734692,callback);


// const add =  (x , y , Ankan)=>  {
//     var mul = x * y;
//     Ankan();
//     console.log('Multiplication is : ' + mul);
// }
// add(187345637,28734692,()=> console.log('add completed'));


// var fs = require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','fuckoff ' + user.username + '!\n',()=>{
//     console.log('fuckoff');
// })

// const notes = require('./notes.js');
// var _ = require('lodash');

// var age = notes.age;
// var result = notes.addNumber(age, 5);

// console.log('Added Number: ' + result);
// console.log(age);

// var data= [ 1,2,3,1,2,3,"name","admin","name","user"];
// var filter= _.uniq(data);
// console.log(filter);
// console.log(_.isString('Ankan'));



// const jsonString = '{"name":"Ankan","age":22}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

const jsonObject = {name: 'Ankan', age: 22};
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString);
console.log(typeof jsonString);
console.log(typeof jsonObject);


