import { useCallback, useReducer, useRef } from 'react';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    // 2500개 데이터 한번에 불러오면 성능에 안좋지
    array.push({
      //concat이 아닌 이유 : 그냥 데이터가 필요해서.. 복사 해올게 없다
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }

  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로 추가
      //{type: 'INSERT', todo:{id:1, text:'todo', checked:false}}
      return todos.concat(action.todo);

    case 'REMOVE': //제거
      //{type: 'REMOVE', id:1}
      return todos.filter((todo) => todo.id !== action.id);

    case 'TOGGLE': //토글
      //{type: 'TOGGLE', id:1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );

    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501); //nextId를 지역변수로 이 컴포넌트에서만 사용한다.

  const onInsert = useCallback((text) => {
    //text 값만 받아오기
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo }); // useReducer > todoReducer에 case INSERT에 todo를 넘김
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id }); // useReducer > todoReducer에 case REMOVE에 id를 넘김
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id }); // useReducer > todoReducer에 case TOGGLE에 id를 넘김
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
