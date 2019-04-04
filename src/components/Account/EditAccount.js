import React, { Component } from "react";
import {
    Button,
    TextField
} from "@material-ui/core";

import classNames from 'classnames';
import styles from './EditAccount.scss';
const cx = classNames.bind(styles);

export default class EditAccount extends Component {
  state = {
    email: "",
    password: "",
    rpassword: "",
    newEmail: ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      email: nextProps.email
    };
  }

  handleChange = e => {
      const { name, value, type } = e.target;
      switch(type) {
          default:
            this.setState({
                [name]: value
            });
            break;
      }
  }

  handleSubmit = e => {
    e.preventDefault();

    return false;
  }

  render () {
      return (
        <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <TextField id="email" name="email" type="email" label="사용자 이메일" placeholder="새로운 이메일을 입력하세요" value={this.state.email} onChange={this.handleChange} fullWidth margin="normal" />
                <TextField id="password" name="password" type="password" label="새로운 비밀번호" placeholder="새로운 비밀번호를 입력하세요" value={this.state.password} onChange={this.handleChange} fullWidth margin="normal"/>
                <TextField id="rpassword" name="rpassword" type="password"label="새로운 비밀번호 확인" placeholder="새로운 비밀번호를 다시 입력하세요" value={this.state.password} onChange={this.handleChange} fullWidth margin="normal" />
                <div style={{ width: '100%', textAlign: 'right', marginTop: '30px' }}>
                    <Button type="submit" size="large" className={cx('submit-button')} style={{borderRadius:0}}>사용자 정보 수정</Button>
                </div>
            </form>

        </React.Fragment>
      )
  }
}
