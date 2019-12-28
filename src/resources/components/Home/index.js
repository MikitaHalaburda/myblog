import React from "react";
import { BaseButton } from "../../../shared-components/Buttons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HomeContentWrapper } from "./style";

const HomeComponent = ({
  handleClick,
  starWarsPeoples,
  singlePerson,
  ...props
}) => (
  <div>
    <BaseButton onClick={handleClick} text="Click" />
    <HomeContentWrapper>
      <div>
        <h1>Single Person</h1>

        {singlePerson.loading ? (
          <CircularProgress />
        ) : (
          <p>{singlePerson.person.name}</p>
        )}
      </div>
      <div>
        <h1>Peoples</h1>
        {starWarsPeoples.loading ? (
          <CircularProgress />
        ) : (
          starWarsPeoples.peoples.map(item => (
            <p key={item.name}>{item.name}</p>
          ))
        )}
      </div>
    </HomeContentWrapper>
  </div>
);

export default HomeComponent;
