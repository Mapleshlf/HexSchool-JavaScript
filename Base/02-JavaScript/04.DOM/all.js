// console.log(Document); 知識

// querySelector 選擇器 知識2
// const el = document.querySelector('h1');
// // 看起來是會自動選取第一個，無法多選

// // textContent 寫入文字資料 知識3
// el.textContent=('使用textContent修改')

// innerHTML 插入 HTML 標籤 知識4
// const main = document.querySelector('.main');
// main.innerHTML=`<h1><span>使用JS創造的標題</span></h1>`;

//innerHTML 插入 變數 知識5
// ul .link
// <li><a href="google.com">由JS產生的Google連結</a></li>
// const link = document.querySelector('.link');
// const myLink = "https://www.google.com/";
// const myName = "由JS產生的Google連結";
// const content = `<li><a href="https://www.google.com/" target=”_blank”>由JS產生的Google連結</a></li>`;

// link.innerHTML=`<li><a href="https://www.google.com/" target=”_blank”>由JS產生的Google連結</a></li>`; //第一個版本
// link.innerHTML=`<li><a href="${myLink}" target=”_blank”>由JS產生的Google連結</a></li>`; //第二個版本，優點是連結可以透過變數更改，例如首頁、活動頁等常用資訊
// link.innerHTML=`<li><a href="${myLink}" target=”_blank”>${myName}</a></li>`; //第三個版本，優點是自訂文字內容
// link.innerHTML = content+content; //第四個版本，較難理解，不過也是最精進的版本

// textContent 與 innerHTML 運用差異 知識6 這兩者會互衝
// 設一個div為main，沒有其他屬性，分別用這兩者輸入<h1>header</h1>
// const main = document.querySelector('.main');
// main.textContent =('<h1>header</h1>'); //效果是.main顯示出<h1>header</h1>，而不是有這個標籤
// main.innerHTML=`<h2>header2</h2>`; //效果是顯示出h2的header2

// setAttribute 增加 HTML 標籤屬性 知識7
// // 請將link的樣式改為text-decoration:none,href:https://www.google.com/,class=red
// const myLink = document.querySelector("a");
// console.log(myLink);
// myLink.setAttribute("class","red");
// myLink.setAttribute("href","https://www.google.com/");
// myLink.setAttribute("target","_blank");
// myLink.setAttribute("text-decoration;","none");
// myLink.textContent=`使用js動態新增a屬性和文字內容`;

// querySelectorAll 可重複選取多個元素 知識8
// 請試著使用JS管理3個不同的連結
// const myLinks = document.querySelectorAll("a");
// console.log(myLinks);
// myLinks[0].setAttribute("href","https://www.google.com/");
// myLinks[0].setAttribute("target","_blank");
// myLinks[0].textContent=("Google");

// myLinks[1].setAttribute("href","https://tw.yahoo.com/");
// myLinks[1].setAttribute("target","_blank");
// myLinks[1].textContent=("Yahoo");

// myLinks[2].setAttribute("href","https://www.youtube.com/");
// myLinks[2].setAttribute("target","_blank");
// myLinks[2].textContent=("Youtube");

// .innerHTML、.textContent、.getAttribute 取值方法 知識9
//題目，使用3種函式來抓出herf,span,和推薦的歌  <a href="https://www.youtube.com/watch?v=LCYmUpSAjwI&ab_channel=whythis%3F"><span>推薦的歌</span></a>
// const myLink = document.querySelector("a");
// // console.log(myLink); 測試是否抓到
// console.log(myLink.getAttribute("href")); //getAttribute
// console.log(myLink.textContent); //textContent
// console.log(myLink.innerHTML); //innerHTML


// 表單元素取值方式 知識10
// 題目，從表單取值，並且使用取值的方式將顯示的表單內容改為目前的定位，如從下拉式選單將高雄市改為台北市、輸入框的value從你好改為hello
// html<input type="text" value="你好">
//     <select name="city" id="city">
//     <option value="高雄市">高雄市</option>
//     <option value="台北市">台北市</option>
// </select>

// const txt =document.querySelector(".txt");
// // console.log(txt.value);
// txt.value="hello!!，更改了這裡的內容";

// const list = document.querySelector(".city");
// // 注意，下拉式選單的賦予值要選本身選項有的區域，沒有的選項顯示不了
// // console.log(list.value);
// list.value="台北市";


