import React from 'react'
const AsyncComponent = loadComponent => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Component: null,
      }
    }

    async componentWillMount() {
      let Component = await loadComponent()
      Component = Component.default
      this.setState({Component});
    }

    render() {
      const {Component} = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);

export default AsyncComponent;