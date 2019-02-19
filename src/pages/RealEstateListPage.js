import React, { Component } from 'react';
import { RealEstateList, RealEstateSearch } from 'components/RealEstate';
export default class RealEstateListPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>부동산 목록</h1>
                <RealEstateSearch/>
                <RealEstateList></RealEstateList>
            </div>
        )
    }
}