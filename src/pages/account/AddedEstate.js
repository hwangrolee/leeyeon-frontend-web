import React, { Component } from "react";
import Pagination from 'rc-pagination';
import {
    Grid,
    Typography
} from '@material-ui/core';
import { EstateSummary } from '../../components/Estate';
import { Account as AccountAPI } from '../../api';
import EstateModel from '../../lib/models/EstateModel';
import { withSnackbar } from 'notistack';
import { getScrollPosition } from '../..//lib/Scroll';
/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 등록한 매물
 */
class AddedEstate extends Component {
    oldScroll = null;
    possibleScroll = true;

    state = {
        pagination: {
            totPage: 0,
            curPage: 0,
        },
        estateList: []
    }

    findAndSetEstate = () => {
        AccountAPI.estateListUpload().then(estateList => {
            this.setState({
                estateList: this.state.estateList.concat(estateList.map(estate => new EstateModel(estate)))
            })
        });
    }

    componentDidMount() {
        this.findAndSetEstate();
        window.addEventListener('scroll', this.handleScroll);
    }

    handlePageChange = (page) => {
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
                <Grid container spacing={24} >
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
            </div>
        )
    }
}

export default withSnackbar(AddedEstate);