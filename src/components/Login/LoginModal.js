import React, { Component } from "react";
import RegExp from "lib/RegExp";
import classNames from "classnames";
import styles from "./LoginModal.scss";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import { Account as AccountAPI } from '../../api';
import { withSnackbar } from 'notistack';

const cx = classNames.bind(styles);

class LoginModal extends Component {
  state = {
    open: false,
    email: "",
    password: ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      open: nextProps.open
    };
  }

  handleClose = e => {
    this.setState({ open: false });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    if (RegExp.verifyEmail(email) === false) {
      return false;
    }

    await AccountAPI.login({ email: this.state.email, password: this.state.password }).then(response => {
      if(response.data === null) {
        this.props.enqueueSnackbar('가입된 회원이 아닙니다. 회원가입부터 해주세요', { variant: 'error' });
      } else {
        this.props.enqueueSnackbar('로그인했습니다.', { variant: 'success' });
        localStorage.setItem('userkey', response.data.userkey);
        localStorage.setItem('email', email);
        window.location.reload();
      }
    }).catch(error => {
      this.props.enqueueSnackbar('서버와의 통신이 원홀하지 않습니다.', { variant: 'error' });
    });

    return true;
  };

  render() {
    return (
      <React.Fragment>
        <Dialog open={this.props.open} onClose={this.props.close} aria-labelledby="form-dialog-title">
          <form onSubmit={this.handleSubmit}>
            <DialogTitle align="center">로그인</DialogTitle>
            <DialogContent>
              <TextField id="email" name="email" type="email" label="이메일" margin="dense" value={this.state.email} onChange={this.handleChange} fullWidth/>
              <TextField id="password" name="password" type="password" label="비밀번호" placeholder="비밀번호를 입력하세요" margin="dense" value={this.state.password} onChange={this.handleChange} fullWidth/>
            </DialogContent>
            <DialogActions className={cx("login-action")}>
              <Button type="submit" size="large" fullWidth className={cx("submit-button")} variant="contained">로그인</Button>
            </DialogActions>
          </form>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withSnackbar(LoginModal);