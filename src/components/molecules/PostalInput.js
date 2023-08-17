import React from "react";
import Input from "../atom/Input";
import { FaMapMarkerAlt } from "react-icons/fa";

const PostalInput = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Your postal code..."
        label="Postal code"
        icon={<FaMapMarkerAlt />}
      />
    </div>
  );
};

export default PostalInput;
