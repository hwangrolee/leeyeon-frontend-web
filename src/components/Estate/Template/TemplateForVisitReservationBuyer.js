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
import styles from "./TemplateForVisitReservationBuyer.scss";
const cx = classNames.bind(styles);

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 방문예약 목록에서 1개 아이템에 대한 템플릿.
 */
class TemplateForVisitReservationBuyer extends Component {
    pickerRef = null;
    state = {
        openDialog: false,
        estateInfo: {
            id: 0,
            fee: '1,000',
            price: '1,000,000',
            imageLink: 'https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547',
            readDate: '2019년 01월 10일 10시 20분',
            area: '서울특별시 강남구 연남동 근처',
            reserveDate: '2019년 02월 01일 15시 30분',
            keyword: '다세대 주택, 방2, 화장실1, 거실',
        }
    }

    /**
     * @function
     * @description 새로운 윈도우로 상세페이지를 연다.
     */
    _openNewWindow = (e) => {
        if(e !== undefined) {
            e.stopPropagation();
        } else {
            console.log('undefined');
        }
        window.open("/account/estate/seller/visit-reservation/detail/" + this.state.estateInfo.id);
    }

    _openDialog = (e, mode = '') => {
        if(e !== undefined) {
            e.stopPropagation();
        }

        this.setState({
            openDialog: true,
        })
    }

    _closeDialog = (e, mode = '') => {
        if(e !== undefined) {
            e.stopPropagation();
        }

        this.setState({
            openDialog: false,
        })
    }

    _updateVisitReservationDate = (e) => {
        if(e !== undefined) {
            e.stopPropagation();
        }

        // TODO: 예약일 수정을 Rest API로 서버에요청

        this.props.enqueueSnackbar('방문예약일을 수정했습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('방문예약일을 수정하지 못했습니다.', { variant: 'error' });
    }

    _cancelVisitReservationDate = (e) => {
        if(e !== undefined) {
            e.stopPropagation();
        }

        this.props.enqueueSnackbar('방문예약을 취소했습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('방문예약을 취소하지 못했습니다.', { variant: 'error' });
    }

    _showCalendar = e => {
        if(e !== undefined) {
            e.stopPropagation();
        }

        this.pickerRef.open(e);
    }

    _changeReserveDate = async (date) => {
        await this.setState({
            estateInfo: await Object.assign(this.state.estateInfo, {
                reserveDate: date.getTime()
            })
        })

        this._updateVisitReservationDate();
    }

    render () {
        const { estateInfo } = this.state;
        console.log(estateInfo);
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
                        <Button className={cx('button')} color="secondary" variant="outlined" onClick={this._showCalendar}>예약수정</Button>
                        <Button className={cx('button')} color="primary" variant="outlined" onClick={this._openDialog}>예약취소</Button>
                    </Grid>
                </Grid>
                <Dialog open={this.state.openDialog} onClose={this._closeDialog}>
                    <DialogTitle>예약을 취소하시겠습니까?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            방문 예약일은 <strong>{estateInfo.reserveDate}</strong>입니다.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="default" variant="outlined" size="medium" onClick={this._closeDialog}>예약유지</Button>
                        <Button color="secondary" variant="outlined" size="medium" onClick={this._cancelVisitReservationDate}>예약취소</Button>
                    </DialogActions>
                </Dialog>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                    style={{ display: "none" }}
                    value={estateInfo.reservationDate}
                    onChange={this._changeReserveDate}
                    label="DateTimePicker"
                    ref={ref => (this.pickerRef = ref)}
                    disablePast
                    showTodayButton
                />
                </MuiPickersUtilsProvider>
            </React.Fragment>
        )
    }
}

export default withSnackbar(TemplateForVisitReservationBuyer);