import { applyStyle } from "./css/util.js";
import { redBg, border } from "./css/common.js";
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const styles = {
  width: "400px",
  height: "500px",
  margin: "0 auto",
};

applyStyle(div1, styles, redBg, border());
applyStyle(div2, styles, border(5, "green"));
