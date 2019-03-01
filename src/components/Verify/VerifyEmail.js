import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import * as Icons from 'react-feather/dist';
import styles from './VerifyEmail.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

export default class VerifyEmail extends Component {
    state = {

    }

    render() {
        const { verifingEmail } = this.props;

        return (
            <div className={cx('verify-email-wrapper')}>
                <div className={cx('verify-email-header')}>
                    <div className={cx('icon-wrapper')}>
                        <Icons.Send className={cx('icon')}/>
                        <p>Check your email</p>

                    </div>
                </div>
                <div className={cx('verify-email-body')}>
                    <p>We sent email to <a href="#" >{verifingEmail}</a>. Please check your email and verify your email address</p>
                </div>
                <br/>
                <div className={cx('verify-email-footer')}>
                    <p><a href="#">Send email again</a></p>
                </div>
            </div>
        )
    }
}