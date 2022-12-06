import './TodoList.css';

const TodoList = ({todos, setTodos}) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {...item, isDone: !item.isDone};
        }
        return item;
      })
    );
  };

  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkDone = (arr, trueOrFalse) => {
    let resultDone = [];
    for (let todo of arr) {
      if (todo.isDone === trueOrFalse) {
        resultDone.push(
          // <li className='todo-list' key={todo.id}>
          <div className='todo-container' key={todo.id}>
            <h2 className='todo-title'>{todo.title}</h2>
            <div className='todo-context'>{todo.context}</div>
            <div className='buttons'>
              <button className='button-delete button' onClick={() => handleDelete(todo)}>
                삭제하기
              </button>
              <button className='button-complete button' onClick={() => handleComplete(todo)}>
                {trueOrFalse ? '취소' : '완료'}
              </button>
            </div>
          </div>
          // </li>
        );
      }
    }
    return resultDone;
  };

  return (
    <div className='list-container'>
      <h2 className='list-title'>Working..🔥</h2>
      <div className='list-wrapper'>{checkDone(todos, false)}</div>
      <h2 className='list-title'>Done..!🎉</h2>
      <div className='list-wrapper'>{checkDone(todos, true)}</div>
    </div>
  );
};

export default TodoList;
