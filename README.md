# Vanilla Redux

Learning Vanilla-Redux and React-Redux

### Redux의 원리

store : data 저장소

action : reducer()와 소통하는 방법. type을 갖고 있는 객체여야 한다.
reducer() : data를 수정하는 함수. reducer가 return 하는 모든 것은 app의 state가 된다.(data)

dispatch : dispatch를 이용해 reducer에게 메시지(action)를 보낸다. dispatch가 리듀서를 불러서 현재 state와 action을 보낸다.

subscribe : store의 변화를 알 수 있다. HTML을 업데이트 한다
