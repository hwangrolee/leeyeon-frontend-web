import React, { Component } from 'react';
import RegExp from 'lib/RegExp';
import classNames from 'classnames';
import styles from './Login.scss';

const cx = classNames.bind(styles);

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        const { email, password } = this.state;
        if (RegExp.verifyEmail(email) === false) {
            return false;
        }

        if(RegExp.verifyPassword(password) === false) {
            return false;
        }

        return true;
    }

    render() {
        const { email, password } = this.state;
        return (
            <form className={cx('login-wrapper')} onSubmit={this.handleSubmit}>
                <div className={cx('form-group')}>
                    <label className={cx('label-for')} for="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="이메일을 입력하세요" value={email}/>
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label-for')} for="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="비밀번호를 입력하세요" value={password}/>
                </div>
                <hr/>
                <button className={cx('submit')} type="submit" color="primary">Login</button>
            </form>
        )
    }
}