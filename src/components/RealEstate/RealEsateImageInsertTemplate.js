import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class RealEsateImageInsertTemplate extends Component {
    render() {
        const { singleImageTemplate } = this.props;
        return (
            <Container>
                {singleImageTemplate}
            </Container>
        )
    }
}