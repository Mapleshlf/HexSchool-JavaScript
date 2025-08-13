// 使用 addEventListener 註冊事件監聽教學 知識1
// 題目為點擊按鈕後更改標題內容

// <input type="button" class="btn">點一下
// <h1>標題</h1> 

// const btn = document.querySelector(".btn");
// const title = document.querySelector("h1");
// // console.log(btn,title);
// btn.addEventListener("click",function(e){
//     // console.log("success");
//     title.textContent="感謝您的點擊";
// });

// 如何觀看 DOM 有註冊事件監聽 知識2
//使用Chrome功能的檢查，尋找Event Listeners即可

// 用監聽器做加法器 知識3
// 題目，數字目前是5，請加到7
// <input type="button" class="add" value="+1">
{/* <input type="button" class="minus" value="-1">
<h1>標題</h1> */}

// const add = document.querySelector(".add");
// const minus = document.querySelector(".minus");
// const title = document.querySelector("h1");
// let count = 5;

// add.addEventListener("click",function(e){
//     count ++;
//     title.textContent=count;
// });
// minus.addEventListener("click",function(e){
//     count --;
//     title.textContent=count;
// });

// event 物件 - 告訴你當下元素資訊 知識4
// <input type="button" class="add" value="+1">
// const add = document.querySelector(".add");
// add.addEventListener("click",function(e){
//     console.log(e);
// });


// DOM 複習 - 透過 nodeName 瞭解目前 DOM 的 HTML 位置 知識5
// 使用<input type="button" class="add" value="+1">當範例

// const add = document.querySelector(".add");
// console.log(add.textContent); //沒有輸入文字內容，所以是空白，因為按鈕是用value
// console.log(add.innerHTML); //沒子元素所以會是空白
// console.log(add.getAttribute("value")); //抓目前顯示的值 +1
// console.log(add.nodeName); //抓到這是甚麼標籤 input


// e.target - 了解目前所在元素位置 知識6
// 題目是從ul使用addLintener，且父元素設定監聽器後，每個子元素都很好地被監聽著，非常好用
// HTML
{/* <ul class="list">
        <li></li>
        <li><a href="#">1234</a></li>
    </ul> */}
// JS
// const list = document.querySelector(".list");
// list.addEventListener("click",function(e){
//     console.log(e.target);
// });


// e.target 搭配 nodeName 節點，抓到你預期要做的事情 知識7
// 題目，點擊按鈕後，console.log("你目前找到按鈕了");
// 注意使用target.nodeName取得的都會是大寫，所以記得使用全大寫英文字母
// HTML
{/* <ul class="list">
        <li>li</li>
        <li>li <input type="text" class="btn" value="按鈕"></li>
    </ul> */}
// JS
// const list = document.querySelector(".list");
// list.addEventListener("click",function(e){
//     console.log(e.target.nodeName);
//     if(e.target.nodeName == "INPUT"){
//         console.log("你目前找到按鈕了");
//     }
// });

// preventDefault - 取消預設觸發行為 知識8
// 常用於使用連結、submit按鈕等等，只用於html效果但不想要本身功能的情況
// HTML
// <a href="https://www.google.com/">連結</a>
// JS
// const link = document.querySelector("a");
// link.addEventListener("click",function(e){
//     e.preventDefault();
//     link.textContent=("感謝你的點擊");
// });