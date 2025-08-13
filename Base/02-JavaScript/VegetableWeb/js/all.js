// 創造空陣列裝資訊
let data = [];
// 創造一個原始的data(沒有排序過的)
let data2 = [];
// 空字串
let str ="";
// 設定一個目前箭頭方向
let arrow = "up";
// 表格標題行
let cropTitle = `<tr class="trTitle">
                    <th width="15%" class="thActived">作物名稱</th>
                    <th width="15%">市場名稱</th>
                    <th  width="14%">
                        <div class="inline-flex sort-advanced">上價
                        <span>
                            <i data-price="上價" data-sort="up" class="fas fa-caret-up"></i>
                            
                            <i data-price="上價" data-sort="down" class="fas fa-caret-down"></i>
                        </span>
                        </div>
                    </th>
                    <th width="14%">
                        <div class="inline-flex sort-advanced">中價
                        <span>
                            <i data-price="中價" data-sort="up" class="fas fa-caret-up"></i>
                            
                            <i data-price="中價" data-sort="down" class="fas fa-caret-down"></i>
                        </span>
                        </div>
                    </th>
                    <th width="14%">
                        <div class="inline-flex sort-advanced">下價
                        <span>
                            <i data-price="下價" data-sort="up" class="fas fa-caret-up"></i>
                            
                            <i data-price="下價" data-sort="down" class="fas fa-caret-down"></i>
                        </span>
                        </div>
                    </th>
                    <th width="14%">
                        <div class="inline-flex sort-advanced">平均價
                        <span>
                        <i data-price="平均價" data-sort="up" class="fas fa-caret-up"></i>
                            
                            <i data-price="平均價" data-sort="down" class="fas fa-caret-down"></i>
                        </span>
                        </div>
                    </th>
                    <th width="14%">
                        <div class="inline-flex sort-advanced">交易量
                        <span>
                        <i data-price="交易量" data-sort="up" class="fas fa-caret-up"></i>
                            
                            <i data-price="交易量" data-sort="down" class="fas fa-caret-down"></i>
                        </span>
                        </div>
                    </th>
                </tr>`;

// 創造nav (按鈕區大範圍)
const nav = document.querySelector(".nav");
// 表格元素
const crop = document.querySelector(".crop");
// 篩選器select
const sort = document.querySelector(".sort");
// 監聽按鍵
const container = document.querySelector(".container");

// 搜尋區
// 搜尋框
const searchTxt = document.querySelector(".searchTxt");
// 搜尋按鈕
const searchBtn = document.querySelector(".searchBtn");
// 搜尋關鍵字為
const resultTitle = document.querySelector(".resultTitle");

// axios串接
axios.get("https://hexschool.github.io/js-filter-data/data.json")
.then(function(response){
    str = "";
    // 載入標題
    str +=cropTitle;
    str+=`<tr>
                    <td colspan="7">資料載入中... 請稍後</td>
                </tr>`;
    crop.innerHTML=str;
    // console.log(response);
    data = response.data;

    // 由於資料裡面有錯誤資料(沒有作物名稱的資料)，因此從這裏篩選出有作物名稱的資料
    data.forEach((item,index) => {
        if(item.作物名稱 !== null && item.作物名稱 !== ""){
            data2.push(item);
        }
    });
    data = data2;
    str = "";

    // 載入標題
    str +=cropTitle;
    str+=`<tr>
                    <td colspan="7">資訊載入完成，現在可查詢</td>
                </tr>`;
    crop.innerHTML=str;
})
.catch(function(error){
    console.log(error);
    str = "";
    str +=cropTitle;
    str+=`<tr>
                    <td colspan="7">資料載入失敗</td>
                </tr>`;
    crop.innerHTML=str;
    console.log("資料載入失敗");
})


// 按鈕大範圍監聽(切換蔬菜、水果、花卉區域)
nav.addEventListener("click",function(e){
    if(e.target.textContent=="蔬果"){
        // 切換按鈕actived
        nav.innerHTML=`
            <li><a href="#" class="actived vegetable">蔬果</a></li>
                <li><a href="#" class="fruit">水果</a></li>
                <li><a href="#" class="flowers">花卉</a></li>
        `;
        // 渲染結果
        const obj = data2.filter(item =>{
            // // 這邊的0是別種0的樣子，有陷阱
            // console.log(item.種類代碼 == "N04");
            return item.種類代碼 == "N04";
        })
        renderData(obj);
    }else if (e.target.textContent=="水果"){
         // 切換按鈕actived
        nav.innerHTML=`
            <li><a href="#" class="vegetable">蔬果</a></li>
                <li><a href="#" class="fruit actived">水果</a></li>
                <li><a href="#" class="flowers">花卉</a></li>
        `;
        // 渲染結果
        const obj = data2.filter(item =>{
            return item.種類代碼 == "N05";
        })
        renderData(obj);
    }else if(e.target.textContent=="花卉"){
         // 切換按鈕actived
         nav.innerHTML=`
            <li><a href="#" class="vegetable">蔬果</a></li>
                <li><a href="#" class="fruit">水果</a></li>
                <li><a href="#" class="flowers actived">花卉</a></li>
        `;
        // 渲染結果
        const obj = data2.filter(item =>{
            return item.種類代碼 == "N06";
        })
        renderData(obj);
    }
})
// 初始渲染
function renderData(x){
    str=""
    str += cropTitle;
    x.forEach(function(item,index){
            str += `<tr>
                <th class="thActived">${item.作物名稱}</th>
                <th>${item.市場名稱}</th>
                <td>${item.上價}</td>
                <td>${item.中價}</td>
                <td>${item.下價}</td>
                <td>${item.平均價}</td>
                <td>${item.交易量}</td>
            </tr>`;
        })
    cropText(str);
}

function cropText(stringX){
  let inputX = stringX;
  crop.innerHTML=inputX;
}
// 篩選器監聽
// 監聽select選單，使用change事件監聽
sort.addEventListener("change",function(e){
    // 
    if(sort.value==="default"){
        // renderData(data2);
    }else if(sort.value==="top"){
      if(arrow == "up"){
        let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 升序 sort
          return a["上價"] - b["上價"]; 
        });
        renderData(newdata);
      }else{
        let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 降序 sort
          return b["上價"] - a["上價"]; 
        });
        renderData(newdata);
      }
    }else if(sort.value==="middle"){
      if(arrow == "up"){
        let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 升序 sort
          return a["中價"] - b["中價"]; 
        });
        renderData(newdata);
      }else{
        let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 降序 sort
          return b["中價"] - a["中價"]; 
        });
        renderData(newdata);
      }
    }else if(sort.value==="bottom"){
      if(arrow == "up"){
      let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 升序 sort
          return a["下價"] - b["下價"]; 
        });
        renderData(newdata);
      }else{
        let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 降序 sort
          return b["下價"] - a["下價"]; 
        });
        renderData(newdata);
      }
    }else if(sort.value==="average"){
      if(arrow == "up"){
      let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 升序 sort
          return a["平均價"] - b["平均價"]; 
        });
        renderData(newdata);
      }else{
        let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 降序 sort
          return b["平均價"] - a["平均價"]; 
        });
        renderData(newdata);
      }
    }else if(sort.value==="trade"){
      if(arrow == "up"){
      let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 升序 sort
          return a["交易量"] - b["交易量"]; 
        });
        renderData(newdata);
      }else{
        let newdata= [];
        newdata = data2.sort( (a,b) =>{
          // 降序 sort
          return b["交易量"] - a["交易量"]; 
        });
        renderData(newdata);     
      }
    }
});
// 監聽上下箭頭點擊事件
crop.addEventListener("click",function(e){
    if(e.target.nodeName !== "I"){
        return;
    }
    let dataKey = e.target.getAttribute("data-price");
    let dataOrder = e.target.getAttribute("data-sort");
    sortDataByKey(dataKey,dataOrder);
});

// 排序函式
function sortDataByKey (key, order){
  let newdata=[];
    if(order ==="up"){
      newdata = data2.sort( (a,b) =>{
        return a[key] - b[key]; 
      })
    }else if (order ==="down"){
      newdata = data2.sort( (a,b) =>{
        return b[key] - a[key]; 
      })
    }else{
      //handle error
    }
  console.log(newdata);
  renderData(newdata);
}

// 搜尋事件
searchBtn.addEventListener("click",function(e){
    let stringX = searchTxt.value;
    if(searchTxt.value.trim() == ""){
        // console.log("請輸入資料")
        alert("請輸入資料");
        renderData(data2);
    }else{
        resultTitle.setAttribute("class","resultTitle actived");
        resultTitle.textContent = (`顯示「 ${searchTxt.value}」的結果`) ;
        // console.log("查詢中")
        data2 =data.filter(item =>{
                if(item.作物名稱 !== "" && item.作物名稱 !== null){
                    if(item.作物名稱.indexOf(stringX,0)!== -1){
                        return item;
                    }
                }
            })
        // 找到資料後渲染
            renderData(data2);
            // 清空搜尋欄
            searchTxt.value="";
    };
});
// 使用enter搜尋
container.addEventListener("keydown",e=>{
    let stringX = searchTxt.value;
    if(e.keyCode !==13){
        return;
    }
    else if(e.keyCode == 13){
        if(searchTxt.value.trim() === ""){
            // console.log("請輸入資料")
            renderData(data2);
            return;
        }else{
        // console.log("hi")
        resultTitle.setAttribute("class","resultTitle actived");
        resultTitle.textContent = (`顯示「 ${searchTxt.value}」的結果`) ;
            data2 =data.filter(item =>{
                if(item.作物名稱 !== "" && item.作物名稱 !== null){
                    if(item.作物名稱.indexOf(stringX,0)!== -1){
                        return item;
                    }
                }
            })
            // 找到資料後渲染
            renderData(data2);
            // 清空搜尋欄
            searchTxt.value="";
        }
    }
})


