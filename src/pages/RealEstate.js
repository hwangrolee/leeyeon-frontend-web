import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class RealEstate extends Component {
    render () {
        const { match } = this.props;
        return (
            <div>
                <div>부동산 페이지</div>
                <ul>
                    <li><Link to={`${match.url}/list`}>부동산 목록</Link></li>
                    <li><Link to={`${match.url}/detail/0`}>부동산 상세</Link></li>
                    <li><Link to={`${match.url}/add`}>부동산 등록</Link></li>
                </ul>
            </div>
        )
    }
}