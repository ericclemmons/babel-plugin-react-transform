import _transformLib from "transform-lib";
const _components = {
  Component: {
    displayName: "Component"
  }
};

const _transformLib2 = _transformLib({
  filename: "%FIXTURE_PATH%",
  components: _components,
  locals: [],
  imports: []
});

function _wrapComponent(id) {
  return function (Component) {
    return _transformLib2(Component, id);
  };
}

import React from "react";

const Component = _wrapComponent("Component")(class Component extends React.Component {
  render() {
    const props = this.props;

    const { children } = props;

    return React.createElement(
      "div",
      null,
      children
    );
  }

});

export default Component;
