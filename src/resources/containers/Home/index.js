import React from "react";
import { connect } from "react-redux";
import HomeComponent from "../../components/Home/index";
import { sendRequestAction, getPerson } from "../../../redux/actions/index";
import getPersonSelector from "../../../redux/selectors";

const HomeContainer = props => <HomeComponent {...props} />;

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
