import React, { Component } from 'react';
import {
    Grid,
    TextField
} from '@material-ui/core';
import VerifyPhone from '../Verify/VerifyPhone';
import EstateAddFormOptional from './EstateAddFormOptional';
import { withEstateForm } from '../../contexts/EstateAddForm';
import { withSnackbar } from 'notistack';

class EstateAddForm extends Component {
    state = {
        email: '',
        username: '',
        mobileNumber: '',
        address: '',
        content: '',
        price: '',
        builtDate: '',
        floor: '',
        size: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        const keys = Object.keys(this.state);
        return keys.some(key => {
            return this.state[key] !== nextState[key]; 
        })
    }

    handleSubmit = (e) => {
        e.preventDefualt();

        return false;
    }

    handleChange = (e) => {
        const { name, value, type } = e.target;
        switch (type) {
            default:
                this.setState({ [name]: value });
                this.props.setValue(name, value);
                break;
        }
    }

    _openSendCodeForVerifyPhone = (e) => {

    }

    render() {
        return (
            <React.Fragment>
                <Grid onSubmit={this.handleSubmit}>
                    <TextField name="email" type="email" label="이메일" fullWidth={true} required={true} placeholder="proof@proof.kr" onChange={this.handleChange} value={this.state.email} margin="dense"/>
                    <TextField name="username" type="text" label="성함" fullWidth={true} required={true} placeholder="홍길동"  onChange={this.handleChange} value={this.state.username}  margin="dense"/>
                    <VerifyPhone name="mobileNumber"/>
                    <TextField name="address" type="text" label="주소" fullWidth={true} required={true} placeholder="서울특별시 xx구 xx동" onChange={this.handleChange} value={this.state.address} margin="dense"/>
                    <TextField name="price" type="text" label="금액" fullWidth={true} required={true} placeholder="금액" onChange={this.handleChange} value={this.state.price} margin="dense"/>
                    <TextField name="builtDate" type="text" label="건물년도" fullWidth={true} required={true} placeholder="2015년 7월 26일" onChange={this.handleChange} value={this.state.builtDate} margin="dense"/>
                    <TextField name="floor" type="text" label="층수" fullWidth={true} required={true} placeholder="11층" onChange={this.handleChange} value={this.state.floor} margin="dense"/>
                    <TextField name="size" type="text" label="평수" fullWidth={true} required={true} placeholder="18펴" onChange={this.handleChange} value={this.state.size} margin="dense"/>
                    <EstateAddFormOptional onChange={this.handleOptionChange}/>
                    <TextField name="content" type="text" label="부가설명" fullWidth={true} placeholder="부가설명" onChange={this.handleChange} value={this.state.detail} margin="dense" rows={4} rowsMax={10} multiline/>
                </Grid>
            </React.Fragment>
            
        )
    }
}

export default withEstateForm(withSnackbar(EstateAddForm));