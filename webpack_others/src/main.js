// import "./component/cpn.js";

import { sum } from "./utils/math";
// import "./component/cpns"
import { createApp } from "vue";
const message = "Hello World";

console.log(sum(20, 30));
console.log(sum(10, 12));

console.log(message.length);
console.log(sum(100, message.length));

const bar = () => {
    console.log("bar function execution~");
};

bar();
bar();

import Hello from "./vue_demo/hello";

createApp(Hello).mount("#app");
