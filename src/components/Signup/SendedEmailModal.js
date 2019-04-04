import React, { Component } from "react";
import classNames from "classnames";
import styles from "./SendedEmailModal.scss";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";

import {
  EmailOutlined,
  InfoOutlined
} from "@material-ui/icons";

const cx = classNames.bind(styles);

export default class SendedEmail extends Component {
  interval = null;
  state = {
    email: "",
    disabledSendEmail: false,
    avaliableSendEmailTime: 10000, // 한번 재 전송 후 10초가 지나야 다시 전송할수있다.
    showStacker: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      email: nextProps.email
    };
  }

  _sendEmail = () => {
    this.setState({
      disabledSendEmail: true,
      showStacker: true
    });

    // TODO: 인증 이메일 전송 API 호출

    this.interval = setInterval(() => {
      if (this.state.avaliableSendEmailTime === 0) {
        this.clearInterval();
      } else {
        this.setState({
          avaliableSendEmailTime: this.state.avaliableSendEmailTime - 1000
        });
      }
    }, 1000);
  };

  clearInterval() {
    clearInterval(this.interval);
    this.setState({
      avaliableSendEmailTime: 10000,
      disabledSendEmail: false
    });
  }

  handleClose = e => {
    this.clearInterval();
    this.props.close();
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <EmailOutlined
              style={{
                color: "#007bff",
                fontSize: "9rem",
                textAlign: "center",
                width: "100%",
                marginBottom: "0.5rem"
              }}
            />
            <DialogContentText>
              <strong>{this.state.email} </strong>로 이메일을 발송했습니다.
              <br />
              이메일을 확인하여 <strong>인증버튼</strong>을 클릭하여 회원가입을
              완료하세요.
              <br />
              <br />
              <Typography align="right" variant="caption">
                <InfoOutlined style={{ fontSize: "0.8rem" }} />
                &nbsp;이메일이 도착하지 않았다면 <strong>이메일 재발송</strong>
                버튼을 클릭하세요.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions className={cx("modal-action")}>
            <Button
              type="button"
              size="large"
              className={cx("submit-button")}
              variant="contained"
              disabled={this.state.disabledSendEmail}
              onClick={this._sendEmail}
              fullWidth
            >
              이메일 재발송
              {this.state.avaliableSendEmailTime < 10000 ? (
                <Typography variant="caption" align="right" color="default">
                  ({this.state.avaliableSendEmailTime / 1000}초 후 발송 가능)
                </Typography>
              ) : (
                ""
              )}
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.showStacker}
          autoHideDuration={4000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={() => {
            this.setState({ showStacker: false });
          }}
        >
          <SnackbarContent
            style={{ backgroundColor: "#2abb31" }}
            message={
              <span id="message-id">
                <strong>{this.state.email}</strong> 로 이메일을 발송했습니다.
              </span>
            }
          />
        </Snackbar>
      </React.Fragment>
    );
  }
}
