import React from "react";
import Input from "../atom/Input";
import { FaUserCircle } from "react-icons/fa";

const NameInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Your name..."
        label="Full name"
        icon={<FaUserCircle />}
      />
    </div>
  );
};

export default NameInput;
