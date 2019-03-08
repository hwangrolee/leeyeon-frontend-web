import React, { Component } from "react";
import { Grid, Typography, Tab, Tabs, TextField, Input } from "@material-ui/core";
import {} from "@material-ui/icons";

export default class Account extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div style={{ marginTop: "80px" }}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              style={{ color: "#0e0e0ede" }}
            >
              MY Account
            </Typography>
          </Grid>
          <div style={{ height: "100px" }} />
          <Grid item xs={12}>
            <Tabs
              value={this.state.value}
              variant="fullWidth"
              centered={true}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
            >
              <Tab
                label="내 정보수정"
                style={{ fontSize: "1.2em" }}
                selected={true}
              />
              <Tab
                label="조회한 주거증명"
                style={{ fontSize: "1.2em" }}
                selected={false}
              />
              <Tab
                label="등록한 주거증명"
                style={{ fontSize: "1.2em" }}
                selected={false}
              />
            </Tabs>
            {this.state.value === 0 && (
              <div style={{marginTop: '50px'}}>
                <Grid
                  container
                  spacing={16}
                  style={{ paddingLeft: "25%", paddingRight: "25%" }}
                >
                  <Input
                    fullWidth
                    style={{fontSize: '1.2em'}}
                    placeholder="이름을 입력하세요."
                    label="사용자명"
                    value="username"
                  />
                  <TextField
                  style={{flexBasis:200,fontSize:'50px'}}
                  placeholder="비밀번호를 입력하세요"
                    label="비밀번호"
                    value="asdfadsf"
                  />
                </Grid>
                
              </div>
            )}
            {this.state.value === 1 && <div>조회한 주거증명</div>}
            {this.state.value === 2 && <div>등록한 주거증명</div>}
          </Grid>
        </Grid>
      </div>
    );
  }
}
