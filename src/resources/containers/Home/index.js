import React, { useState } from "react";
import { connect } from "react-redux";
import HomeComponent from "../../components/Home/index";
import getPersonSelector from "../../../redux/selectors";
import { fetchPerson } from "../../../redux/reducers/personReducer";
import {
  fetchPeoples,
  resetPeoples
} from "../../../redux/reducers/peoplesReducer";
import UnmountWrapper from "../../../shared-components/UnmountWrapper/UnmountWrapper";

const HomeContainer = ({
  handleClick,
  handleGetPerson,
  handleGetPeoples,
  ...props
}) => {
  const [inputPersonValue, setInputPersonValue] = useState(null);
  const buttonsAction = [
    { text: "Get person and peoples", callback: handleClick },
    { text: "Get person", callback: handleGetPerson },
    { text: "Get peoples", callback: handleGetPeoples }
  ];

  const handlePersonClick = () => {
    handleGetPerson(inputPersonValue);
  };

  const onChangePersonInput = e => {
    setInputPersonValue(e.target.value);
  };

  return (
    <HomeComponent
      {...props}
      handlePersonClick={handlePersonClick}
      inputPersonValue={inputPersonValue}
      buttonsAction={buttonsAction}
      onChangePersonInput={onChangePersonInput}
    />
  );
};

const getStarWars = state => {
  console.log("Computing star wars peoples");
  return state.starWarsPeoples;
};

const mapStateToProps = state => {
  return {
    singlePerson: getPersonSelector(state),
    starWarsPeoples: getStarWars(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(fetchPeoples("https://swapi.co/api/people/?page=1"));
      dispatch(fetchPerson("https://swapi.co/api/people/1/"));
    },
    handleGetPerson: payload => {
      const personId = typeof payload === "string" ? payload : "1";
      const url = `https://swapi.co/api/people/${personId}/`;
      dispatch(fetchPerson(url));
    },
    handleGetPeoples: () =>
      dispatch(fetchPeoples("https://swapi.co/api/people/?page=1")),
    unmountCallback: () => dispatch(resetPeoples())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnmountWrapper(HomeContainer));
