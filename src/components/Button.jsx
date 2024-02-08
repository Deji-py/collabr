import React from "react";

function Button({ children, classname }) {
  return (
    <button
      className={
        " p-2 px-4 rounded-full flex flex-row justify-center items-center bg-primary transition text-white hover:bg-hoverprimary" +
        classname
      }
    >
      {children}
    </button>
  );
}

export default Button;
