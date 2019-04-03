import React, { Component } from "react";
import Pagination from 'rc-pagination';
import {
    Grid,
    Typography
} from '@material-ui/core';
import { EstateSummary } from '../../components/Estate';
/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 등록한 매물
 */
class AddedEstate extends Component {
    state = {
        pagination: {
            totPage: 0,
            curPage: 0,
        },
        estateList: []
    }

    componentDidMount() {

    }

    handlePageChange = (page) => {
        // TODO: 판매자용 방문예약 목록 페이징 처리.
        const pagination = Object.assign(this.state.pagination, {});
        pagination.curPage = page;
        
        this.setState({
            pagination: pagination
        })
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5">등록한 매물 목록</Typography>
                    </Grid>
                    { 
                        this.state.estateList.length > 0 ? (
                            <React.Fragment>
                                {
                                    this.state.estateList.map((estate, index) => {
                                        return (
                                            <Grid item xs={12} key={index}>
                                            </Grid>
                                        );
                                    })
                                }
                                <Grid item xs={12}>
                                    <Pagination total={this.state.pagination.totPage} current={this.state.pagination.curPage} onChange={this.handlePageChange} />
                                </Grid>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <EstateSummary type="default"/>
                            {/* <Typography variant="caption">조회한 매물이 없습니다.</Typography> */}

                            </React.Fragment>
                        )
                    }
                </Grid>
            </React.Fragment>
        )
    }
}

export default AddedEstate;