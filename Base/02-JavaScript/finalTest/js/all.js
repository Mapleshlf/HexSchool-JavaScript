// listNav render 點擊按鈕後，先重置所有的actived，再讓被點擊的按鈕actived
// 首先創造出沒有任何待辦事項的乾淨網頁
// 顯示待辦事項與否
const todoList = document.querySelector(".todoList");

// 待辦事項的監聽區域
const listContainer = document.querySelector(".listContainer");
// 待辦事項的UL，用於新增或刪除待辦事項，並且渲染
const listContent = document.querySelector(".listContent");
// 輸入待辦事項區域
const txt = document.querySelector(".txt");
// 新增待辦事項按鈕
const addBtn = document.querySelector(".addBtn");
// 刪除按鈕
const deleteBtn = document.querySelector(".delete");
// 待完成項目數量
const view = document.querySelector(".viewNotCompleted");
// 消除已完成項目
const clear = document.querySelector(".clearCompleted");
// 按鈕區監聽
const listNav = document.querySelector(".listNav");
// 判斷頁面目前所在區域
let activedX ="all";


// 程式碼
// 載入預設資料(全部)
let data = [
    {
        "text":"把冰箱發霉的檸檬拿去丟",
        "checked":"unchecked"
    },
    {
        "text":"打電話叫媽媽匯款給我",
        "checked":"checked"
    },{
        "text":"整理電腦資料夾",
        "checked":"unchecked"
    }
]
renderData(data)


// 初始化渲染
function renderData(data){
    
    // 創造一個空字串，避免干擾
    let str= "";
    // 將json資料載入進來
    // 新增剛剛加入的待辦事項，因此位子會在待辦事項下方排列處

    // 創建一個數字來數待完成數量
    let num = 0;
    // 已完成的為
    // <input type="checkbox" checked="checked">

    // 判斷目前頁面所在全部、已完成、待完成區域
    if(activedX ==="all"){
        data.forEach(function(item,index){
            if(item.checked==="checked"){
                str+=`
                <li class="listItem" data-num=${index}>
                            <label class="container">
                                <input type="checkbox" checked>
                                <span class="checkmark" data-num=${index} data-checked=${item.checked}></span>
                            </label>
                            <span class="listText completeText" data-num=${index}>
                                ${item.text}
                            </span>
                            <input type="button" class="delete" data-num=${index} data-checked="checked">
                    </li>
                `;
            }else{
                str+=`
                <li class="listItem" data-num=${index}>
                            <label class="container">
                                <input type="checkbox">
                                <span class="checkmark" data-num=${index} data-checked=${item.checked}></span>
                            </label>
                            <span class="listText" data-num=${index}>
                                ${item.text}
                            </span>
                            <input type="button" class="delete" data-num=${index} data-checked="unchecked">
                    </li>
                `;
                num++;
            }
        });
    }else if(activedX ==="notCompleted"){
        data.forEach(function(item,index){
            if(item.checked==="checked"){
            }else{
                str+=`
                <li class="listItem" data-num=${index}>
                            <label class="container">
                                <input type="checkbox">
                                <span class="checkmark" data-num=${index} data-checked=${item.checked}></span>
                            </label>
                            <span class="listText" data-num=${index}>
                                ${item.text}
                            </span>
                            <input type="button" class="delete" data-num=${index} data-checked="unchecked">
                    </li>
                `;
                num++;
            }
        });
    }else if(activedX === "Completed"){
        data.forEach(function(item,index){
            if(item.checked==="checked"){
                str+=`
                <li class="listItem" data-num=${index}>
                            <label class="container">
                                <input type="checkbox" checked>
                                <span class="checkmark" data-num=${index} data-checked=${item.checked}></span>
                            </label>
                            <span class="listText completeText" data-num=${index}>
                                ${item.text}
                            </span>
                            <input type="button" class="delete" data-num=${index} data-checked="checked">
                    </li>
                `;
            }
        });
    }
   
    
    listContent.innerHTML=str;
    view.textContent=`${num} 個待完成項目`;
    // 網頁開啟時判斷是否有資料，沒有則不顯示待辦事項區域
    if(data.length === 0){
        todoList.setAttribute("class","todoList")
    }else{    
        todoList.setAttribute("class","todoList Actived")
    }
    
};

// 新增按鈕監聽區
addBtn.addEventListener("click",function(e){
    if(txt.value===""){
        return
    }
    addNew();
});

// 當新增按鈕按下ENTER時觸發
document.addEventListener("keydown", e=>{
    if(e.keyCode !== 13){
        return;
    }else{
        addNew();
    }
    // console.log(e.keyCode);
});
// 新增按鈕 addBtn 新增不增加待辦事項的checked，原因是因為這是待辦事項，立場上應該不會輸入完成的事項
function addNew(){
    let obj={};
    obj.text=txt.value;
    obj.checked="unchecked";
    data.push(obj);
    renderData(data);
    txt.value="";
}
// 監聽區域，用於刪除按鈕、搜尋未完成、已完成清單

listContainer.addEventListener("click",function(e){
    // 刪除按鈕 deleteBtn，由於deleteBtn被渲染好像會失效，因此將範圍設定為整個todoList的顯示區(listContent)
    if(e.target.getAttribute("class")==="delete"){
        // console.log("您目前點擊成功");
        // console.log(e.target.getAttribute("data-num"))
        // console.log(e.target.getAttribute("data-checked"));
        let num = e.target.getAttribute("data-num");
        data.splice(num,1);
        renderData(data)
    }

    // 打勾，取消打勾區域
    if(e.target.getAttribute("class")==="checkmark"){
        let num =e.target.getAttribute("data-num");
        if(e.target.getAttribute("data-checked") === "checked"){
            // console.log("取消打勾")
            e.target.setAttribute("data-checked","unchecked");
            data[num].checked="unchecked";
            renderData(data);
        }else if(e.target.getAttribute("data-checked") !== "checked"){
            // console.log("打勾")
            e.target.setAttribute("data-checked","checked");
            data[num].checked="checked"
            renderData(data);
        };
    }
    // 點擊span文字也可以打勾或取消打勾
   

    // 消除已完成項目
    if(e.target.getAttribute("class")==="clearCompleted"){
        // 寫法1
        let clear = [];
        data.forEach((item,index)=>{
            if(item.checked ==="checked"){ 
                // 使用forEach搭配splice似乎會有bug(少次數)，要注意
                // data.splice(index,1);
            }else(
                clear.push(item)
            )
        })
        renderData(clear)
        data = clear;
    };
});

// 原本打算使用class判斷，但由於class需要使用actived樣式，因此改用文字判斷
// 不過不確定要怎麼讓目標以外的actived取消掉
listNav.addEventListener("click",function(e){
    // 已完成、未完成、全部清單
        if(e.target.textContent==="全部"){
            // 將所有actived取消掉
            listNav.innerHTML=`
                <li><a href="#" class="allList activedNav">全部</a></li>
                <li><a href="#" class="notCompleted">待完成</a></li>
                <li><a href="#" class="Completed">已完成</a></li>
                `;
            // 由於innerHTML好像比較慢，程式碼在下面改也會被取代，因此，直接改為裡面使用actived效果
            // // 讓目前點擊的元素有actived效果
            // e.target.setAttribute("class","allList activedNav");
            // 更改activedX 來判斷目前頁面
            activedX = "all";
            renderData(data);
        }else if(e.target.textContent==="待完成"){
            
            // 更改activedX 來判斷目前頁面
            activedX = "notCompleted";
            let notCompleted =[];
            // 將所有actived取消掉
            listNav.innerHTML=`
                <li><a href="#" class="allList">全部</a></li>
                <li><a href="#" class="notCompleted activedNav">待完成</a></li>
                <li><a href="#" class="Completed">已完成</a></li>
                `;
            
            // // 讓目前點擊的元素有actived效果
            // e.target.setAttribute("class","notCompleted activedNav");
            data.forEach(function(item,index){
                if(item.checked==="unchecked"){
                    notCompleted.push(item);
                }
            });
            
            if(notCompleted.length==0){
                alert("裡面沒有待辦事項了")
            }else{
                renderData(notCompleted);
            }
        }else if(e.target.textContent==="已完成"){
            // 更改activedX 來判斷目前頁面
            activedX = "Completed";
            let completed = [];
            // 將所有actived取消掉
            listNav.innerHTML=`
                <li><a href="#" class="allList">全部</a></li>
                <li><a href="#" class="notCompleted">待完成</a></li>
                <li><a href="#" class="Completed activedNav">已完成</a></li>
                `;
            
            data.filter(function(item){
                if(item.checked==="checked"){
                    completed.push(item);
                }
            });
            if(completed.length===0){
                alert("裡面沒有已完成事項了")
            }else{
                renderData(completed);
            }
        }
});
