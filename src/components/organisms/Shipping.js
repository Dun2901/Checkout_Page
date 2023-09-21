import React from "react";
import NameInput from "../molecules/NameInput";
import AddressInput from "../molecules/AddressInput";
import CityInput from "../molecules/CityInput";
import CountryInput from "../molecules/CountryInput";
import PostalInput from "../molecules/PostalInput";
import Button from "../atom/Button";
import Checkbox from "../atom/Checkbox";

const Shipping = () => {
  return (
    <div>
      <NameInput />
      <AddressInput />
      <CityInput />
      <div className="flex ">
        <CountryInput />
        <PostalInput />
      </div>
      <Checkbox label="Save this information for next time" />
      <Button text="Continue" />
    </div>
  );
};

export default Shipping;
