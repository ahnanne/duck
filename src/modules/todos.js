/* ----------------- 액션 타입 ------------------ */
const ADD_TODO =  'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* ----------------- 액션 생성 함수 ------------------ */
export const addTodo = (id, text) => ({
  type: ADD_TODO,
  todo: {
    id,
    text,
    done: false,
  },
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

/* ----------------- 모듈의 초기 상태 ------------------ */
const initialState = [
  {
    id: 1,
    text: '청소하기',
    done: false,
  },
];
// todo list

/* ----------------- 리듀서 ------------------ */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}