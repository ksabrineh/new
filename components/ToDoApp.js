"use client";
import { Add, DeleteForever, Edit, Save } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function ToDoApp() {
  const [todoList, setTodosList] = useState([
    {
      text: "task1",
      completed: true,
    },
    {
      text: "task2",
      completed: false,
    },
  ]);
  const [formValue, setFormValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    setTodosList([...todoList, { text: formValue, completed: false }]);
    setFormValue("");
  };

  const deleteTodo = (index) => {
    setTodosList(todoList.filter((item, i) => i !== index));
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditValue(todoList[index].text);
  };

  const saveEdit = () => {
    const updatedTodos = todoList.map((todo, index) =>
      index === editIndex ? { ...todo, text: editValue } : todo
    );
    setTodosList(updatedTodos);
    setEditIndex(null);
    setEditValue("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = todoList.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodosList(updatedTodos);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
    setTodosList(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <div className="border p-2 shadow-md rounded-md flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold">To Do App</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="new task"
            className="border p-2 text-xs rounded-md"
          />
          <button onClick={addTodo}>
            <Add color="success" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {todoList.map((todo, index) => (
          <div
            key={index}
            className="flex gap-1 bg-slate-100 shadow-md p-2 rounded-md"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            {editIndex === index ? (
              <div className="flex gap-1">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="border p-2 rounded-md"
                />
                <button onClick={saveEdit}>
                  <Save color="info" />
                </button>
              </div>
            ) : (
              <div className="flex gap-1">
                <span className={`${todo.completed && "line-through"}`}>
                  {todo.text}
                </span>
                <button onClick={() => editTodo(index)}>
                  <Edit color="warning" />
                </button>
                <button onClick={() => deleteTodo(index)}>
                  <DeleteForever color="error" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
