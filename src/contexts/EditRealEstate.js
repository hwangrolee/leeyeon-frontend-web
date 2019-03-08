import React, { Component, createContext } from "react";

const Context = createContext();

const { Provider, Consumer: EditRealEstateConsumer } = Context;

class EditRealEstateProvider extends Component {

  state = {
    steps: [
      "약관 동의",
      "이미지 등록",
      "상세정보입력(1)",
      "상세정보입력(2)",
      "결과"
    ],
    skipped: new Set(),
    activeStep: 0,
    image: undefined,
    realEstateInfo: undefined
  };

  actions = {
    setImage: image => {
      this.setState({ image });
    },
    setRealEstateInfo: realEstateInfo => {
      this.setState({ realEstateInfo: realEstateInfo });
    },
    next: () => {
      this.setState(state => ({
        activeStep: state.activeStep + 1
      }));
    },
    back: () => {
      this.setState(state => ({
        activeStep: state.activeStep - 1
      }));
    },
    reset: () => {
      this.setState({
        activeStep: 0
      });
    },
    isStepOptional: step => {
      return step === 1
    },
    isStepSkipped(step) {
      return this.state.skipped.has(step);
    }
  };

  render() {
    console.log(this.state, this.actions);
    const { state, actions } = this;
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// HoC 사용
function withEditRealEstate(WrappedComponent) {
  return function WithEditRealEstate(props) {
    return (
      <EditRealEstateConsumer>
        {({ state, actions }) => (
          <WrappedComponent {...state} {...actions} {...props} />
        )}
      </EditRealEstateConsumer>
    );
  };
}

export { EditRealEstateProvider, EditRealEstateConsumer, withEditRealEstate };
