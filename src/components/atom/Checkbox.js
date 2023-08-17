import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="flex items-center mb-6">
      <input type="checkbox" className="mr-2 w-[21px] h-[21px] rounded-md" />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
