import React from "react";
import "./deleteBackdrop.css";
import { GiCancel } from "react-icons/gi";

const DeleteBackdrop = function (props) {
  // Getting id, delete functionality and the backdrop modal change in Backdrop functionality
  const handleDeletion = props.handleDeletion;
  const setConfirmDeletion = props.setConfirmDeletion;
  const id = props.id;

  const handleClick = function (e) {
    const { value } = e.target;

    if (value === "yes") {
      handleDeletion(id);
      setConfirmDeletion(false); // Changing modal
    } else {
      setConfirmDeletion(false); // Changing modal
    }
  };

  const handleModalExit = function () {
    setConfirmDeletion(false); // Changing modal
  };

  return (
    <>
      <div
        className="backdrop_modal del--backdrop"
        onClick={handleModalExit}
      ></div>
      <div className="backdrop delete-backdrop">
        <h1 className="backdrop__des">
          Are you sure you want to delete this todo work ?
        </h1>
        <button
          className="backdrop__btns delete-backdrop__yes"
          onClick={handleClick}
          value={"yes"}
        >
          Yes
        </button>
        <button
          className="backdrop__btns delete-backdrop__no"
          onClick={handleClick}
          value={"no"}
        >
          No
        </button>
        <GiCancel className="backdrop_cancel" onClick={handleModalExit} />
      </div>
    </>
  );
};

export default DeleteBackdrop;
