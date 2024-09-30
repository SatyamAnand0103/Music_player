import React, { useState, useRef } from "react";

const PopUp = ({ onInputChange }) => {
  const [value, setValue] = useState("");
  const refPopUp = useRef("null");

  let HandlePopUp = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    // onInputChange(e.target.value); // Pass input value back to Aside
  };

  var box = "visible";
  let HandleSubmit = () => {
    onInputChange(value); // Pass input value back to Aside

    if (box == "visible" && value == "") {
      refPopUp.current.style.display = "block";
    } else if (box == "visible" && value != "") {
      refPopUp.current.style.display = "none";
    }
    setValue("");
  };

  return (
    <>
      <div className="PopUpBox" ref={refPopUp}>
        <input
          type="text"
          value={value}
          placeholder=" Your Name"
          onChange={HandlePopUp}
        />
        <br />
        <button onClick={HandleSubmit}>Press Me !</button>
      </div>
    </>
  );
};

export default PopUp;
