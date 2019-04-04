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

const cx = classNames.bind(styles);

export default class LoginModal extends Component {
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

  handleSubmit = e => {
    const { email, password } = this.state;
    if (RegExp.verifyEmail(email) === false) {
      return false;
    }

    if (RegExp.verifyPassword(password) === false) {
      return false;
    }

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
