import React from "react";
import SubmitInput from "../../../../shared-components/SubmitInput";

const SinglePerson = ({
  name,
  inputValue,
  handleClick,
  onChangePersonInput
}) => {
  return (
    <div>
      <SubmitInput
        value={inputValue}
        handleClick={handleClick}
        onChange={onChangePersonInput}
      />
      <p>{name}</p>
    </div>
  );
};

export default SinglePerson;
