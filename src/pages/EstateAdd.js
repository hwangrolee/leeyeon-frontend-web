import React, { Component } from "react";
import { Link as RouterLink, Switch, Route } from "react-router-dom";
import DropZone from "react-dropzone";
import { withStyles } from "@material-ui/core/styles";
import qs from "query-string";
import EstateInsert from "../components/Estate/EstateInsert";
import {
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Link
} from "@material-ui/core";

import {
  Visibility,
  VisibilityOff,
  CheckCircleOutline,
  Done,
  SendOutlined,
  Send,
  SendSharp,
  Rotate90DegreesCcw
} from "@material-ui/icons";

import { grey, common } from "@material-ui/core/colors";
import {
  Terms,
  UploadImage,
  InfoForm,
  SubInfoForm,
  ReportForm
} from "./estate/add";

import classNames from "classnames";

const cx = classNames.bind(require("../styles/_utils.scss"));

const styles = theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    backgroundColor: grey[500],
    color: common.white,
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

class EstateAdd extends Component {
  state = {
    steps: [
      "약관 동의",
      "이미지 등록",
      "상세정보입력(1)",
      "상세정보입력(2)",
      "결과"
    ],
    activeStep: 0,
    skipped: new Set(),
    image: null,
    realEstateInfo: null,
    sendedEmail: false,
    sendedCode: false,
    expirationSecond: 300,
    interval: null
  };

  onDrop = (acceptedFiles, rejectedFiles, ...props) => {
    const image = acceptedFiles[0];
    this.setState({ image: image });
  };

  isStepOptional = step => step === 1;

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleDisable() {
    const { activeStep, image } = this.state;
    switch (activeStep) {
      case 0:
        return false;
      case 1:
        return image === null;
      case 2:
        return false;
      case 3:
        return false;
      case 4:
        return false;
      default:
        return false;
    }
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return "약관";
      case 1:
        return this.getDropZoneContent();
      case 2:
        return this.getEditForm();
      case 3:
        return this.getEditFormForDetail();
      case 4:
        return "success or fail";
      default:
        return "Undefined";
    }
  }

  getDropZoneContent() {
    return (
      <DropZone accept="image/*" onDrop={this.onDrop}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
          acceptedFiles,
          rejectedFiles
        }) => {
          return (
            <div {...getRootProps()} style={{ height: "40vw" }}>
              <input {...getInputProps()} />

              {this.state.image ? (
                <div
                  style={{
                    height: "38vw",
                    textAlign: "center",
                    paddingTop: "1vw",
                    paddingBottom: "1vw"
                  }}
                >
                  <img
                    style={{ width: "auto", height: "100%" }}
                    src={URL.createObjectURL(this.state.image)}
                  />
                </div>
              ) : (
                <div>{isDragAccept ? "Drop" : "Drag"} files here...</div>
              )}
            </div>
          );
        }}
      </DropZone>
    );
  }

  getTerms() {}

  getEditForm() {
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
          <EstateInsert />
        </CardContent>
      </CardActions>
    );
  }

  getEditFormForDetail() {
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
          <EstateInsert disabled={true} />
          <Grid>추가 입력사항</Grid>
        </CardContent>
      </CardActions>
    );
  }

  getReportForm() {
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
          <EstateInsert disabled={true} />
        </CardContent>
      </CardActions>
    );
  }

  handleExpirationSecond = () => {
    this.setState(state => ({
      expirationSecond: state.expirationSecond - 1
    }));
  }

  handleDialogClose = () => {
    clearInterval(this.state.interval);
    this.setState({
      sendedCode: false
    })
  }

  handleSendCodeForVerifingPhone = () => {
    this.setState({
      expirationSecond: 300,
      sendedCode: true,
      interval: setInterval(() => {
        if(this.state.expirationSecond === 0) {
          clearInterval(this.state.interval);
        }
        this.handleExpirationSecond();
      }, 1000)
    });
  }

  handleSendEmail = () => {
    this.setState({
      sendedEmail: true
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const { activeStep, steps, image } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="title" component="h2" align="center">
                  이미지 업로드
                </Typography>
                <DropZone accept="image/*" onDrop={this.onDrop}>
                  {({
                    getRootProps,
                    getInputProps,
                    isDragActive,
                    isDragAccept,
                    isDragReject,
                    acceptedFiles,
                    rejectedFiles
                  }) => {
                    return (
                      <div
                        {...getRootProps()}
                        style={{ height: "340px", paddingTop: "20px" }}
                      >
                        <input {...getInputProps()} />

                        {this.state.image ? (
                          <div
                            style={{
                              height: "inherit",
                              textAlign: "center",
                              paddingTop: "5px",
                              paddingBottom: "5px"
                            }}
                          >
                            <img
                              style={{ width: "auto", height: "100%" }}
                              src={URL.createObjectURL(this.state.image)}
                            />
                          </div>
                        ) : (
                          <div>
                            <div>
                              {isDragAccept ? "Drop" : "Drag"} files here...
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }}
                </DropZone>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="title" component="h2" align="center">
                  필수 입력사항
                </Typography>
                <Grid container spacing={16}>
                  <Grid item md={4} sm={4} className={cx("text-field")}>
                    <TextField
                      id="username"
                      name="username"
                      type="text"
                      label="성함"
                      placeholder="홍길동"
                      fullWidth={true}
                      onChange={this.handleChange}
                      value={this.state.username}
                      required={true}
                      margin="dense"
                    />
                  </Grid>
                  <Grid item md={4} sm={4} className={cx("text-field")}>
                  <TextField
                      id="email"
                      name="email"
                      type="text"
                      label="이메일"
                      fullWidth={true}
                      required={true}
                      placeholder="proof@proof.kr"
                      onChange={this.handleChange}
                      value={this.state.email}
                      margin="dense"
                    />
                    
                  </Grid>
                  <Grid item md={4} sm={4} className={cx("text-field")}>
                  <FormControl
                      style={{
                        flexBasis: 200,
                        marginTop: "8px",
                        width: "100%"
                      }}
                    >
                      <InputLabel htmlFor="adornment-contractß">연락처</InputLabel>
                      <Input
                        id="mobileNumber"
                        name="mobileNumber"
                        type="text"
                        label="연락처"
                        fullWidth={true}
                        required={true}
                        placeholder="010-1234-1234"
                        onChange={this.handleChange}
                        value={this.state.mobileNumber}
                        margin="dense"
                        endAdornment={
                          <Grid>
                            <Button color="primary" style={{  marginTop: '-10px'}}  size="small" variant="outlined" onClick={this.handleSendCodeForVerifingPhone}>본인인증</Button>
                            <Dialog open={this.state.sendedCode}>
                              <DialogTitle>휴대폰 인증</DialogTitle>
                              <DialogContent>
                                <TextField
                                  id="verifyCode"
                                  name="verifyCode"
                                  type="number"
                                  helperText={ this.state.expirationSecond >= 0 ? (<div align="right">{this.state.expirationSecond}초</div>) : (<div align="right">0초</div>)}
                                />
                              </DialogContent>
                              <DialogActions align="right">
                                <Button variant="outlined" onClick={this.handleDialogClose}>취소</Button>
                                <Button variant="outlined" color="primary">인증</Button>
                              </DialogActions>
                            </Dialog>
                          </Grid>

                        }
                      />
                    </FormControl>
                    
                  </Grid>
                  <Grid item xs={12} className={cx("text-field")}>
                    <TextField
                      id="address"
                      name="address"
                      type="text"
                      label="주소"
                      fullWidth={true}
                      required={true}
                      placeholder="서울특별시 xx구 xx동"
                      onChange={this.handleChange}
                      value={this.state.address}
                      margin="dense"
                    />
                  </Grid>
                  <Grid item xs={12} className={cx("text-field")}>
                    <TextField
                      id="detail"
                      name="detail"
                      type="text"
                      label="부가설명"
                      fullWidth={true}
                      placeholder="부가설명"
                      onChange={this.handleChange}
                      value={this.state.detail}
                      margin="dense"
                      multiline
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} align="right">
            <Button
              style={{ margin: 5 }}
              color="default"
              variant="outlined"
            >
              초기화
            </Button>
            <Button
              type="submit"
              style={{ margin: 5 }}
              color="primary"
              variant="outlined"
              // // to="add/report"
              // component={<RouterLink to="add/report" />}
            >
              등록
            </Button>
          </Grid>
        </Grid>
              </form>
    );
  }
}

export default withStyles(styles)(EstateAdd);
