function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

//console.log inprime hello
//console.log inprime dojo

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

//console.log inprime | hello
//resul = 15

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

//console.log inprime | num is 3
//console.log inprime | result is 18

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndRe
urn(10);
console.log(result);
console.log(num);

//console.log inprime | logAndReturn 15,10,10,15

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

//console.log inprime | timesTwo 15,10,20,15

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

//console.log inprime | result is 3,5,16

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))

//console.log | sumNums(num1, num2) = 5,8

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 
//console.log inprime | 2 luego suma ambos numeros, resultado es 5
//console.log inprime | 3 luego suma ambos numeros, resultado es 8

 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

/* 
 console.log'sum is', sum) --> 5
 console.log'sum is', sum) --> 8
 resul = 13 
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);

/*
console.log inprime --> 19 
diagrama en t
variable valor 
num1      2,3,2,2,2
num2      3,1,1,3
*/

