import React from "react";
import { connect } from "react-redux";
import HomeComponent from "../../components/Home/index";
import { sendRequestAction, getPerson } from "../../../redux/actions/index";
import getPersonSelector from "../../../redux/selectors";
import HomeWrapper from "./HomeWrapper";

const HomeContainer = ({
  handleClick,
  handleGetPerson,
  handleGetPeoples,
  ...props
}) => {
  const buttonsAction = [
    { text: "Get person and peoples", callback: handleClick },
    { text: "Get person", callback: handleGetPerson },
    { text: "Get peoples", callback: handleGetPeoples }
  ];

  return <HomeComponent {...props} buttonsAction={buttonsAction} />;
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
      dispatch(sendRequestAction("https://swapi.co/api/people/?page=1"));
      dispatch(getPerson("https://swapi.co/api/people/1/"));
    },
    handleGetPerson: () =>
      dispatch(getPerson("https://swapi.co/api/people/1/")),
    handleGetPeoples: () =>
      dispatch(sendRequestAction("https://swapi.co/api/people/?page=1"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWrapper(HomeContainer));
