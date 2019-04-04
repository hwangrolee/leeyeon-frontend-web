import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: EstateAddFormConsumer } = Context;

class EstateAddFormProvider extends Component {
    state = {
        image: null,
        email: '',
        username: '',
        mobileNumber: '',
        address: '',
        content: '',
        price: '',
        builtDate: '',
        floor: '',
        size: '',
        options: {},
    }

    actions = {
        setValue: (key, value) => {
            this.setState({ [key]: value });
        }
    }

    render () {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

function withEstateForm(WrappedComponent) {
    return function WithEstateForm(props) {
        return (
            <EstateAddFormConsumer>
                {
                    ({ state, actions }) => (
                        <WrappedComponent {...state} {...actions} {...props} />
                    )
                }
            </EstateAddFormConsumer>
        )
    }
}

export {
    EstateAddFormProvider, EstateAddFormConsumer, withEstateForm
}