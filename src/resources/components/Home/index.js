import React, { useCallback } from "react";
import { HomeContentWrapper } from "./style";
import HomeContentSlice from "./features/HomeContentSlice";
import ActionButtons from "./features/ActionButtons";

const HomeComponent = ({
  starWarsPeoples,
  singlePerson,
  buttonsAction,
  ...props
}) => (
  <div>
    <ActionButtons actionButtons={buttonsAction} />
    <HomeContentWrapper>
      <HomeContentSlice
        title="Peoples"
        loading={starWarsPeoples.loading}
        render={useCallback(
          () =>
            starWarsPeoples.peoples.map(item => (
              <p key={item.name}>{item.name}</p>
            )),
          [starWarsPeoples.peoples]
        )}
      />
      <HomeContentSlice
        title="Single Person"
        loading={singlePerson.loading}
        render={useCallback(
          () => (
            <p>{singlePerson.person.name}</p>
          ),
          [singlePerson.person.name]
        )}
      />
    </HomeContentWrapper>
  </div>
);

export default HomeComponent;
