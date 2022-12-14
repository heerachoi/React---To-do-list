import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';

import Header from './component/Header';
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  // State
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: '알고리즘',
      context: '알고리즘 문제 풀기',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '리액트',
      context: 'Todo list 만들기',
      isDone: true,
    },
  ]);
  return (
    <main className='main'>
      <Header />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} isDone={false} />
      <TodoList todos={todos} setTodos={setTodos} isDone={true} />
    </main>
  );
}

export default App;
