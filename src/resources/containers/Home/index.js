import React from "react";
import { connect } from "react-redux";
import HomeComponent from "../../components/Home/index";
import { startAction } from "../../../redux/actions/index";

const HomeContainer = props => <HomeComponent {...props} />;

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(startAction("MESSAGEE"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
