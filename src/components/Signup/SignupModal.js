import React, { Component } from "react";
import RegExp from "lib/RegExp";
import classNames from "classnames";
import styles from "./SignupModal.scss";
import SendedEmailModal from './SendedEmailModal';
import { withSnackbar } from 'notistack';
import { Account } from '../../api';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import {} from "@material-ui/icons";

const cx = classNames.bind(styles);

/**
 * 회원가입 컴포넌트
 */
 class SignupModal extends Component {
  state = {
    email: "",
    password: "",
    rpassword: "",
    terms: true,
    disabled: false,
    showSendedEmailModal: false,
  };

  componentDidMount() {}

  _openSendedEmailModal = e => {
    this.setState({ showSendedEmailModal: true });
  }

  _closeSendedEmailModal = e => {
    this.setState({ showSendedEmailModal: false });
  }

  handleChange = async e => {
    const { name, value, type, checked } = e.target;
    switch (type) {
      case "checkbox":
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
  };

  verifyFormData = async () => {
    const { email, password, rpassword, terms } = this.state;

    if (RegExp.verifyEmail(email) === false) {
      console.log("incorrect email");
      this.props.enqueueSnackbar(`${email}은 이메일 양식이 아닙니다.`, { variant: 'success' });
      return false;
    }

    await Account.validatePassword(password).then(res => {
      const { result, message, data } = res;
      const code = parseInt(result);
      if(code !== 200) {
        this.props.enqueueSnackbar(message, { variant: 'error' });
      } else {
        this.props.enqueueSnackbar(`Level ${data.passlevel}. 인증되었습니다.`, { variant: 'success' });
      }
    }).catch(error => {
        this.props.enqueueSnackbar('서버와의 통신이 원홀하지 않습니다.', { variant: 'error' });
    });


    if (password !== rpassword) {
      this.props.enqueueSnackbar('비밀번호가 다릅니다.', { variant: 'error' });
      return false;
    }

    if (terms === false) {
      return false;
    }

    return true;
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.verifyFormData();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    
    Account.signup(data).then(res => {
      const { result, message, data } = res;
      
      const code = parseInt(result);
      if(code === 200) {
        const { status, userKey } = data;
        if(parseInt(status) === 1) {
          localStorage.setItem('userKey', userKey)
        }
      } else {
        this.props.enqueueSnackbar('회원가입하지 못했습니다.', { variant: 'error' });
      }
    })
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <DialogTitle align="center">회원가입</DialogTitle>
            <DialogContent>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="이메일"
                    placeholder="이메일을 입력하세요"
                    onChange={this.handleChange}
                    value={this.state.email}
                    fullWidth
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="비밀번호"
                    placeholder="비밀번호를 입력하세요"
                    onChange={this.handleChange}
                    value={this.state.password}
                    fullWidth
                />
                <TextField
                    id="rpassword"
                    name="rpassword"
                    type="password"
                    label="비밀번호 확인"
                    placeholder="비밀번호를 다시 입력하세요"
                    onChange={this.handleChange}
                    value={this.state.rpassword}
                    fullWidth
                />
            </DialogContent>
            <DialogActions className={cx('signup-action')}>
                <Button type="submit" size="large" className={cx('submit-button')} variant="contained" disabled={this.state.disabled} fullWidth>회원가입</Button>
            </DialogActions>
          </form>
        </Dialog>
        <SendedEmailModal open={this.state.showSendedEmailModal} close={this._closeSendedEmailModal} email={this.state.email}/>
      </React.Fragment>
    );
  }
}


export default withSnackbar(SignupModal);