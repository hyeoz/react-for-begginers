
import { useEffect, useState } from "react";

function App() {
  // state 개념 잘 알아두고 넘어가기!
  const [toDo, setToDo] = useState(""); // state 는 절대 직접적으로 수정할 수 없음! modifier 함수 이용! toDo = "" (X) setTodo("") (O)
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    if (toDo === "") {
      return;
    }
    
    setToDos((currArr) => {return [toDo, ...currArr]}); // 배열 계속 누적하기
    setToDo(""); // 입력되면 다시 초기화시키기
    
  };
  // console.log(toDos);
  return (
    <div>
      <h1>My To Dos</h1>
      <h2>Today's To Dos - {toDos.length}</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Write your to do..." 
          onChange={onChange} 
          value={toDo}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => { // console 에 warning 뜨는 부분 해결 -> index 추가해주기. li 의 key 는 unique id 값 의미
          return (
            <li key={index}>{item}</li>
          );
        })}
      </ul>
    </div>
  )
}

export default App;
