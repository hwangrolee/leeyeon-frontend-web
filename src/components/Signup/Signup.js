import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, container } from 'reactstrap';

/**
 * 회원가입 컴포넌트
 */
export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        terms: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        
        const { email, password } = this.state;
        if(email.length === 0) {
            e.preventDefault();
            return false;
        }

        if(password.length === 0) {
            return false;
        }

        return true;
    }

    render () {
        return (
            <Form className="container" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Email</Label>
                    <Input name="email" type="email" placeholder="이메일을 입력하세요" onChange={this.handleChange} value={this.state.email}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={this.handleChange} value={this.state.password}/>
                </FormGroup>
                <FormGroup check>
                    <Label check><Input type="checkbox" onChange={this.handleChange} value={this.state.terms}/>I agree to Propy's <a href="#" target="_blank">Terms and Conditions Privacy Policy</a> and <a href="#" target="_blank">Cookies Policy</a></Label>
                </FormGroup>
                <hr/>
                <Button type="submit" color="primary">로그인</Button>
            </Form>
        )
    }
}