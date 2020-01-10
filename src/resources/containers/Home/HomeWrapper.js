import React, { Component } from "react";

function HomeWrapper(WrappedComponent) {
  return class extends Component {
    componentWillUnmount() {
      this.props.handleResetPeoples();
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default HomeWrapper;
