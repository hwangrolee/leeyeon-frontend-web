import React from "react";
import { CardActions, CardContent, Grid, TextField } from "@material-ui/core";
import className from 'classnames';
import styles from './InfoForm.scss';

const cx = className.bind(styles);

export default class InfoForm extends React.Component {
  state = {
    username: "",
    email: "",
    mobileNumber: "",
    detail: "",
    address: ""
  };
  handleChange = e => {
    const { name, value, type } = e.target;
    switch (type) {
      case "checkbox":
        this.setState({
          [name]: e.target.checked
        });
        break;
      default:
        this.setState({
          [name]: value
        });
        break;
    }
  };

  render() {
    const { disabled } = this.props;
    return (
      <CardActions>
        <div
          style={{
            height: "37vw",
            textAlign: "center",
            paddingTop: "1vw",
            paddingBottom: "1vw",
            width: "100%",
            borderRight: "solid 1px #eae8e8"
          }}
        >
          <img
            style={{ height: "100%", width: "auto" }}
            src={URL.createObjectURL(this.state.image)}
          />
        </div>
        <CardContent>
          <Grid container xs={12}>
            <Grid item xs={12} className={cx("text-field")}>
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
            <Grid item xs={12} className={cx("text-field")}>
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
            <Grid item xs={12} className={cx("text-field")}>
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
            <Grid item xs={12} className={cx("text-field")}>
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
            <Grid item xs={12} className={cx("text-field")}>
              <TextField
                id="detail"
                name="detail"
                type="text"
                label="부가설명"
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
        </CardContent>
      </CardActions>
    );
  }
}
