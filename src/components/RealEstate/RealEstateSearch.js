import React, { Component } from 'react';
import {Form, FormGroup, InputGroup, Input, Button} from 'reactstrap';

export default class RealEstateSearch extends Component {
    state = {
        search: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <InputGroup>
                        <Button color="default">Click me...</Button>
                        <Input
                            name="search"
                            placeholder=""
                            value={this.state.search}
                            onChange={this.handleChange}
                        />
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}