import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized'; //스크롤을 하지 않으면 listitem이 랜더링 되지 않음
import './TodoList.scss';
import React, { useCallback } from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [todos, onRemove, onToggle],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length} //9개
      rowHeight={57} //item의 border를 포함한 높이
      rowRenderer={rowRenderer}
      List={todos} //List에 쓸 객체
      style={{ outLine: 'none' }} //List 기본 아웃라인 제거
    ></List>
  );
};

export default React.memo(TodoList);
