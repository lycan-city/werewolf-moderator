import React, { Component } from 'react';

export default (WrappedComponent, predicate, command) => {
  class WithPreexecute extends Component {

    componentWillMount() {
      if (predicate(this.props)) {
        command(this.props);
      }
    }

    render() {
      if (predicate(this.props)) {
        return null;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  WithPreexecute.displayName = `withPreexecute(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithPreexecute;
};
