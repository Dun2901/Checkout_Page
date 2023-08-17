import React from "react";
import Input from "../atom/Input";
import { MdEmail } from "react-icons/md";

const EmailInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Enter your name..."
        label="E-mail"
        icon={<MdEmail />} // Pass the icon component here
      />
    </div>
  );
};

export default EmailInput;
