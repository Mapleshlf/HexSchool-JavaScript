// 具名export，但兩者可以混用，因此都練習
// export 變數名稱 = 值

export const a = 8;
export const b = {
    name:"Yang",
    sex:"male"
};
export const c = function(x,y){
    return x+y;
}

// 方法1的預設載入，這裡的練習是告訴可以混用，但不常見
export default 10; 