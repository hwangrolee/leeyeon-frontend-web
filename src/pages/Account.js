import React, { Component } from "react";
import {
  Grid,
  Typography,
  Tab,
  Tabs,
  TextField,
  Input,
  Button
} from "@material-ui/core";
import {} from "@material-ui/icons";

import { EditAccount } from "../components/Account";
import { RealEstateSummary } from "../components/RealEstate";

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
          <Grid item xs={12} style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-end'}}>
            <Typography
              variant="body1"
              style={{ alignSelf: 'center'}}
            >
              보유토큰: 0.000001
            </Typography>
            <Button color="secondary" variant="outlined" size="small" style={{margin: '0px 5px'}}>충전</Button>
            <Button color="primary" variant="outlined" size="small" style={{margin: '0px 5px'}}>환전</Button>
          </Grid>
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
              <div style={{ marginTop: "50px" }}>
                <EditAccount />
                <EditAccount />
              </div>
            )}
            {this.state.value === 1 && (
              <div style={{ marginTop: '50px'}}>
                <RealEstateSummary key={100} onClick={(e) => {
                  console.log(e)
                }}/>
                {/* <RealEstateSummary key={200} /> */}

              </div>
            )}
            {this.state.value === 2 && <div>등록한 주거증명</div>}
          </Grid>
        </Grid>
      </div>
    );
  }
}
