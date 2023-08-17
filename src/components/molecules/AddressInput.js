import React from "react";
import Input from "../atom/Input";
import { BsHouseFill } from "react-icons/bs";

const AddressInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Your address..."
        label="Address"
        icon={<BsHouseFill />}
      />
    </div>
  );
};

export default AddressInput;
