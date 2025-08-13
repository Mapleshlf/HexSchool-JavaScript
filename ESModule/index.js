import data from "./export1.js";  //引用時注意位置，.代表同層，檔名是否正確
import data2,{a,b,c} from "./export2.js"; //引用具名export時注意外面要加大括號
// import * from "./export2.js"; 一次呼叫全部，會變成物件.



console.log(data);
console.log(`具名Export範例為 ${a},${b},${c(3,4)},${data2}`);

import "./export3.js" //直接執行，比較少見