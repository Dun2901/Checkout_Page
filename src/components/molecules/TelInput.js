import React from "react";
import Input from "../atom/Input";
import { BsTelephoneFill } from "react-icons/bs";

const telInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Enter your phone..."
        label="Phone"
        icon={<BsTelephoneFill />}
      />
    </div>
  );
};

export default telInput;
