import React, { useCallback } from "react";
import { HomeContentWrapper } from "./style";
import HomeContentSlice from "./features/HomeContentSlice";
import ActionButtons from "./features/ActionButtons";
import SinglePerson from "./features/SinglePerson";

const HomeComponent = ({
  starWarsPeoples,
  singlePerson,
  buttonsAction,
  handlePersonClick,
  onChangePersonInput,
  inputPersonValue,
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
            <SinglePerson
              inputValue={inputPersonValue}
              handleClick={handlePersonClick}
              onChangePersonInput={onChangePersonInput}
              name={singlePerson.person.name}
            />
          ),
          [
            singlePerson.person.name,
            inputPersonValue,
            onChangePersonInput,
            handlePersonClick
          ]
        )}
      />
    </HomeContentWrapper>
  </div>
);

export default HomeComponent;
