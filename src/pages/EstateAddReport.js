import React, { Component } from "react";
import { Link as RouterLink, Switch, Route } from "react-router-dom";
import DropZone from "react-dropzone";
import { withStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Button,
  Paper,
  Grid
} from "@material-ui/core";

import classNames from "classnames";

const cx = classNames.bind(require("../styles/_utils.scss"));

class EstateAddReport extends Component {
  state = {
    thumbnails: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { username, email, address, detail } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
        </Grid>
        <Grid item md={4}>
          
        </Grid>
      </Grid>
    )
  }
}
export default EstateAddReport