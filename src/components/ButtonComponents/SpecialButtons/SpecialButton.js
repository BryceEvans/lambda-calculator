import React from "react";

const SpecialButton = (props) => {
  console.log("Props: ", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button specials-button">{props.item}</button>
    </>
  );
};

export default SpecialButton
