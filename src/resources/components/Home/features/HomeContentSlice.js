import React, { memo } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const HomeContentSlice = ({ title, render, loading }) => (
  <div>
    <h1>{title}</h1>
    {loading ? <CircularProgress /> : render()}
  </div>
);

export default memo(HomeContentSlice);
