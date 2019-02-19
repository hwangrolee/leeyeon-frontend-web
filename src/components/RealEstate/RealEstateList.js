import React, { Component} from 'react';
import RealEstateSummary from './RealEstateSummary';
import { Form, FormGroup, Input, InputGroup, Button, CardDeck } from 'reactstrap';

export default class RealEstateList extends Component {
    state = {
        search: '',
        realEstateList: [{
            id: 1,
            fee: 10,
            imageLink: 'http://catalk.kr/wp-content/uploads/2018/07/Type-of-Housing.jpg',
            liked: false,
            address: {
                country: 'KOR',
                city: 'seoul',
                detail: 'kwanakgu silimdong',
                zipCode: "UNKNOWN"
            },
            type: 'OneRoom',
            keywords: ['OneRoom'],
            price: 100,
            toggle: true,
        },{
            id: 2,
            fee: 5,
            imageLink: 'http://catalk.kr/wp-content/uploads/2018/07/Type-of-Housing.jpg',
            liked: false,
            address: {
                country: 'KOR',
                city: 'seoul',
                detail: 'kwanakgu silimdong',
                zipCode: "UNKNOWN"
            },
            type: 'OneRoom',
            keywords: ['OneRoom'],
            price: 100,
            toggle: false
        }]
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render () {
        return (
            <div className="container">
                <CardDeck>
                    {
                        this.state.realEstateList.map(realEstate => {
                            return <RealEstateSummary
                                key={realEstate.id}
                                realEstate={realEstate}
                            />
                        })
                    }
                </CardDeck>
            </div>
            
        )
    }
}