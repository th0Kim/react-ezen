import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);//nextId를 지역변수로 이 컴포넌트에서만 사용한다.
  const onInsert = useCallback((text) => {//text 값만 받아오기
    const todo = {
      id: nextId.current,//4
      text,
      checked: false,
    }
    setTodos(todos.concat(todo));//복제한 todos에 id가 4인 todo를 추가 
    nextId.current += 1; // nextId 1씩 더하기 => 5
  },[todos]);

  const onRemove = useCallback((id) => {
    // setTodos는 업데이트 전 임시 저장 공간
    setTodos(todos.filter((todo) => todo.id !== id));// 선택한 id만 빼고 업데이트(선택한 id 삭제)
  }, [todos]);

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked} : todo, )//...todo로 새로운 배열로 복사하고, 선택한 id가 같으면 true면 false로 바꾸고 false면 true로 바꿔라 : 선택한 id가 아니면 기존 todo로 유지
    );
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}  />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
