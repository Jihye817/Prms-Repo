import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList = () => {
  const title: string = "오늘 할 일";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "회의하기", isChecked: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  };
  const removeTodo = (itemId: number) => {
    setTodos(todos.filter((todo) => todo.id !== itemId));
  };
  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };
  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="할 일 입력"
            className="inputText"
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <Button variant="success" onClick={addTodo}>
            추가
          </Button>
        </div>
        <p></p>
        <div className="board">
          <ul>
            {todos.map((todo, index) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}
                />
                <span onClick={() => handleTodoClick(todo)}>
                  {todo.isChecked === true ? <del>{todo.text}</del> : todo.text}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="delButton"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
