const png = require("./assets/img/webpack.png").default;
const img = document.createElement("img");
img.src = png;
document.body.appendChild(img);

console.log("index");
