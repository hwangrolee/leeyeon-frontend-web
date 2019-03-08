import React, { Component, createContext } from "react";

const Context = createContext();

const { Provider, Consumer: DragAndDropConsumer } = Context;

class DragAndDropProvider extends Component {
  state = {
    file: null,
    loaded: false,
    src: ""
  };

  actions = {
    setFile: file => {
      if (file !== undefined) {
        this.setState({
          file: file,
          loaded: true
        });
      } else {
        this.setState({
          file: null,
          loaded: false
        });
      }
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// HoC 사용
function useDragAndDrop(WrappedComponent) {
  return function UseDragAndDrop(props) {
    return (
      <DragAndDropConsumer>
        {({ state, actions }) => (
          <WrappedComponent
            file={state.file}
            loaded={state.loaded}
            setFile={actions.setFile}
          >
            {props.children}
          </WrappedComponent>
        )}
      </DragAndDropConsumer>
    );
  };
}

export { DragAndDropProvider, DragAndDropConsumer, useDragAndDrop };
