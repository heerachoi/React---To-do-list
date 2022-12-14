import './TodoList.css';

// Todo 리스트
const TodoList = ({todos, setTodos, isDone}) => {
  // 완료 버튼이 onClick되면 실행되는 부분
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

  // 삭제 버튼이 onClick되면 실행되는 부분
  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Todos와 Work는 false값을 받아오고 Done은 true값을 받아온다.
  // trueOrFalse의 상태에 따라 isDone을 확인해서 resultDone에 추가하여 배열을 return한다.
  const checkDone = (todos, trueOrFalse) => {
    let resultDone = [];
    for (let todo of todos) {
      if (todo.isDone === trueOrFalse) {
        resultDone.push(
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
        );
      }
    }
    return resultDone;
  };

  return (
    <div className='list-container'>
      {/*<h2 className='list-title'>Working..🔥</h2>
  <div className='list-wrapper'>{checkDone(todos, false)}</div> */}
      <h2 className='list-title'>{isDone ? 'Working..🔥' : 'Done..!🎉'}</h2>
      <div className='list-wrapper'>{checkDone(todos, isDone)}</div>
    </div>
  );
};

export default TodoList;
