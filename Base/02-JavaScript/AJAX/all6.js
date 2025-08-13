// to do list小節
// 取值內容複習getAttritbute 知識1
// const title = document.querySelector('.title');
// title.addEventListener("click",function(e){
//     console.log(e.target.textContent);
//     console.log(e.target.getAttribute("class"));
// });

//  範圍內容取值 知識2
// const title = document.querySelector('.title');

// title.addEventListener("click",function(e){
//     // method 1 看class是否相同
//     if(e.target.getAttribute("class")==="view"){
//         console.log(e.target);
//     };
//     // method 2 看nodeName是否相同
//     if(e.target.nodeName==="INPUT"){
//         console.log(e.target.nodeName);
//     }
//     // method 3 看value是否相同
//     if(e.target.getAttribute("value")==="檢視"){
//         console.log(e.target.getAttribute("value"));
//     }
// });

//  監聽大範圍內容取值 知識3
// const box = document.querySelector('.box');

// box.addEventListener("click",function(e){
//     // method 1 看class是否相同
//     if(e.target.getAttribute("class")==="view"){
//         console.log(e.target);
//     };
//     // method 2 看nodeName是否相同
//     if(e.target.nodeName==="INPUT"){
//         console.log(e.target.nodeName);
//     }
//     // method 3 不符合就return，符合才console.log
//     if(e.target.getAttribute("class")!=="view"){
//         return;
//     }
//     console.log(e.target.getAttribute("class"));
// });

// data- 內容自訂化的屬性 forHTML使用 知識4

// HTML
// <h1 class="title title1" data-num="3" data-content="值可以自己取欸" data-customized=true>  
// const title1 = document.querySelector(".title1")
// console.log(title1.getAttribute("data-customized"));
// console.log(title1.getAttribute("data-num"));
// console.log(title1.getAttribute("data-content"));

// HTML 結構設計 知識5
// <div class="box">
    //     <input type="text" class="txt" placeholder="請輸入待辦事項">
    //     <input type="button" value="儲存待辦事項">

    //     <ul class="list">
    //         <li>待辦事項1 <input type="button" value="刪除待辦事項" class="delete"></li>
    //         <li>待辦事項2 <input type="button" value="刪除待辦事項" class="delete"></li>
    //     </ul>
    // </div>

// 資料初始化渲染 知識6
let data= [
]

function renderData(){
    let str="";
    data.forEach(function(item,index){
        // <li>待辦事項1 <input type="button" value="刪除待辦事項" class="delete"></li>
        str+=`<li>${item.content}<input type="button" value="刪除待辦事項" data-num="${index}" class="delete"></li>`
    });
    const list = document.querySelector(".list");
    list.innerHTML= str;
}
renderData();

// 新增功能 知識7 配合知識6
{/* <input type="text" class="txt" placeholder="請輸入待辦事項">
        <input type="button" value="儲存待辦事項" class="addBtn"></input> */}
let txt = document.querySelector(".txt");
let addBtn = document.querySelector(".addBtn"); 
addBtn.addEventListener("click",function(e){
    let obj = {};  
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value="";
});

// 刪除功能 知識8
const list = document.querySelector(".list");
list.addEventListener("click",function(e){
    if(e.target.getAttribute("class")!=="delete"){
        return;
    }
    let num = e.target.getAttribute("data-num");
    // num = parseInt(num);
    data.splice(num,1)
    renderData();
});