import React from "react";
import DeleteBackdrop from "./DeleteBackdrop";
import EditTodo from "./EditTodo";

const TodoLists = function (props) {
  // To-do userOjbect list and function to set the newObject as props
  let _userWorks = props.works;
  const setNewTodo = props.updateTodo; // Function from Todo.js component(parent)

  // Handling the checkbox click on change
  const handleCheck = function (workId) {
    // console.log(workId, value);
    let copyUserWorks = _userWorks.map((works) => {
      if (works.id === workId) {
        works.done = !works.done;
      }
      return works;
    });

    setNewTodo(copyUserWorks);
  };

  // handle confirmMessage for deletion
  const [confirmDeletion, setConfirmDeletion] = React.useState(null);

  // handling the edit
  const [editTodo, setEditTodo] = React.useState(false);

  // edit value
  const [currentEditTodo, setCurrentEditTodo] = React.useState("");

  const [currentUserId, setCurrentUserId] = React.useState(null);

  const handleMessageDeletion = function () {
    setConfirmDeletion(true);
  };

  // Handling deletion
  const handleDeletion = function (workId) {
    const copyUserWorks = _userWorks.filter((works) => {
      return works.id !== workId;
    });

    console.log("Item deleted.");
    setNewTodo(copyUserWorks);
  };

  // Handling edit.
  const handleEdit = function (e) {
    const { value } = e.target;

    setEditTodo(true);
    setCurrentEditTodo(value);
  };

  const handleCurrentId = function (value) {
    setCurrentUserId(value);
  };

  return _userWorks.map((work) => {
    return (
      <div key={work.id} className="main--lists__el">
        <div className="main--lists__el--body">
          <input
            type="checkbox"
            checked={work.done}
            onChange={() => {
              handleCheck(work.id);
            }}
          />
          <p
            className={
              work.done ? "main--lists__el--done" : "main--lists__el--des"
            }
          >
            {work.todo}
          </p>
        </div>
        <div className="main--lists__els">
          <button
            value={work.todo}
            className="main--lists__el--btn_edit"
            onClick={(e) => {
              handleEdit(e);
              handleCurrentId(work.id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleMessageDeletion();
            }}
            className="main--lists__el--btn_del"
          >
            Delete
          </button>
        </div>
        {confirmDeletion && (
          <DeleteBackdrop
            id={work.id}
            handleDeletion={handleDeletion}
            setConfirmDeletion={setConfirmDeletion}
          />
        )}
        {editTodo && (
          <EditTodo
            setEditTodo={setEditTodo}
            currentEditTodo={currentEditTodo}
            currentUserId={currentUserId}
            setNewTodo={setNewTodo}
            _userWorks={_userWorks}
          />
        )}
      </div>
    );
  });
};

export default TodoLists;
