import React, { Component } from "react";
import * as Icon from 'react-feather';
import styles from './VerifyPhone.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

export default class VerifyPhone extends Component {
    state = {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        sended: false,
        verifyNumber: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleVerifyPhone = (e) => {
        this.setState({
            sended: true
        })
    }

    render () {
        const { close } = this.props;
        return (
            <div className={cx('verify-wrapper')}>

             {
                        this.state.sended ? (
                                <p>
                                    Check your mobile!
                                    <br/>
                                    We sent you a code via SMS
                                </p>
                        ) : (
                                <p>
                                    Your email is confirmed
                                    <br/>
                                    Next, add your name and mobile number
                                </p>
                        )
                    }
                
                <form className={cx('verify-container')}>
                    <div className={cx('verify-body')}>
                        <div className={cx('form-row')}>
                            <div className={cx('col-md-6')}>
                                <div className={cx('form-group')}>
                                    <label className={cx('label')}>First Name</label>
                                    {/* <Input name="firstName" type="text" placeholder="Your first name" onChange={this.handleChange} value={this.state.firstName}/> */}
                                </div>
                            </div>
                            <div className={cx('col-md-6')}>
                                <div className={cx('form-group')}>
                                    <label className={cx('label')}>Last Name</label>
                                    {/* <Input name="lastName" type="text" placeholder="Your last name" onChange={this.handleChange} value={this.state.lastName}/> */}
                                </div>
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <label>Mobile number</label>
                            {/* <Input name="mobileNumber" type="text" placeholder="Your mobile number" onChange={this.handleChange} value={this.state.mobilenumber}/> */}
                        </div>

                        <div className={cx('form-group', this.state.sended ? 'show': 'hide')}>
                            {/* <Input id="verifyNumber" name="verifyNumber" type="text" placeholder="Enter your code" onChange={this.handleChange} value={this.state.verifyNumber}/> */}
                        </div>
                    </div>
                    <div className={cx('verify-footer')}>
                        {
                            this.state.sended ? (
                                <div className={cx('input-group')}>
                                    {/* <Button type="submit" className={cx('button')} color="primary">Submit code</Button> */}
                                </div>
                            ) : (
                                <div>
                                    <div className={cx('info')}>
                                        <div className={cx('info-left')}>
                                            <Icon.Lock className={cx('icon')}/>
                                        </div>
                                        <div className={cx('info-right')}>
                                            Add your mobile number for an extra layer of security on your account
                                        </div>
                                    </div>
                                    {/* <Button className={cx('button')} color="primary" onClick={this.handleVerifyPhone}>Verify your mobile number</Button> */}
                                </div>
                            )
                        }
                    </div>
                </form>
                <div className={cx('small')}>
                    <small><a href="#close-verify-phone" onClick={close}>Skip for now</a></small>
                </div>
            </div>
            
        )
    }
}