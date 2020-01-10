import React, { Component } from "react";
import PropTypes from "prop-types";

function UnmountWrapper(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      unmountCallback: PropTypes.func.isRequired
    };

    componentWillUnmount() {
      this.props.unmountCallback();
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default UnmountWrapper;
