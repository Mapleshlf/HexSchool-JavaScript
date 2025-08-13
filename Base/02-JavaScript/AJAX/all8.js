// 箭頭函式
// 不同的函式寫法 知識1
// 函式陳述式 特徵是使用基本上不會因先後順序而錯誤，只要有設定就可使用，使用方式為numA(x)
// function numA(x){
//     return x*x;
// } 

// // 函式表達式，特徵是要先宣告這個變數，才能呼叫，呼叫方式為numB(x)
// const numB = function(x){
//     return x*x;
// }

// // 箭頭函式，特徵為非常精簡，使用方式為numC(x);
// const numC = (x)=>{
//     return x*x;
// }

//  箭頭函式基本寫法 知識2
// const numA = function(x){
//     return x*x;
// }

// const numB = (x,y)=>{
//     const a=2;
//     const b=10;
//     return a*b/(x+y);
// }
// console.log(numA(3));
// console.log(numB(2,3));

// 箭頭函式再縮寫 知識3
// 3-1 預設為return時，可以省略return和大括號
// const numA = (x)=>`x的平方為${x*x}`;

// // 3-2 預設為一個參數時，可以不用參數外的括號
// const numB = x =>{
//     return x*x
// };
// const numC = (x,y)=>{
//     return x*y;
// }

// // 3-3 預設為沒有參數時，使用空括號
// const numD = () =>{
//     return `沒有值`;
// }
// console.log(numA(3));
// console.log(numB(3),);
// console.log(numC(3,4));
// console.log(numD());

// 陣列 map 搭配箭頭函式寫法 知識4
// 一般寫法
const data =[1,3,5,7];
const newData =data.map(function(item){
    return item+2;
})
console.log(newData);
// 搭配箭頭函式寫法
const data2 = [1,3,5,7];

const newData2 = data.map((item)=>{
    return item +2;
})
console.log(newData2);
// 由於是return可以進一步省略，進一步省略寫法為
const newData3 = data.map(item => item+2);
console.log(newData3);