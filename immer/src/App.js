import { produce } from "immer";
import React, { useRef, useCallback, useState } from "react";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  // const onChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: [value], //대괄호를 쓰면 해당 이름으로 값을 끌어 올 수 있다.
  //     });
  //   },
  //   [form]
  // );

  // immer 사용: input 수정을 위한 함수
  // const onChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target;
  //     setForm(
  //       produce(form, (draft) => {
  //         draft[name] = value;
  //       })
  //     );
  //   },
  //   [form]
  // );

  // immer + 함수를 첫번째 파라미터로 사용(업데이트 함수로 반환): input 수정을 위한 함수
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      //setForm이 form값을 기준으로 하고 있으니까 가능(draft에 form을 담아 함수 실행)
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); //submit 초기화 방지
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array 에 새 항목 등록
      // setData({
      //   ...data,
      //   array: data.array.concat(info),
      // });

      // immer 사용: array 에 새 항목 등록
      // setData(
      //   produce(data, (draft) => {
      //     draft.array.push(info);
      //   })
      // );

      // // immer + 함수를 첫번째 파라미터로 사용(업데이트 함수로 반환): array 에 새 항목 등록
      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  // const onRemove = useCallback(
  //   (id) => {
  //     setData({
  //       ...data,
  //       array: data.array.filter((info) => info.id !== id),
  //     });
  //   },
  //   [data]
  // );

  // immer 사용: 항목을 삭제하는 함수
  // const onRemove = useCallback(
  //   (id) => {
  //     setData(
  //       produce(data, (draft) => {
  //         draft.array.splice(
  //           draft.array.findIndex((info) => info.id === id), // id를 찾아서 제거 하라
  //           1 // 0이면 제거 하지 말라는 뜻
  //         );
  //       })
  //     );
  //   },
  //   [data]
  // );

  // // immer + 함수를 첫번째 파라미터로 사용(업데이트 함수로 반환): 항목을 삭제하는 함수
  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id), // id를 찾아서 제거 하라
          1 // 0이면 제거 하지 말라는 뜻
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
