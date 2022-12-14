import {v4 as uuidv4} from 'uuid';
import './Form.css';
import {useState} from 'react';

const Form = ({setTodos}) => {
  const [inputTitle, setInputTitle] = useState('');
  const [input, setInput] = useState('');

  // 제목이 입력 되었을 경우 onChange로 실행되는 부분
  const onInputTitleChange = (event) => {
    setInputTitle(event.target.value);
  };
  // 내용이 입력 되었을 경우 onChange로 실행되는 부분
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  //  onSubmit로 실행되는 부분
  const onFormSubmit = (event) => {
    event.preventDefault();

    // 입력 값 체크
    if (!inputTitle || !input) {
      return alert('제목 또는 내용이 입력되지 않았습니다.');
    }

    // setTodos([...todos, {id: uuidv4(), title: inputTitle, context: input, isDone: false}]);
    setTodos((prev) => [...prev, {id: uuidv4(), title: inputTitle, context: input, isDone: false}]);
    setInputTitle('');
    setInput('');
  };
  return (
    <form className='todo-form' onSubmit={onFormSubmit}>
      <div className='input-group'>
        <label className='title' htmlFor='form-title'>
          제목
        </label>
        <input id='form-title' type='text' className='task-input' value={inputTitle} name='text' onChange={onInputTitleChange} />
        <label className='title' htmlFor='form-content'>
          내용
        </label>
        <input id='form-content' type='text' className='task-input' value={input} name='text' onChange={onInputChange} />
      </div>
      <button className='button-add' type='submit'>
        추가하기
      </button>
    </form>
  );
};

export default Form;
