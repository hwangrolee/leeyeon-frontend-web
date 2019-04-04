import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { SignupModal } from "../../components/Signup";
import { LoginModal } from "../../components/Login";
import AccountMenu from './AccountMenu';
import styles from "./Menu.scss";
import classNames from "classnames";
const cx = classNames.bind(styles);

export default class Menu extends Component {
  state = {
    isLogin: true,
    showLoginModal: false,
    showSignupModal: false,
    showSendedEmailModal: false,
    sendedEmail: '',
  }

  _openLoginModal = e => {
    this.setState({ showLoginModal: true })
  }

  _closeLoginModal = e => {
      this.setState({showLoginModal: false })
  }

  _openSignupModal = e => {
    this.setState({ showSignupModal: true })
  }

  _closeSignupModal = e => {
    this.setState({ showSignupModal: false })
  }

  _openSendedEmailModal = e => {
    this.setState({ showSendedEmailModal: true });
  }

  _closeSendedEmailModal = e => {
    this.setState({ showSendedEmailModal: false });
  }


  render() {
    const { isLogin } = this.state;

    return (
      <div style={{flexGrow:1, marginBottom: '20px'}}>
        <AppBar position="static">
          <Toolbar style={{backgroundColor: '#007bff'}}>
            <Typography variant="h6" color="inherit" style={{flexGrow:1}}>
                <Link to="/">Proof of Residence</Link>
            </Typography>
            <Link to="/estate/list" style={{}}>매물보기</Link>
            &emsp;&emsp;
            <Link to="/estate/add">매물등록</Link>
            &emsp;&emsp;
            {/* 내정보 */}
            <AccountMenu/>
            &emsp;&emsp;
            &emsp;&emsp;
            {
              isLogin ? (
                <Button color="inherit" size="small" style={{fontWeight:900}} onClick={this._openLoginModal}>로그인</Button>
              ) : ''
            }
            |
            {
              isLogin ? (
                <Button color="inherit" size="small" style={{fontWeight:900}} onClick={this._openSignupModal}>회원가입</Button>
              ): ''
            }

            {
              isLogin === false ? (
                <Button color="inherit" size="small" style={{fontWeight:900}}>로그아웃</Button>
              ) : ''

            }
            
          </Toolbar>
        </AppBar>
        <LoginModal open={this.state.showLoginModal} close={this._closeLoginModal} />
        <SignupModal open={this.state.showSignupModal} close={this._closeSignupModal} />
        
      </div>
    );
  }
}
