import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import { FaCheck } from "react-icons/fa";

const SubmitInput = ({ handleClick, inputValue, onChange }) => (
  <div>
    <TextField
      value={inputValue || ""}
      onChange={onChange}
      label="Person ID"
      size="small"
    />
    <IconButton onClick={handleClick}>
      <FaCheck size={20} color="green" />
    </IconButton>
  </div>
);

export default SubmitInput;
