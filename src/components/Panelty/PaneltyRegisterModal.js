import React, { Component } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import classNames from "classnames";
import styles from "./PaneltyRegisterModal.scss";
const cx = classNames.bind(styles);

export default class PaneltyRegisterModal extends Component {
  state = {
    open: false,
    paneltyType: "",
    description: ""
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      open: nextProps.open,
      estate: nextProps.estate
    };
  }

  handleChange = (e, v) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleClose = e => {
    this.props.onClose();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    return (
      <Dialog open={this.state.open} onClose={this.props.onClose} fullWidth={true} maxWidth={"sm"} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle>패널티 부과<Typography>(상품번호: )</Typography></DialogTitle>
        <form onSubmit={this.handleSubmit}>
          <DialogContent>
            <RadioGroup name="paneltyType" aria-label="depth1" onChange={this.handleChange}>
              <FormControlLabel key={"estate"} value={"estate"} label={"주택 정보 불일치"} control={<Radio />}/>
              <FormControlLabel key={"right"} value={"right"} label={"권리 정보 불일치"} control={<Radio />}/>
            </RadioGroup>
            <TextField name="description" label="패널티를 주는 정확한 이유" fullWidth multiline rows="4" value={this.state.description} onChange={this.handleChange} margin="normal"/>
          </DialogContent>
          <DialogActions>
            <Button color="default" size="small" variant="contained" style={{borderRadius:0}} onClick={this.handleClose}>취소</Button>
            <Button type="submit" size="small" className={cx('submit-button')} variant="contained">확인</Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}
