import React, { Component } from 'react';
import {
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@material-ui/core';

import { withSnackbar } from 'notistack';

const EstateAddResultModal = (open, onClose = () =>{}, result = true, message = '') => {
   return (
       <Dialog open={open} onClose={onClose}>
           <DialogTitle>
            {
                result ? (
                    '정상적으로 등록했습니다.'
                ) : (
                    '부동산을 등록하지 못했습니다.'
                )
            }
           </DialogTitle>
           {
               result === false ? (
                <DialogContent>
                    <DialogContentText>{message}</DialogContentText>
                </DialogContent>
               ) : ''
           }
          <DialogActions>
              <Button color="default" size="medium" variant="outlined" onClick={onClose}>확인</Button>
          </DialogActions>
       </Dialog>
   )
}

export default withSnackbar(EstateAddResultModal);