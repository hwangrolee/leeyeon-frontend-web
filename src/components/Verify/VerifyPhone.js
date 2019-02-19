import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardTitle, Button, Input, InputGroup, Form, FormGroup, Label, Row, Col } from 'reactstrap';

export default class VerifyPhone extends Component {
    state = {
        firstName: '',
        lastName: '',
        countryNumber: 82
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        return (
            <div className="container">
                <Card>
                    <CardHeader>
                        Your email is confirmed 
                        Next, add your name and number
                    </CardHeader>
                    <CardBody>
                        <Form className="container">
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>FirstName</Label>
                                        <Input name="firstName" type="text" placeholder="Your first name" onChange={this.handleChange} value={this.state.firstName}/>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label>LastName</Label>
                                        <Input name="lastName" type="text" placeholder="Your last name" onChange={this.handleChange} value={this.state.lastName}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label>Mobile number</Label>
                                <Row form>
                                    <Col md={3}>
                                        <Input type="select">
                                            <option>+82</option>
                                            <option>+81</option>
                                        </Input>
                                    </Col>
                                    <Col md={9}>
                                    <Input name="lastName" placeholder="Your last name" onChange={this.handleChange} value={this.state.lastName}/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Col sm={{size: 10, offset: 3}}>
                                <Label>Add your mobile number for an extra layer of security on your account</Label>

                                </Col>
                                <Col sm={{ size: 18, offset: 4 }}>
                                <Button color="primary">Verify your mobile number</Button>

                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}