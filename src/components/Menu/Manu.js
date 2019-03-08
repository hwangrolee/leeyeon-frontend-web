import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";

import { Menu as MenuIcon } from '@material-ui/icons';

import Signup from "components/Signup";
import Login from "components/Login";
import styles from "./Manu.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

export default class Manu extends Component {
  render() {
    const manuList = [
      {
        text: "매물 등록",
        to: "/realEstate/add"
      },
      {
        text: "매물 보기",
        to: "/realEstate"
      },
      {
        text: "내정보",
        to: "/account"
      }
    ];
    return (
      <div style={{flexGrow:1, marginBottom: '20px'}}>
        <AppBar position="static">
          <Toolbar style={{backgroundColor: '#007bff'}}>
            <IconButton color="inherit" aria-label="Menu" style={{marginLeft: -12, marginRight: 20}}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" style={{flexGrow:1}}>
                <Link to="/">Proof of Residence</Link>
            </Typography>
            <Link to="/real-estate/list" style={{}}>매물보기</Link>
            &emsp;&emsp;
            <Link to="/real-estate/add">매물등록</Link>
            &emsp;&emsp;
            <Link to="/account">내정보</Link>
            &emsp;&emsp;
            &emsp;&emsp;
            <Button color="inherit" size="small" style={{fontWeigh:900, color: 'white'}}>로그인</Button>|<Button color="inherit" size="small" style={{fontWeigh:900}}>회원가입</Button>
            {/* <Button color="inherit" size="small" style={{fontWeigh:900}}>로그아웃</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
