import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; //클래스 이름에 따른 조건식 함수 라이브러리
import './TodoListItem.scss';
import React from 'react';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  //부모로 부터 상속 받은 값들
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem); // todo, onRemove, onToggle가 바뀌지 않으면 컴포넌트를 리랜더링 하지 않게 함
