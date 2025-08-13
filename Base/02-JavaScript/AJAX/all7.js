//  陣列資料操作
//  map練習 知識1
// const arr = [1,5,10];
// const newArr = arr.map(function(item){
//     return item*item;
// });
// console.log(arr)
// console.log(`arr的平方算出來為${newArr}`);

// const data = [1,8,13,20];
// const newData = data.map(function(item){
//     let obj = {};
//     obj.checkNum = item>10;
//     return obj;
// });
// const newData2 = data.forEach(function(item){
//     let obj = {};
//     obj.checkNum = item>10;
//     return obj;
// });
// console.log(data);
// console.log(newData);
// console.log(newData2)

// 陣列操作 - filter 資料篩選 知識2
// const data =[
//     {
//         name:"小英",
//         score:65
//     },{
//         name:"小華",
//         score:40
//     },{
//         name:"小德",
//         score:90
//     }
// ]
// const newData= data.filter(function(item){
//     return item.score>=60
// });
// console.log(newData);

// 陣列操作 - find 尋找頭一筆資料 知識3 類似於filter但只回傳第一筆 知識3
// const data =[
//     {
//         name:"小明",
//         score:40
//     },{
//         name:"小美",
//         score:40
//     },{
//         name:"小英",
//         score:65
//     },{
//         name:"小華",
//         score:40
//     },{
//         name:"小德",
//         score:90
//     }
// ]
// const newData= data.find(function(item){
//     console.log("搜尋中")
//     return item.score>=60
// });
// console.log(newData);

// 陣列操作 - findIndex 尋找資料索引 知識4
// const txt =document.querySelector(".txt");
// const addBtn = document.querySelector(".addBtn");
// const result = document.querySelector(".result");
// const data = ["red","blue","yellow"];
// addBtn.addEventListener("click",function(e){
//     findIndex();
// });
// function findIndex(){
//     let findIndex = data.findIndex(function(item){
//         return txt.value==item;
//     });
//     console.log(findIndex);
//     result.textContent=`您查詢的值為${txt.value},索引值為${findIndex}`;
// }