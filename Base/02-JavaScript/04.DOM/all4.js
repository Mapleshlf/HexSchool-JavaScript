// forEach 題型練習

// 如何整合 innerHTML 資料 知識1
// 使用<ul class=list></ul> 將裡面的li顯示出目前有的充電站資訊
// 格式為<li>xx充電站，免費</li>
// const list = document.querySelector(".list");
// let str ="";
// let data=[
//     {
//         name:"12充電站",
//         Charge:"免費"
//     },{
//         name:"34充電站",
//         Charge:"免費"
//     },{
//         name:"56充電站",
//         Charge:"投幣式"
//     },{
//         name:"78充電站",
//         Charge:"免費"
//     }
// ]
// data.forEach(function(item,index){
//     let newHtml =`<li>${item.name}，${item.Charge}</li>`;
//     console.log(newHtml);
//     str += newHtml;
// });
// list.innerHTML=str;


// 免費與投幣式事件監聽設計 知識3
// 將上面的程式碼改為函式用，並且用呼叫的方式方便再次使用整個程式碼
let data=[
        {
            name:"12充電站",
            Charge:"免費"
        },{
            name:"34充電站",
            Charge:"免費"
        },{
            name:"56充電站",
            Charge:"投幣式"
        },{
            name:"78充電站",
            Charge:"免費"
        }
    ]
const list = document.querySelector(".list");
let str ="";

// 預設載入
function init(){
    str="";
    data.forEach(function(item,index){
        let newHtml =`<li>${item.name}，${item.Charge}</li>`;
        str += newHtml;
    });
    list.innerHTML=str;
}
init();

// 篩選器邏輯
const stationFilter =document.querySelector(".filter");
stationFilter.addEventListener("click",function(e){
    str="";
    if(e.target.value==undefined){
        console.log("您點擊到空的地方");
        return;
    }
    data.forEach(function(item,index){
        if(e.target.value=="全部"){
            str +=`<li>${item.name}，${item.Charge}</li>`;
        }
        else if(e.target.value==item.Charge){
            str +=`<li>${item.name}，${item.Charge}</li>`;
        }
    });
    list.innerHTML=str;
})

// 新增邏輯
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function(e){
    console.log(stationName.value);
    console.log(stationCharge.value);
    let obj ={};
    obj.name= stationName.value;
    obj.Charge = stationCharge.value;
    console.log(obj);
    data.push(obj);
    init();
    stationName.value="";
    stationCharge.value="免費";
})