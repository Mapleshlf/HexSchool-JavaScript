//物件練習 知識1
// 物件設定方式為 let a = {};
//以野原一家為例，有爸爸野原廣智、媽媽美冴、兒子小新、女兒小葵，還有一隻狗小白，他們現在正在睡覺

//傳統
// let fatherName='野原廣智';
// let motherName='美冴';
// let sonName='小新';
// let daughterName='小葵';
// let dogName='小白';
// let isWakeUp=false;

//使用物件的方式則為
// let Home ={
//     //屬性 : "",
// fatherName:"野原廣智",
// motherName:'美冴',
// sonName:'小新',
// daughterName:'小葵',
// dogName:'小白',
//     isWakeUp:false,
// }
// console.log(Home);

//讀取物件的值 知識2
//物件和陣列相似，都可以一次存放大量的值，不過，物件的值算是這個物件的屬性，
// 例如，一個戴眼鏡的大學生，戴眼鏡和大學生其實都是屬性，知道這個概念後，我們來將物件的屬性讀取出來

// let Home ={
//     //屬性 : "",
// fatherName:"野原廣智",
// motherName:'美冴',
// sonName:'小新',
// daughterName:'小葵',
// dogName:'小白',
//     isWakeUp:false,
// }
// // 從物件取出值的位置是物件.屬性區域，要注意
// let son = Home.sonName;
// console.log(`野原一家的兒子名子為${son}`);

//新增物件的值 知識3
//以一個空物件為例，如何塞入新的值呢?
// let home = {};
// home.motherName='美冴';
// home.sonName='小新';
// home.bank=1500;
// home.isWakeUp=false;
// console.log(home);

//修改物件值 知識4
//修改物件值可以理解為，為物件目前存在的屬性賦予其他值，因此非常簡單
// let home = {};
// home.motherName='美冴';
// home.sonName='小新';
// home.bank=1500;
// home.isWakeUp=false;
// // console.log(home);

// home.bank +=home.bank+500;
// home.isWakeUp = true;
// console.log(home);

//刪除物件的值 知識5
// 刪除物件的值，是用專用的函式 delete 物件.屬性，並且可以透過console.log(物件.被刪除的屬性)是否為undefined來判斷
// 由於我覺得console.log判斷有點怪，因此加了一個if判斷式
// let home = {};
// home.motherName='美冴';
// home.sonName='小新';
// home.bank=1500;
// home.isWakeUp=false;
// delete home.bank;
// if(home.bank==undefined){
//     console.log("Delete Successfully");
// }else{
//     console.log("Delete Failed");
// }

//另一種讀取物件屬性方法 知識6
// let home = {};
// home.motherName='美冴';
// home.sonName='小新';
// console.log(home.motherName); //最簡單的，最直觀的讀取方式
// console.log(home['motherName']); //使用home裡面找這個名子的字串，可能是物件專用用法
// let a = 'motherName';
// console.log(home[a]); //與用法2相同，差別是用變數取代後，之後的操作空間較大，
// // 例如自動化程序或迴圈可能會需要用一次性變數

