// AJAX
// axios-嘗試串接外部資料 知識1

// axios.get('https://hexschool.github.io/ajaxHomework/data.json').then(function(response){
//     console.log(response)
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
// });

//  透過函式設計處理非同步 知識2
// let ary=[];
// axios.get('https://hexschool.github.io/ajaxHomework/data.json').then(function(response){
//     ary =response.data
//     console.log("資料有回傳了");
//     renderData();
// });
// function renderData(){
//     // console.log(ary);
//     let title = document.querySelector('.title');
//     title.textContent=(ary[0].name);
// }

// 透過POST來註冊帳號 知識3
// let obj ={
//     email:"lovef2e@hexschool.com",
//     password:"12345678"
// }
// axios.post("https://escape-room.hexschool.io/api/user/signup",obj)
// .then(function(response){
//    console.log(response.data.message);
// })
// .catch(function(error){
//     console.log(error.response.data.message);
// }); 

// 實做 axios DOM 表單註冊流程 知識4
const account = document.querySelector(".account");
const password = document.querySelector(".password");
const send = document.querySelector(".send");

send.addEventListener("click",function(e){

    signUp();
});

function signUp(){
    if(account.value ==""||password.value==""){
        alert("您輸入的資料錯誤");
        return;
    }
    let obj ={};
    obj.email = account.value;
    obj.password = password.value;
    console.log(`您註冊的帳號為${obj.email}`);
    axios.post("https://escape-room.hexschool.io/api/user/signup",obj)
    .then(function(response){
        console.log("有跑then")
        if(response.data.message=="帳號註冊成功"){
            alert("您的帳號已註冊成功!");
            account.value="";
            password.value="";
        }else{
            alert("這個帳號已註冊過");
            account.value="";
            password.value="";
        }
    })
    .catch(function(error){
        // console.log(error.response.data.message);
        alert(error.response.data.message)
        
    }); 
}


// 登入功能 知識5 配合註冊功能使用
// HTML 

// <h1 class="title">
        // <span>練習註冊帳號密碼</span><input type="button" class="view" value="檢視">
    // </h1><br>
    // <label for="account">帳號:</label>
    // <input type="text" class="account" id="account">
    // <br>
    // <label for="password">密碼:</label>
    // <input type="password" class="password" id="account">
    // <br>
    // <input type="submit" value="註冊" class="send">
    // <br>
    // <label for="loginAccount">帳號:</label>
    // <input type="text" class="loginAccount" id="loginAccount">
    // <br>
    // <label for="loginPassword">密碼:</label>
    // <input type="password" class="loginPassword" id="loginPassword">
    // <br>
    // <input type="submit" value="登入" class="loginBtn">
// 
const loginAccount = document.querySelector(".loginAccount");
const loginPassword = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");
// console.log(loginAccount,loginBtn,loginPassword)
loginBtn.addEventListener("click",function(e){
    login();
});
function login(){
    if(loginAccount.value==""||loginPassword.value==""){
        alert("請輸入正確的資料");
        return;
    }
    let data={
         
    };
    data.email=loginAccount.value;
    data.password=loginPassword.value;
    console.log(`您登入的帳號為${data.email}`);
    axios.post("https://escape-room.hexschool.io/api/user/signin",data)
    .then(function(response){
        if(response.data.message=="登入成功"){
            console.log("歡迎")
            loginAccount="";
            loginPassword="";
        }else{
            console.log("請檢查帳號密碼是否正確")
        }
        alert(response.data.message);
        loginAccount="";
        loginPassword="";
    })
    .catch(function(error){
        // console.log(error)
        alert(error.response.data.message);
    })
}