import React, { Component } from "react";
import RegExp from "lib/RegExp";
import classNames from "classnames";
import styles from "./SignupModal.scss";
import SendedEmailModal from './SendedEmailModal';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from "@material-ui/core";
import {} from "@material-ui/icons";

const cx = classNames.bind(styles);

/**
 * 회원가입 컴포넌트
 */
export default class SignupModal extends Component {
  state = {
    email: "",
    password: "",
    rpassword: "",
    terms: true,
    disabled: false,
    showSendedEmailModal: false,
  };

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

    // this.setState({
    //   disabled: this.verifyFormData() === false
    // });
  };

  verifyFormData = () => {
    const { email, password, rpassword, terms } = this.state;

    if (RegExp.verifyEmail(email) === false) {
      console.log("incorrect email");
      return false;
    }

    if (RegExp.verifyPassword(password) === false) {
      console.log("incorrect password");
      return false;
    }

    if (password !== rpassword) {
      return false;
    }

    if (terms === false) {
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();

    if(true) {
      // form 인증 성공
      // TODO. 이메일 전송 시도

      this.props.close();
      this.setState({
        showSendedEmailModal: true,
      })
    } else {
      // form 인증 실패.
      return false;
    }
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
