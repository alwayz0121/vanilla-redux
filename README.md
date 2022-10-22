# Vanilla Redux

Learning Vanilla-Redux and React-Redux

### Redux의 원리

store : data 저장소

action : reducer()와 소통하는 방법. type을 갖고 있는 객체여야 한다.
reducer() : data를 수정하는 함수. reducer가 return 하는 모든 것은 app의 state가 된다.(data)

dispatch : dispatch를 이용해 reducer에게 메시지(action)를 보낸다. dispatch가 리듀서를 불러서 현재 state와 action을 보낸다.

subscribe : store의 변화를 알 수 있다. HTML을 업데이트 한다

### Redux의 3가지 원칙

1. Single source of truth : 진실은 하나의 근원으로부터<br>
   The global state of your application is stored in an object tree within a single store.<br>
   애플리케이션의 모든 상태는 하나의 저장소 안에 하나의 객체 트리 구조로 저장됩니다.

2. State is read-only : state를 변형시키면 안 된다.<br>
   The only way to change the state is to emit an action, an object describing what happened.<br>
   state를 변화시키는 유일한 방법은 무슨 일이 벌어지는 지를 묘사하는 action 객체를 전달하는 방법뿐입니다.<br>
   새로운 state를 생성해서, new state objects를 return

3. Changes are made with pure functions<br>
   To specify how the state tree is transformed by actions, you write pure reducers.<br>
   action에 의해 state 트리가 어떻게 변화하는 지를 지정하기 위해 프로그래머는 순수 리듀서를 작성해야합니다.
