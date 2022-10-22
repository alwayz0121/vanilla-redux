import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

//reducer : data를 수정하는 함수 : return 하는 모든 것은 data로 됨
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//store : data 저장소
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

//subscribe : store의 변화를 알 수 있다.
countStore.subscribe(onChange);

//dispatch로 reducer에게 메시지(action)를 보내는 것
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
