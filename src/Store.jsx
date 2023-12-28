import { proxy } from "valtio";

const state = proxy({
  color: "#EFBD48",
  isShowTxt: false,
});

export default state;
