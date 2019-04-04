import React, { Component } from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Typography
} from '@material-ui/core';
import { withEstateForm } from '../../contexts/EstateAddForm';
import { withSnackbar } from 'notistack';
import styles from './VerifyPhone.scss';
import classNames from 'classnames';
const cx = classNames.bind(styles);

class VerifyPhone extends Component {
    state = {
        openDialog: false,
        timeout: 30, // 30s
        interval: null
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.props.setValue(name, value);
    }

    handleSendCodeForVerifingPhone = (e) => {
        this.setState({
            openDialog: true,
            timeout: 30,
            interval: setInterval(() => {
                if(this.state.timeout === 0) {
                    clearInterval(this.state.interval);
                } 
                this.setState(state => ({
                    timeout: state.timeout - 1
                }));
            }, 1000)
        });
    }

    handleCloseDialog = (e) => {
        if(Boolean(this.state.interval)) {
            clearInterval(this.state.interval);
        }
        this.setState({
            openDialog: false,
            timeout: 30,
            interval: null
        })
    }

    handleVerifyCode = (e) => {
        this.props.enqueueSnackbar('정상적으로 인증되었습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('인증에 실패하셨습니다. 인증코드를 다시 입력하세요', { variant: 'error' });
    }

    render () {
        return (
            <FormControl fullWidth={true} required={true}>
                <InputLabel htmlFor="adornment-contractß">연락처</InputLabel>
                    <Input name="mobileNumber" type="text" label="연락처" fullWidth={true} required={true} placeholder="010-1234-1234" onChange={this.handleChange} value={this.state.mobileNumber} margin="dense"
                        endAdornment={
                            <React.Fragment>
                                <Button color="primary" style={{  marginTop: '-10px'}}  size="small" variant="outlined" onClick={this.handleSendCodeForVerifingPhone}>본인인증</Button>
                                <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog} maxWidth="xl">
                                    <DialogTitle>휴대폰 인증</DialogTitle>
                                    <DialogContent>
                                        <Typography variant="caption">
                                            <strong>{this.state.mobileNumber}</strong>로 인증번호를 발송했습니다. 
                                            <br/>확인 후 숫자를 입력해주세요.
                                            </Typography>
                                        <TextField id="verifyCode" name="verifyCode" type="number" fullWidth={true} helperText={ this.state.timeout >= 0 ? (<div align="right">{this.state.timeout}초</div>) : (<div align="right">0초</div>)}/>
                                    </DialogContent>
                                    <DialogActions align="right">
                                        <Button variant="outlined" color="default" onClick={this.handleCloseDialog}>취소</Button>
                                        <Button variant="outlined" color="primary" onClick={this.handleVerifyCode}>인증</Button>
                                    </DialogActions>
                                </Dialog>
                            </React.Fragment>
                        }
                    />
            </FormControl>
        )
    }
}

export default withEstateForm(withSnackbar(VerifyPhone));