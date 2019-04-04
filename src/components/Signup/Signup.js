import React, { Component } from 'react';
import RegExp from 'lib/RegExp';
import classNames from 'classnames';
import styles from './Signup.scss';

const cx = classNames.bind(styles);

/**
 * 회원가입 컴포넌트
 */
export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        rpassword: '',
        terms: false,
        disabled: false
    }

    handleChange = async (e) => {
        const { name, value, type, checked } = e.target;
        switch(type) {
            case 'checkbox':
                await this.setState({
                    [name]: checked
                });
                break;
            default:
                this.setState({
                    [name]: value
                });
                break;
        }

        this.setState({
            disabled: this.verifyFormData() === false
        });
    }

    verifyFormData = () => {
        const { email, password, rpassword, terms } = this.state;

        if (RegExp.verifyEmail(email) === false) {
            console.log('incorrect email');
            return false;
        }

        if(RegExp.verifyPassword(password) === false) {
            console.log('incorrect password');
            return false;
        }

        if(password !== rpassword) {
            return false;
        }

        if(terms === false) {
            return false;
        }


        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        return this.verifyFormData();
    }

    render () {
        const { email, password, rpassword, terms, disabled } = this.state;
        return (
            <form className={cx('signup-wrapper')} onSubmit={this.handleSubmit}>
                <div className={cx('form-group')}>
                    <label className={cx('label-for')} for="email">이메일</label>
                    <input id="email" name="email" type="email" placeholder="이메일을 입력하세요" onChange={this.handleChange} value={email}/>
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label-for')} for="password">비밀번호</label>
                    <input id="password" name="password" type="password" placeholder="" onChange={this.handleChange} value={password}/>
                </div>
                <div className={cx('form-group')}>
                    <label className={cx('label-for')} for="rpassword">비밀번호 확인</label>
                    <input id="rpassword" name="rpassword" type="password" placeholder onChange={this.handleChange} value={rpassword}></input>
                </div>
                <div className={cx('form-group')}>
                    <label>
                        <input type="checkbox" onChange={this.handlechange} checked={terms}/>
                        &nbsp; I agree to Propy's <a href="#" target="_blank">Terms and Conditions Privacy Policy</a> and <a href="#" target="_blank">Cookies Policy</a>
                    </label>
                </div>
                <div className={cx('form-group')}>
                    <button type="submit" className={cx('submit')}>회원가입</button>
                </div>
            </form>
            // <Form className={cx('signup-wrapper')} onSubmit={this.handleSubmit}>
            //     <FormGroup>
            //         <Label>Email</Label>
            //         <Input name="email" type="email" placeholder="이메일을 입력하세요" onChange={this.handleChange} value={email}/>
            //         <small >이메일을 입력해주세요</small>
            //     </FormGroup>
            //     <FormGroup>
            //         <Label>Password</Label>
            //         <Input name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={this.handleChange} value={password}/>
            //         <small>7 ~ 15자, 알파벳 소대문자, 숫자 1개와 특수문자 1개 필수</small>
            //     </FormGroup>
            //     <FormGroup>
            //         <Label>Confirm Password</Label>
            //         <Input name="rpassword" type="password" placeholder="비밀번호를 다시 입력하세요" onChange={this.handleChange} value={rpassword}/>
            //         <small>7 ~ 15자, 알파벳 소대문자, 숫자 1개와 특수문자 1개 필수</small>
            //     </FormGroup>
            //     <FormGroup check>
            //         <Label check className="small"><Input name="terms" type="checkbox" onChange={this.handleChange} checked={terms}/>I agree to Propy's <a href="#" target="_blank">Terms and Conditions Privacy Policy</a> and <a href="#" target="_blank">Cookies Policy</a></Label>
            //     </FormGroup>
            //     <hr/>
                
            //     <Popup 
            //         trigger={<Button type="button" color="primary" className="w-100" disabled={disabled}>Create Account</Button>}
            //         modal
            //         closeOnDocumentClick
            //         className={cx('popup', 'popup-sm')}
            //     >

            //         {
            //             close => (
            //                 <VerifyPhone close={close}/>
            //             )
            //         }
                   
            //     </Popup>                
            // </Form>
        )
    }
}