//陣列array Practice 
//練習找陣列長度

// let color=['black','yellow','white','blue','red'];
// let colorNum= color.length;
// console.log(colorNum);
//#endregion

//練習寫入陣列
//#region
// let book = [];
// book[0]='歷史課本';
// console.log(book[0]);
// book[1]='天文課本';
// console.log(book);
// console.log(book.length);
//#endregion

//練習用push寫入陣列 
//#region 
// let book2 = [];
// book2[0]='歷史課本';
// console.log(book2[0]);
// book2[1]='天文課本';

// book2.push('數學課本');
// console.log(book2);
// book2.push('數學課本1');book2.push('數學課本2');book2.push('數學課本3');
// console.log(book2);
//因此可見，push可以將裡面的值放入陣列的最後面，例如book2原本只有2個資料，push因此從第三筆[2]的資料開始放入，且放入的順序會依序排在最後面，但無法得知這次push的位置是在陣列的第幾個

// let book3=[]
// book3[3]='天文課本';
// book3.push('數學課本');
// console.log(book3 +'測試空值對push的影響')
//測試出來，不會因為前面有空值就塞入，而是新創一個值並且放入push的值
//#endregion

//練習用 unshift 寫入資料流程
//#region 
// let book =['數學','英文','地理','天文'];
// console.log(book);
// book.unshift('歷史');
// console.log(book);
//由此可知，unshift和push很像，不過一個是從最前面，一個從最後面，可能對於迴圈情況很好用
//#endregion

//練習用pop shift刪除資料流程
//#region 
// let book =['數學','英文','地理','天文'];
// console.log(book);
// book.shift(); //刪除最前面的
// console.log(book);
// book.pop(); //刪除最後面的
// console.log(book);
//由此可知，unshift和push很像，不過一個是從最前面，一個從最後面，可能對於迴圈情況很好用
//#endregion

//splice 刪除指定資料 常用記得熟悉
//#region 
// let book =['數學','英文','地理','天文'];
// //題目為，將book砍到只剩下數學和天文，只能使用一行程式碼
// book.splice(1,2); //意思為起始位置為book[1]，從這刪除2筆資料，因此會將book[1],book[2]刪除
// //確認答案
// console.log(book); //'數學,'天文' 答案正確
//#endregion

