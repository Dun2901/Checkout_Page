import React from "react";

const TextInput = ({ type, placeholder, label, icon }) => {
  const style = {
    container: "mb-5 relative",
    label: "block mb-2",
    input:
      "border border-gray-600 rounded-xl py-3 pl-12 w-full tracking-1 outline-none text-base",
    iconContainer: "absolute bottom-4 left-4 text-xl",
  };
  return (
    <div className={style.container}>
      <label className={style.label}>{label}</label>
      <input className={style.input} type={type} placeholder={placeholder} />
      {icon && (
        <span className={style.iconContainer}>
          {icon} {/* Icon added here */}
        </span>
      )}
    </div>
  );
};

export default TextInput;
