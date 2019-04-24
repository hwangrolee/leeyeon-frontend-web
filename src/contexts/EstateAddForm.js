import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: EstateAddFormConsumer } = Context;

class EstateAddFormProvider extends Component {
    state = {
        image: null,
        email: 'test01@gmail.com',
        username: '',
        mobileNumber: '',
        address: '서울특별시 강남구 강남동',
        content: '우후훗',
        price: 100000000,
        buildingName: '강남 아파트',
        builtYear: 2015,
        floor: '',
        size: 22,
        options: {},
    }

    actions = {
        setValue: async (key, value) => {
            await this.setState({ [key]: value });
            console.log(this.state);

        },
        getEstateInfo: () => {
            const { image, address, buildingName, builtYear, size, content, options } = this.state;
            const reader = new FileReader();
            return new Promise((resolve, reject) => {
                reader.readAsDataURL(image);
                reader.onload = (e) => {
                    resolve({
                        image: image,
                        imageBase64: e.target.result,
                        address: address,
                        buildingName: buildingName,
                        builtYear: builtYear,
                        size: size,
                        content: content,
                        options: options
                    });
                }
    
                reader.onerror = (error) => {
                    reject(error);
                }
            });
            
            
        }
    }

    componentDidMount () {
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