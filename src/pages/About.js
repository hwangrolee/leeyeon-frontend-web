import React, { Component } from 'react';
// import queryString from 'query-string';

export default class About extends Component {
    render () {
        const { match, location } = this.props;
        // const query = queryString.parse(location.search);
        // console.log(query);
        return (
            <div>About Page {match.params.name}</div>
        )
    }
}