import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import VerifyEmail from './VerifyEmail';


export default class SignupPopup extends Component {
    state = {

    }

    render () {
        return (
            <Popup 
                trigger={this.props.children}
                modal
                closeOnDocumentClick
            >

                <VerifyEmail/>
            </Popup>
        )
    }
}