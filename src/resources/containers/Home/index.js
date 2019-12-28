import React from "react";
import { connect } from "react-redux";
import HomeComponent from "../../components/Home/index";
import { sendRequestAction, getPerson } from "../../../redux/actions/index";

const HomeContainer = props => <HomeComponent {...props} />;

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(sendRequestAction("https://swapi.co/api/people/?page=1"));
      dispatch(getPerson("https://swapi.co/api/people/1/"));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
