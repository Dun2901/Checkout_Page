import React from "react";
import Input from "../atom/Input";
import { ImEarth } from "react-icons/im";

const CountryInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Your country..."
        label="Country"
        icon={<ImEarth />}
      />
    </div>
  );
};

export default CountryInput;
