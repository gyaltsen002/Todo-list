import React from "react";
import { GiCancel } from "react-icons/gi";
import "./backdrop.css";

const InputBackdrop = function (props) {
  // Getting the changeBackdrop as props to change state of showBackdrop from parent
  const showBackdrop = props.changeBackdrop;
  const handleBackdrop = function () {
    showBackdrop(false);
  };

  return (
    <>
      {/* <Backdrop changeBackdrop={showBackdrop} /> */}
      <div className="backdrop_modal" onClick={handleBackdrop}></div>
      <div className="backdrop">
        <div className="backdrop_elms">
          <h1>Error:-</h1>
          <p>No Todo added.</p>
          <GiCancel className="backdrop_cancel" onClick={handleBackdrop} />
        </div>
      </div>
    </>
  );
};

export default InputBackdrop;
