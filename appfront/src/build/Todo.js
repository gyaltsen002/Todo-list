import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./todo.css";
import { key } from "../constants/constants";
import useLocalStorage from "../hooks/useLocalStorage.js";
import InputBackdrop from "../components/InputBackdrop";
import Empty from "../components/Empty";
import TodoLists from "../components/TodoLists";

const Todo = function () {
  // Getting item from local storage
  const localRetrieved = JSON.parse(localStorage.getItem(key));

  // State data of to-do works
  const [todo, setTodo] = React.useState(localRetrieved ? localRetrieved : []);

  // Users new Input
  const [todoInput, setTodoInput] = React.useState("");

  // Handling users to-do inputs and assigning new value to it
  const handleTodo = function (e) {
    const { value } = e.target;
    setTodoInput(value);
  };

  const [showBackdrop, setShowBackdrop] = React.useState(false);

  // Handling the Form submit for the input
  const handleSubmit = function (e) {
    e.preventDefault();

    // checking the input of user
    if (todoInput.length <= 0) {
      setShowBackdrop(true);
      return;
    } else {
      // Updating the to-do state object with new item
      setTodo((prevTodo) => {
        return [...prevTodo, { id: uuidv4(), todo: todoInput, done: false }];
      });
      setShowBackdrop(false);
    }

    // Updating the to-do input state of user
    setTodoInput("");

    // If showBackdrop is true then Render component in the file
  };

  // Updating the data in local storage
  useLocalStorage(key, todo);

  return (
    <>
      {showBackdrop && <InputBackdrop changeBackdrop={setShowBackdrop} />}
      <div className="main">
        <h1 className="main--header">To-Do List.</h1>
        <div className="main--form">
          <form id="todo_form" onSubmit={handleSubmit}>
            <input
              className="main--form__input"
              type="text"
              value={todoInput}
              onChange={handleTodo}
            />
            <button className="main--form__btn">Add</button>
          </form>
        </div>
        <div className="main--lists">
          {todo.length <= 0 && <Empty />}
          {/* Passing the lists of to-do work and setTodo function as props to the Todolists component */}
          <TodoLists works={todo} updateTodo={setTodo} />
        </div>
      </div>
    </>
  );
};

export default Todo;
