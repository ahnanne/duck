import { useState } from 'react';

import {
  useSelector, // 조회
  useDispatch, // 업데이트
} from 'react-redux';
import { addTodo, toggleTodo } from './modules/todos';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const [ text, setText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = todos.length + 1; // 중복되지 않는 아이디 생성;
    dispatch(addTodo(newId, text));
  };

  const handleToggleButton = (id) => {
    dispatch(toggleTodo(id));
  };

  console.log(text);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">할 일</label>
        <input id="todo" value={text} onChange={(e) => setText(e.target.value)} />

        <button type="submit">추가</button>
      </form>

      <div>
        <ol>
          {todos.map(({ id, text, done }) =>
            <li key={id}>
              <em>{text}</em>
              {' '}
              {done ? 'O' : 'X'}
              <button type="button" onClick={() => handleToggleButton(id)}>
                {done ? '취소' : '완료'}
              </button>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
}

export default App;
