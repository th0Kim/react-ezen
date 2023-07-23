import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">{text}</div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
