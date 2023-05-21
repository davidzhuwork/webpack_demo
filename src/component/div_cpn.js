// 可以省略 from, 如果模块只是作为一个引入，而并没有导出任何东西(import a from b 中的 a)，可以直接使用 import，将其添加进"依赖图"
import "../css/div_style.css";
import "../css/title_style.less";

const divElement = document.createElement("div");
divElement.textContent = "hello world";
divElement.classList.add("content");
document.body.append(divElement);

const h2Element = document.createElement("h2");
h2Element.textContent = "hello world from H2 element";
h2Element.classList.add("title");
document.body.append(h2Element);
