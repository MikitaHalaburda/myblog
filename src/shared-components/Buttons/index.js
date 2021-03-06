import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";

const CustomButton = styled(Button)``;

const BaseButton = ({ text, ...rest }) => (
  <CustomButton {...rest} variant="contained" color="primary">
    {text}
  </CustomButton>
);

export { BaseButton };
