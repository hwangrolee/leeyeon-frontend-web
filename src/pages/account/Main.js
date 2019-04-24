import React, { Component } from "react";
import { 
  Grid, 
  Typography, 
  Tab, 
  Tabs, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField
 } from "@material-ui/core";
import {} from "@material-ui/icons";
import { Account as AccountAPI } from '../../api';
import { EditAccount } from "../../components/Account";
import { withSnackbar } from 'notistack';

import classNames from 'classnames';
import styles from './Main.scss';
const cx = classNames.bind(styles);

class Main extends Component {
  state = {
    openDialog: false,
    value: 0
  };

  componentDidMount() {
    const userkey = localStorage.getItem('userkey');
    const email = localStorage.getItem('email');
    console.log(userkey, email);
    this.setState({
      email: email || ''
    });
    AccountAPI.info().then(response => {
      console.log(response);
    })
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

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.handleUpdateAccount();
    return false;
  }

  handleOpenDialog = () => {
    this.setState({
      openDialog: true
    });
  }
  handleCloseDialog = () => {
    this.setState({
      openDialog: false
    })
  }

  handleUpdateAccount = async () => {
     this.props.enqueueSnackbar('사용자 정보를 수정했습니다.', { variant: 'success' });
     this.props.enqueueSnackbar('사용자 정보를 수정하지 못했습니다.', { variant: 'error' });
     this.handleCloseDialog();
  }

  render() {
    return (
      <div style={{ marginTop: "80px" }}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" style={{ color: "#0e0e0ede" }}>MY Account</Typography>
          </Grid>
          <div style={{ height: "100px" }} />
          <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }} >
            <Typography variant="body1" style={{ alignSelf: "center" }}>보유토큰: 0.000001</Typography>
            <Button color="secondary" variant="outlined" size="small" style={{ margin: "0px 5px" }}>충전</Button>
            <Button color="primary" variant="outlined" size="small" style={{ margin: "0px 5px" }}>환전</Button>
          </Grid>
          <Grid item xs={12}>
          <form onSubmit={this.handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="사용자 이메일"
                    placeholder="새로운 이메일을 입력하세요"
                    value={this.state.email}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="새로운 비밀번호"
                    placeholder="새로운 비밀번호를 입력하세요"
                    value={this.state.password}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="rpassword"
                    name="rpassword"
                    type="rpassword"
                    label="새로운 비밀번호 확인"
                    placeholder="새로운 비밀번호를 다시 입력하세요"
                    value={this.state.password}
                    onChange={this.handleChange}
                    fullWidth
                    margin="normal"
                />

                <div style={{width: '100%', textAlign: 'right', marginTop: '30px'}}>
                    <Button type="submit" size="large" className={cx('submit-button')} style={{borderRadius:0}}>사용자 정보 수정</Button>
                </div>
            </form>
          </Grid>
        </Grid>
        <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog}>
            <DialogTitle>개인정보를 수정하시겠습니까?</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions aling="right">
              <Button variant="outlined" size="medium" color="default" onClick={this.handleCloseDialog}>취소</Button>
              <Button variant="outlined" size="medium" color="primary" onClick={this.handleUpdateAccount}>수정</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withSnackbar(Main);