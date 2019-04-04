import React, { Component } from 'react';
import {
    Grid,
    Typography,
    IconButton,
    Chip
} from '@material-ui/core';

import {
    Favorite as FilledLikeIcon,
    FavoriteBorder as OutlinedLikeIcon
} from '@material-ui/icons';
import Money from '../../../lib/Money';

import classNames from 'classnames';
import styles from './Square.scss';
const cx = classNames.bind(styles);

class Square extends Component {

    state = {}

    static getDerivedStateFromProps(nextProps, prevState) {
        const {
            estateId = 0,
            area = "Unknown", 
            email = "Unknown", 
            imageLink = "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547", 
            thumbnail = "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547", 
            isLike = false, 
            likeCount = 0, 
            isNew = false, 
            price = 0
        } = nextProps.estateInfo;

        return {
            estateInfo: {
                estateId: estateId,
                area: area,
                email: email,
                imageLink: imageLink,
                isLike: isLike,
                likeCount: likeCount,
                isNew: isNew,
                price: price,
            }
            
        }
    }

    componentDidMount () {
        
    }

    _openNewWindow = (e) => {
        window.open("/estate/detail/" + this.state.estateInfo.estateId);
    }
    
    render() {
        const {
            estateId,
            area, 
            email, 
            imageLink, 
            thumbnail , 
            isLike, 
            likeCount, 
            isNew, 
            sellTypeName,
            price
        } = this.state.estateInfo;
        return (
            <Grid key={estateId} className={cx('square-container')} onClick={this._openNewWindow}>
                <Grid className={cx('square-content')}>
                    <Grid className={cx('square-content-title')}>
                        <Typography variant="body1" className={cx('square-content-title-text')}>{area}</Typography>
                        {
                                isNew ? (
                                    <Typography variant="caption" inline={true}>
                                        &emsp;&emsp;<Chip label="New" className={cx('badge')}/>
                                    </Typography>
                                ) : ''
                            }
                    </Grid>
                    <Grid className={cx('square-content-title')}>
                        <Typography variant="caption">{email}</Typography>
                    </Grid>
                    <img src={imageLink} alt={area}/>
                </Grid>
                <Grid className={cx('square-footer')}>
                    <Grid style={{flex:1}}>
                    {
                        isLike ? (
                            <React.Fragment>
                                <IconButton className={cx('squre-icon-wrap')}><FilledLikeIcon className={cx('square-icon')}/></IconButton>
                                <Typography variant="caption" inline={true}>{likeCount}</Typography>
                            </React.Fragment>
                            

                        ) : (
                            <React.Fragment>
                                <IconButton className={cx('squre-icon-wrap')}><OutlinedLikeIcon className={cx('square-icon')}/></IconButton>
                                <Typography variant="caption" inline={true}>{likeCount}</Typography>
                            </React.Fragment>
                        )
                    }
                    </Grid>
                    <Grid>
                        <Typography variant="body1" className={cx('price')}>{new Money(price).price} 원</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Square;