import React, { Component } from "react";
import { 
    Grid, 
    Typography, 
    Button, 
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core";
import { Done, CalendarToday } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "material-ui-pickers";
import { withSnackbar } from 'notistack';
import classNames from "classnames";
import styles from "./TemplateForVisitReservationSeller.scss";
const cx = classNames.bind(styles);

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 방문예약 목록에서 1개 아이템에 대한 템플릿.
 */
class TemplateForVisitReservation extends Component {

    state = {
    }

    static getDerivedStateFromProps(nextProps = { estateInfo : {}}, prevState) {
        console.log(nextProps)
        const {
            estateId = 0,
            fee = 0,
            price = 0,
            imageLink = 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547',
            readDate = '2019년 01월 10일 10시 20분',
            area = '서울특별시 강남구 연남동 근처',
            reserveDate = '2019년 02월 01일 15시 30분',
            keyword = '다세대 주택, 방2, 화장실1, 거실',
            status = 2 // 0: 대기중, 1: 수락, 2: 거절
        } = nextProps.estateInfo;

        return {
            openDialog: false,
            dialogMode: '',
            estateInfo: {
                estateId: estateId,
                fee: fee,
                price: price,
                imageLink: imageLink,
                readDate: readDate,
                area: area,
                reserveDate: reserveDate,
                keyword: keyword,
                status: status // 0: 대기중, 1: 수락, 2: 거절
            }
        }
    }

    /**
     * @function
     * @description 새로운 윈도우로 상세페이지를 연다.
     */
    _openNewWindow = () => {
        window.open("/account/estate/seller/visit-reservation/detail/" + this.state.estateInfo.estateId);
    }

    _openDialog = (e, mode = '') => {
        if(e !== undefined) {
            e.stopPropagation();
        }

        this.setState({
            dialogMode: mode,
            openDialog: true
        });
    }

    _closeDialog = (e, mode = '') => {
        if(e !== undefined) {
            e.stopPropagation();
        }

        this.setState({
            dialogMode: mode,
            openDialog: false
        });
    }

    _acceptVisitReservation = (e) => {
        e.stopPropagation();
        this.props.enqueueSnackbar('방문예약을 수락했습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('방문예약을 수락하지 못했습니다.', { variant: 'error' });
        this._closeDialog(e);
    }

    _rejectVisitReservation = (e) => {
        e.stopPropagation();
        this.props.enqueueSnackbar('방문예약을 거절했습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('방문예약을 거절하지 못했습니다.', { variant: 'error' });
        this._closeDialog(e);
    }

    _emptyButton = (e) => {
        e.stopPropagation();
    }

    render () {
        const { estateInfo } = this.state;
        return (
            <React.Fragment>
                <Grid container spacing={24} className={cx('template')} onClick={this._openNewWindow}>
                    <Grid item className={cx('template-header')}>
                        <img src={estateInfo.imageLink}/>
                    </Grid>
                    <Grid item className={cx('template-body')}> 
                        <Typography variant="caption">조회날짜: {estateInfo.readDate}</Typography>
                        <Typography variant="h4">{estateInfo.price}원 <Typography variant="caption" inline={true}>수수료 {estateInfo.fee}ETH</Typography></Typography>
                        <Typography variant="body1">{estateInfo.area}</Typography>
                        <Typography variant="caption">{estateInfo.keyword}</Typography>
                    </Grid>
                    <Grid item className={cx('template-footer')}>
                        <Typography variant="caption">예약날짜: {estateInfo.reserveDate}</Typography>
                        {
                            estateInfo.status === 0 ? (
                                <Button className={cx('button')} color="default" variant="contained" onClick={(e) => this._emptyButton(e)}>대기</Button>
                            ) : (
                                <Button className={cx('button')} color="default" variant="outlined" onClick={(e) => this._emptyButton(e)}>대기</Button>
                            )
                        }
                        {
                            estateInfo.status === 1 ? (
                                <Button className={cx('button')} color="primary" variant="contained" onClick={(e) => this._emptyButton(e)}>수락</Button>
                            ) : (
                                <Button className={cx('button')} color="primary" variant="outlined" onClick={(e) => this._openDialog(e, 'accept')}>수락</Button>
                            )
                        }
                        {
                            estateInfo.status === 2 ? (
                                <Button className={cx('button')} color="secondary" variant="contained" onClick={(e) => this._emptyButton(e)}>거절</Button>        
                             ) : (
                                <Button className={cx('button')} color="secondary" variant="outlined" onClick={(e) => this._openDialog(e, 'reject')}>거절</Button>
                            )
                        }
                        {/* <Button className={cx('button')} style={{width: '100%'}} color="secondary" variant="outlined" onClick={(e) => this._openDialog(e, 'reject')}>거절</Button> */}
                    </Grid>
                </Grid>
                <Dialog open={this.state.openDialog} onClose={this._closeDialog}>
                    <DialogTitle>
                        { this.state.dialogMode === 'accept' ? '수락 ' : '' }
                        { this.state.dialogMode === 'reject' ? '거절 ' : '' }
                        하시겠습니까?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            방문 예약일은 <strong>{estateInfo.reserveDate}</strong>입니다.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions align="right">
                        <Button color="default" variant="outlined" size="medium" onClick={this._closeDialog}>취소</Button>
                        { this.state.dialogMode === 'accept' ? (
                            <Button color="primary" variant="outlined" size="medium" onClick={this._acceptVisitReservation}>수락</Button>
                        ) : '' }
                        { this.state.dialogMode === 'reject' ? (
                            <Button color="secondary" variant="outlined" size="medium" onClick={this._rejectVisitReservation}>거절</Button>
                        ) : '' }
                        
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withSnackbar(TemplateForVisitReservation);