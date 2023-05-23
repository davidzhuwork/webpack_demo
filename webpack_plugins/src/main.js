// import "./component/cpn.js";

import { sum } from "./utils/math";
import "./component/cpn";
import { createApp } from "vue";
const message = "Hello World";

// console.log(sum(20, 30));
// console.log(sum(10, 12));

console.log(message.length);
// console.log(sum(100, message.length));

const bar = () => {
    console.log("bar function execution~");
};

bar();
bar();

// 如果开启了热模块更新的话
// if (module.hot) {
//     module.hot.accept("./utils/math.js", () => {
//         console.log("math 更新了");
//     });
// }
// console.log("from DefinePlugin", BASE_URL);

// import Hello from "./vue_demo/hello";

// createApp(Hello).mount("#app");
