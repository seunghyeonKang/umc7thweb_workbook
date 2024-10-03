import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([{ id: 1, task: "투두리스트를 작성해보세요." }]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(0);
  const [editText, setEditText] = useState("");

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        // id: Math.floor(Math.random() * 100) + 2,
        task: text,
      },
    ]);
    setText("");
  };
  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  // 3. 수정하기
  const updateTodo = (id, editText) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? { ...item, task: editText } : item)));
    setEditingId(0);
    // setEditText("");
  };

  return (
    <div
      style={{
        boxSizing: "border-box",
        margin: 0,
        padding: "40px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          style={{
            marginRight: "12px",
            padding: "12px",
            width: "50vw",
          }}
          placeholder="할 일을 적어주세요"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          style={{
            width: "100px",
            height: "43px",

            textAlign: "center",
            fontSize: "14px",
            fontWeight: "900",
            color: "white",

            border: "none",
            backgroundColor: "dimgray",
            cursor: "pointer",
          }}
          type="submit"
          onClick={addTodo}
        >
          할 일 등록
        </button>
      </form>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          width: `calc(50vw + 136px)`,

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {todos.map(({ id, task }, _) => (
          <li
            style={{
              width: `calc(50vw + 136px)`,

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={id}
          >
            {editingId === id ? (
              <>
                <input
                  style={{
                    boxSizing: "border-box",
                    margin: "20px 0",
                    padding: "4px",
                    width: `calc(50vw + 136px - 84px - 84px)`,
                  }}
                  type="text"
                  defaultValue={task}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  style={{
                    width: "72px",
                    height: "28px",
                    marginLeft: "12px",

                    textAlign: "center",

                    border: "none",
                    backgroundColor: "whitesmoke",
                    cursor: "pointer",
                  }}
                  onClick={() => updateTodo(editingId, editText)}
                >
                  수정완료
                </button>
                <button
                  style={{
                    width: "72px",
                    height: "28px",
                    marginLeft: "12px",

                    textAlign: "center",

                    border: "none",
                    backgroundColor: "whitesmoke",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteTodo(id)}
                >
                  삭제하기
                </button>
              </>
            ) : (
              <>
                <h4
                  style={{
                    margin: "20px 0",
                    width: `calc(50vw + 136px - 84px - 84px)`,
                  }}
                >
                  {/* {id}. */}
                  {task}
                </h4>
                <button
                  style={{
                    width: "72px",
                    height: "28px",
                    marginLeft: "12px",

                    textAlign: "center",

                    border: "none",
                    backgroundColor: "whitesmoke",
                    cursor: "pointer",
                  }}
                  onClick={() => setEditingId(id)}
                >
                  수정하기
                </button>
                <button
                  style={{
                    width: "72px",
                    height: "28px",
                    marginLeft: "12px",

                    textAlign: "center",

                    border: "none",
                    backgroundColor: "whitesmoke",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteTodo(id)}
                >
                  삭제하기
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
