import React, {useState} from 'react';
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  const [inputTitle, setInputTitle] = useState('');
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <main className='main'>
      <Header />
      <Form inputTitle={inputTitle} setInputTitle={setInputTitle} input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
