import { connect } from "react-redux";
import Todos from "../components/Todo"; //UI
import { changeInput, insert, toggle, remove } from "../modules/todos"; //모듈의 변수 연결

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      changeInput={changeInput}
      onToggle={toggle}
      onInsert={insert}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
