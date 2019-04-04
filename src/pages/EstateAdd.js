import React, { Component } from "react";
import { Link as RouterLink, Switch, Route } from "react-router-dom";
import DropZone from "react-dropzone";
import { withStyles } from "@material-ui/core/styles";
import qs from "query-string";
import EstateInsert from "../components/Estate/EstateInsert";
import {
  Button,
  Grid,
  CardContent,
  CardActions,
} from "@material-ui/core";

import {
} from "@material-ui/icons";

import OCRForm from '../components/OCR/OCRForm';
import { EstateAddFormProvider } from '../contexts/EstateAddForm';
import EstateAddForm from '../components/Estate/EstateAddForm';
import { withSnackbar,withEstateForm } from "notistack";
import classNames from "classnames";
const cx = classNames.bind(require("../styles/_utils.scss"));

class EstateAdd extends Component {
  state = {
    image: null,
  };

  handleSubmit = e => {
    e.preventDefault();
      this.props.enqueueSnackbar('정상적으로 등록되었습니다.', { variant: 'success' });
      this.props.enqueueSnackbar('부동산 등록에 실패했습니다. 정보를 확인해주세요', { variant: 'error' });
    return false;
  };

  handleChangeFormData = () => {

  }

  render() {
    return (
      <EstateAddFormProvider>
          <OCRForm/>
          <EstateAddForm/>
          <Grid align="right">
            <Button type="submit" color="primary" variant="outlined" onClick={this.handleSubmit}>등록</Button>
          </Grid>
      </EstateAddFormProvider>
    );
  }
}

export default withSnackbar(EstateAdd);
