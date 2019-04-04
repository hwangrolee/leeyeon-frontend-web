import React, { Component } from "react";
import DropZone from "react-dropzone";
import {
  Grid,
  LinearProgress
} from '@material-ui/core';
import { withEstateForm } from '../../contexts/EstateAddForm';
import classNames from "classnames";
import styles from "./OCRForm.scss";
const cx = classNames.bind(styles);

class OCRForm extends Component {
  interval = null;

  state = {
    loadedImage: null,
    loading: 0,
    status: 0,
    statusName: '분석전',
    disabled: false
  }

  _onDrop = async (acceptedFiles, rejectedFiles, ...props) => {
    const file = acceptedFiles[0];
    
    await this.setState({ 
      status: 0,
      loading: 0,
      loadedImage: file,
      disabled: true
    });


    this.props.setValue('image', file);
    
    setTimeout(async () => {
      this.interval = setInterval(() => {
        if(this.state.loading >= 100) {
          this.setState({
            status: 2,
            loading: 0,
            disabled: false
          });
          clearInterval(this.interval);
        } else {
          this.setState({
            status: 1,
            loading: this.state.loading + 5
          });
        }
      }, 500)
    }, 2000);
    
  }

  render() {
    let statusName = '분석준비중...';
    switch(this.state.status) {
      case 0:
        statusName = '분석준비중...';
        break;
      case 1:
        statusName = `분석중(${this.state.loading}%)`;
        break;
      case 2:
        statusName = '분석완료(100%)';
        break;
      default:
        statusName = '분석준비중...';
        break;
    }

    return (
      <React.Fragment>
        <DropZone accept="image/*" onDrop={this._onDrop} disabled={this.state.disabled}>
          {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
            return (
              <React.Fragment>
                <div {...getRootProps()} className={cx('ocr-form')}>
                  {
                    Boolean(this.state.loadedImage) ? (
                      <div className={cx('ocr-form-progress-wrap')}>
                        <div className={cx('ocr-form-progress-text')}>
                          {statusName}
                        </div>
                        <LinearProgress variant="determinate" color="primary" value={this.state.loading} className={cx('ocr-form-progress')}/>
                      </div> 
                    ) : ''
                  }
                  <input {...getInputProps()} />
                  {
                    Boolean(this.state.loadedImage) ? (
                        <div className={cx('ocr-form-image-wrap')}>
                          <img className={cx('ocr-form-image')} src={URL.createObjectURL(this.state.loadedImage)} alt="my picture"/>
                        </div>
                      ) : (
                        <div>
                          <div className={cx('ocr-form-progress-wrap')}>
                            <div className={cx('ocr-form-progress-text')}>
                              여기를 클릭하거나 임대차 계약서를 끌어서 업로드하세요.
                            <br/>
                            </div>
                          </div>
                        </div>
                      )
                    }
                </div>
                
              </React.Fragment>
            )
          }}
        </DropZone>
      </React.Fragment>
      
    );
  }
}

export default withEstateForm(OCRForm);
