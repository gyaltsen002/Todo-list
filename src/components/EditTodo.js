import React from "react";
import { GiCancel } from "react-icons/gi";
import "./editTodo.css";

const EditTodo = function (props) {
  const setEditTodo = props.setEditTodo;
  const currentEditTodo = props.currentEditTodo;
  const currentUserId = props.currentUserId;
  const setNewTodo = props.setNewTodo;

  const [changedTodo, setChangedTodo] = React.useState(currentEditTodo);

  const handleSubmit = function (e) {
    e.preventDefault();

    setEditTodo(false);

    setNewTodo((prevTodo) => {
      return prevTodo.map((works) => {
        if (works.id === currentUserId) {
          console.log(works);
          works.todo = changedTodo;
        }
        return works;
      });
    });
  };

  const closeModal = function () {
    setEditTodo(false);
  };

  const handleEditInput = function (e) {
    const { value } = e.target;

    setChangedTodo(value);
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="backdrop_modal edit_change--modal"
      ></div>
      <div className="backdrop edit--backdrop">
        <h1 className="edit--backdrop_title">Edit your Todo-list:-</h1>
        <form onSubmit={handleSubmit} className="edit-backdrop_elms">
          <input type="text" value={changedTodo} onChange={handleEditInput} />
          <button>Done</button>
        </form>
        <GiCancel className="backdrop_cancel" onClick={closeModal} />
      </div>
    </>
  );
};

export default EditTodo;
