import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer : data를 수정하는 함수 : return 하는 모든 것은 data로 됨
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

//store : data 저장소
const countStore = createStore(countModifier);

//dispatch로 reducer에게 메시지(action)를 보내는 것
countStore.dispatch({ type: "ADD" });
console.log(countStore.getState());
