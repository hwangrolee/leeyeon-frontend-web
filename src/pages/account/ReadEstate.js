import React, { Component } from "react";
import Pagination from 'rc-pagination';
import {
    Grid,
    Typography
} from '@material-ui/core';
import { EstateSummary } from '../../components/Estate';
import { withSnackbar } from 'notistack';
import { getScrollPosition } from '../..//lib/Scroll';

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 조회한 매물
 */
class ReadEstate extends Component {
    oldScroll = null;
    possibleScroll = true;
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

    handleScroll = e => {
        const curScroll = getScrollPosition();
        if(curScroll > 0.6 && curScroll > this.oldScroll && this.possibleScroll === true) {
            this.possibleScroll = false;
            setTimeout(() => {
                this.possibleScroll = true;
            }, 500);
            // this.findAndSetEstate();
            this.props.enqueueSnackbar('불러오는 중이에요...', { 
                variant: 'info',
                preventDuplicate: true,
                autoHideDuration: 1500,
                anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
                }
            });
        }

        this.oldScroll = curScroll;
    }

    render() {
        return (
            <div onScroll={this.handleScroll}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5">조회한 매물 목록</Typography>
                    </Grid>
                    { 
                        this.state.estateList.length > 0 ? (
                            <React.Fragment>
                                {
                                    this.state.estateList.map((estate, index) => {
                                        return (
                                            <Grid item xs={12} key={index}>
                                                <EstateSummary
                                                    estateInfo={estate}
                                                    type="type1"
                                                />
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
                                 <EstateSummary type="type1"/>
                                 <EstateSummary type="type2"/>
                                 <EstateSummary type="type3"/>
                                {/* <Typography variant="caption">조회한 매물이 없습니다.</Typography> */}
                            </React.Fragment>
                        )
                    }
                </Grid>
            </div>
        )
    }
}

export default withSnackbar(ReadEstate);