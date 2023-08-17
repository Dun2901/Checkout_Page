import React from "react";
import Input from "../atom/Input";
import { FaCity } from "react-icons/fa";

const CityInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Your city..."
        label="City"
        icon={<FaCity />}
      />
    </div>
  );
};

export default CityInput;
