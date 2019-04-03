import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    MenuItem,
    MenuList,
    Typography,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    Button
} from '@material-ui/core';

export default class AccountMenu extends Component {
    
    state = {
        anchorEl: null,
        menus: [
            { 
              title: <Typography variant="body1">내 정보</Typography>,
              link: '/account'
            } , {
              title: <Typography variant="body1">조회한 주거증명</Typography>,
              link: '/account/estate/history/read'
            } , {
              title: <Typography variant="body1">등록한 주거증명</Typography>,
              link: '/account/estate/list'
            } , {
              title: <Typography variant="body1">방문예약 조회<Typography variant="caption" inline={true}>(판매자용)</Typography></Typography>,
              link: '/account/estate/seller/visit-reservation'
            } , {
              title: <Typography variant="body1">방문예약 조회<Typography variant="caption" inline={true}>(구매자용)</Typography></Typography>,
              link: '/account/estate/buyer/visit-reservation'
            }
          ],
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render () {
        return (
            <React.Fragment>
                <a
                    aria-owns={this.anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >내정보</a>
                <Popper open={Boolean(this.state.anchorEl)} anchorEl={this.state.anchorEl} transition>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <MenuList>
                                {
                                    this.state.menus.map((menu, index) => {
                                        return (
                                            <Link key={index} to={menu.link}>
                                                <MenuItem >
                                                    {menu.title}
                                                </MenuItem>
                                            </Link>
                                        )
                                    })
                                }
                                </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </React.Fragment>
        )
    }
}