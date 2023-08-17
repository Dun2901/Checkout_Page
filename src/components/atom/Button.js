import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-orange-500 text-white px-4 py-2 rounded-xl w-40 h-14 float-right">
      {text}
    </button>
  );
};

export default Button;
