import React, { Component } from 'react';
import { Signup as SignupComponent } from 'components/Signup';
import { VerifyEmail } from 'components/Verify';

export default class Signup extends Component {

    render() {
        return (
            <div>
                <SignupComponent/>
                {/* <VerifyEmail/> */}
            </div>
        )
    }
}