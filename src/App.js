// useState에 저장해 두었다가 나중에 사용한다.
import React, {useState} from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  //  input에 inputValue 값을 넣어주어야 한다. - setInputValue을 사용해서
  // useState([]) = 타입은 배열을 가리킨다.
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    // console.log('im here', inputValue);
    setTodoList([...todoList, inputValue]); // 원래 내용 + 현재 input
  };

  return (
    <main>
      <input value={inputValue} type='text' onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
