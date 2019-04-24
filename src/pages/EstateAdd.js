import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import OCRForm from '../components/OCR/OCRForm';
import { EstateAddFormProvider, withEstateForm } from '../contexts/EstateAddForm';
import EstateAddForm from '../components/Estate/EstateAddForm';
import { Estate as EstateAPI } from '../api';
import { withSnackbar } from "notistack";
import classNames from "classnames";
const cx = classNames.bind(require("../styles/_utils.scss"));

class EstateAdd extends Component {
  state = {
    image: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getEstateInfo().then(info => {
      EstateAPI.insertEstate(info).then(res => {
        const code = parseInt(res.result);
        if(code === 200) {
          this.props.enqueueSnackbar('정상적으로 등록되었습니다.', { variant: 'success' });
        } else {
          this.props.enqueueSnackbar('부동산 등록에 실패했습니다. 정보를 확인해주세요', { variant: 'error' });
        }
      }).catch(error => {
        console.log(error);
        this.props.enqueueSnackbar('서버와의 통신이 원활하지 않습니다.', { variant: 'error' });
      })
    })
    return false;
  };

  handleChangeFormData = () => {

  }

  render() {
    return (
      <React.Fragment>
        <OCRForm/>
        <EstateAddForm/>
        <Grid align="right">
          <Button type="submit" color="primary" variant="outlined" onClick={this.handleSubmit}>등록</Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withSnackbar(withEstateForm(EstateAdd));
