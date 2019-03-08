import React, { Component } from "react";
import classNames from 'classnames';
import styles from './RealEstateInsert.scss';
import { withStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";

const cx = classNames.bind(styles);

class RealEstateInsert extends Component {
    state = {
        username: '',
        email: '',
        mobileNumber: '',
        detail: '',
        address: ''
    }

    handleChange = (e) => {
        const { name, value, type } = e.target;
        switch(type) {
            case 'checkbox':
                this.setState({
                    [name]: e.target.checked
                })
                break;
            default:
                this.setState({
                    [name]: value
                })
                break;
        }
        
    }

  render() {
    const { disabled } = this.props;
    return (
      <Grid container xs={12}>
        <Grid item xs={12} className={cx('text-field')}>
          <TextField
            id="username"
            name="username"
            type="text"
            label="성함"
            fullWidth={true}
            disabled={disabled}
            onChange={this.handleChange}
            value={this.state.username}
            required={true}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} className={cx('text-field')}>
          <TextField
            id="email"
            name="email"
            type="text"
            label="이메일"
            fullWidth={true}
            disabled={disabled}
            required={true}
            placeholder="proof@proof.kr"
            onChange={this.handleChange}
            value={this.state.email}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} className={cx('text-field')}>
          <TextField
            id="mobileNumber"
            name="mobileNumber"
            type="text"
            label="연락처"
            fullWidth={true}
            disabled={disabled}
            required={true}
            placeholder="010-1234-1234"
            onChange={this.handleChange}
            value={this.state.mobileNumber}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} className={cx('text-field')}>
          <TextField
            id="address"
            name="address"
            type="text"
            label="주소"
            fullWidth={true}
            disabled={disabled}
            required={true}
            placeholder="서울특별시 xx구 xx동"
            onChange={this.handleChange}
            value={this.state.address}
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} className={cx('text-field')}>
          <TextField
            id="detail"
            name="detail"
            type="text"label="부가설명"
            fullWidth={true}
            disabled={disabled}
            placeholder="부가설명"
            onChange={this.handleChange}
            value={this.state.detail}
            margin="normal"
            multiline
          />
        </Grid>
      </Grid>
    );
  }
}

export default RealEstateInsert;
