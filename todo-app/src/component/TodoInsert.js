import { IoIosAdd } from 'react-icons/io';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []); //처음에만 랜더링해서 함수 최적화가 됨

  // submit이 발생 할 때 onInsert가 실행
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault(); //새로고침 막기
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <IoIosAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
