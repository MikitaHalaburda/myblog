import React, { Component } from "react";

function HomeWrapper(WrappedComponent) {
  return class extends Component {
    componentWillUnmount() {
      console.log("unmobunt", this.props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default HomeWrapper;
