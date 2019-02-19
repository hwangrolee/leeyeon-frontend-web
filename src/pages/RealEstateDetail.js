import React, { Component } from 'react';
import { Form, FormGroup, Col, UncontrolledCarousel, Button, Label, Row, Input, text } from 'reactstrap';
import { RealEsateImageSlide } from 'components/RealEstate';

export default class RealEstateDetail extends Component {

    state = {
        editing: false,
        imageLinks: [{ 
            src: 'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            altText: 'altText3',
            caption: 'test image 3',
            header: '1'
        }, {
            src: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            altText: 'altText1',
            caption: 'test image 1',
            header: '123'
        }],

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { imageLinks, editing } = this.state;
        return (
            <div className="container">
                <h1>부동산 상세</h1>
                <Form>
                    <h1 className="text-center">
                        Title
                        <Button className="text-right" style={{float:'right'}} type="button" color="info">방문예약</Button>
                    </h1>
                    <FormGroup row>
                        <Col md={{size:6, offset:3}} className="text-center">
                            <UncontrolledCarousel style={{width: '50%'}} items={imageLinks}/>
                        </Col>
                    </FormGroup>
                    <hr/>
                    <Row form>
                        <Col md={3}>
                            <FormGroup row>
                                <Label sm={3}>Bedrooms</Label>
                                <Col sm={9}>
                                    <Input type="number" name="bedrooms" disabled={!editing}/>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup row>
                                <Label sm={4}>Bathrooms</Label>
                                <Col sm={8}>
                                    <Input type="number" name="bathrooms" disabled={!editing}/>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup row>
                                <Label sm={4}>Your Built</Label>
                                <Col sm={8}>
                                    <Input type="number" name="built" disabled={!editing}/>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup row>
                                <Label sm={2}>Floor</Label>
                                <Col sm={10}>
                                    <Input type="number" name="floor" disabled={!editing}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup row>
                                <Label>Description</Label>
                                <Col>
                                    <Input type="textarea" name="description" rows="4" disabled={!editing}/>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup row>
                                <Label sm={3}>Name</Label>
                                <Col sm={9}>
                                    <Input type="text" name="name" disabled={!editing}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={3}>Phone Number</Label>
                                <Col sm={9}>
                                    <Input type="text" name="phoneNumber" disabled={!editing}/>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}