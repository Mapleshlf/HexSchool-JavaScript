//  函式寫法教學知識1
// let a = 1;
// console.log(a);

// // 機器人-早起活動-起床刷牙洗臉出門;

// function morningAction(){
//     console.log('起床');
//     console.log('刷牙');
//     console.log('洗臉');
//     console.log('出門');
// }

// // morningAction();
// // morningAction();

// // 機器人-晚上行動

// function nightAction(){
//     console.log('回家');
//     console.log('刷牙');
//     console.log('洗臉');
//     console.log('睡覺');
// }
// nightAction();

// 函式裡面仍可以執行函式 知識2
// function cleanHead(){
//     console.log('刷牙');
//     console.log('剃鬍子');
//     console.log('洗臉');
// }

// function morningAction2(){
//     console.log('起床');
//     cleanHead();
//     console.log('出門');
// }
// morningAction2();

// function nightAction2(){
//     console.log('回家');
//     cleanHead();
//     console.log('睡覺');
// }
// nightAction2();

// 函式參數介紹 知識3
// 請使用參數的方式讓他顯示出1 2 4 3的順序
// a(1,2);
// a(4,3);
// function a(num,num2){
//     console.log(num);
//     console.log(num2);
// }

// 參數寫法-參數只存活在大括號 知識4
// 這種函式的參數是區域的，由於是這個函式中設計出來的，因此無法在其他地方使用
// a(1,2);
// a(4,3);
// function a(num,num2){
//     console.log(num);
//     console.log(num2);
// }


// 參數寫法-兩個數字相加工具 知識5
//函數可以做加減乘除，且可以在console自己輸入值
// function add(num1,num2){
//     console.log(`您加總的數字為${num1+num2}`);
// }
// add(1,2);
// add(156156151,989959595);

// 參數回傳值 return 寫法教學 知識6
// 題目為成績相加機
// //函數原本的方式不會保留值，因此，可以使用return將裡面發生的結果回傳
// function add(num1,num2){
//     // console.log(`您加總的數字為${num1+num2}`);
//     return num1+num2;

// }
// let TomScore= add(60,60);
// let TommyScore = add(100,-100);
// console.log(`Tom的成績加總為${TomScore}
//     Tommy的成績加總為${TommyScore}`);

//return 宣告 let 知識7
// // 題目為成績相加機
// //函數原本的方式不會保留值，因此，可以使用return將裡面發生的結果回傳
// function add(num1,num2){
//     // console.log(`您加總的數字為${num1+num2}`);
//     let totalScore = num1+num2;
//     return totalScore; //注意，這個變數是無法在外面被呼叫的，原因是因為他也是區域變數(函室內)
// }

// let TomScore= add(60,60);
// let TommyScore = add(100,-100);
// console.log(`Tom的成績加總為${add(60,60)}
//     Tommy的成績加總為${add(100,-100)}`);

//return 可以有多個 知識8 
//return 可以中斷函式執行，只要return代表函式達到結果了
// // 題目，驗證是否及格

// function checkScore(num){
//     if(num>=60){
//         console.log("及格!");
//         return("及格")
//     }else{
//         console.log("不及格");
//         return("不及格")
//     }
// }
// let Tom = checkScore(60);
// let Jemmy = checkScore('我');
// let Jacky = checkScore(0);
// console.log(`Tom為${Tom},Jemmy為${Jemmy},Jacky為${Jacky}`)

//判斷是否為偶數 知識9

// function checkEven(num){
//     if(num %2 ==0){
//         // console.log(`輸入的${num}是偶數`);
//         return "輸入的"+num+"是偶數";
//     }else{
//         console.log(`輸入的${num}不是偶數`);
//         return "輸入的"+num+"不是偶數";
//     }
// }
// console.log(checkEven(4));
// checkEven(3);

// let 全域與區域變數邏輯 知識10
// 函式內會先找有沒有這個變數，在往外找，最後找不到變數才會是undefined
// 題目，連續做5次，並且測試count的值是否為5

let count =0;

function test(){
    count +=1;
    console.log(`test${count}`);
}

test();
test();
test();
test();
test();
