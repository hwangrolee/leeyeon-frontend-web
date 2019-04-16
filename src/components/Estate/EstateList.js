import React, { Component} from 'react';
import EstateSummary from './EstateSummary';

export default class EstateList extends Component {
    state = {
        search: '',
        estateList: [{
            id: 1,
            fee: 10,
            imageLink: 'https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg',
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
            imageLink: 'https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg',
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
                <div>
                    {
                        this.state.estateList.map(estate => {
                            return <EstateSummary
                                key={estate.id}
                                estate={estate}
                            />
                        })
                    }
                </div>
            </div>
            
        )
    }
}