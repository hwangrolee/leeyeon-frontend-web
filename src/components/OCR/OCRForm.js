import React, { Component } from "react";
import DropZone from "react-dropzone";
import {
  Grid,
  LinearProgress
} from '@material-ui/core';
import { withEstateForm } from '../../contexts/EstateAddForm';
// import Jimp from 'jimp';
import classNames from "classnames";
import styles from "./OCRForm.scss";
var Tesseract = window.Tesseract;
const cx = classNames.bind(styles);
const Jimp = require('jimp');

class OCRForm extends Component {
  interval = null;

  state = {
    loadedImage: null,
    loading: 0,
    status: 0, // 0: 준비 중, 1: 분석중 2: 완료
    statusName: '분석전',
    disabled: false,
    procImage: null
  }

  _onDrop = async (acceptedFiles, rejectedFiles, ...props) => {
    const file = acceptedFiles[0];
    
    await this.setState({ 
      status: 0,
      loading: 0,
      loadedImage: file,
      disabled: true
    });

    Jimp.read(URL.createObjectURL(file)).then(async res => {
      console.log(res, res.greyscale());

      const base64 = await res.quality(100).greyscale().greyscale().getBase64Async(Jimp.MIME_JPEG)

      console.log(base64);
      this.setState({
        procImage: base64
      });

      Tesseract.recognize(base64, { lang: 'kor' })
      .progress(message => {
        const { status, progress }  = message;
        switch(status) {
          case 'loading tesseract core': // 코어 로딩
          case 'initializing tesseract': // 초기화
            if(this.state.status !== 0) {
              this.setState({
                status: 0,
              });
            }
            
            break;
          case 'recognizing text': // 분석중.
            const percentage =  progress * 100
            if(this.state.loading < percentage) {
              this.setState({
                loading: percentage > 0 ? percentage.toFixed(2) : percentage,
                status: 1,
              });
            }
            
            break;
          default:
            break;
        }
      })
      .catch(err => console.error(err))
      .then(result => {
        this.setState({
          status: 2,
          loading: 0,
          disabled: false
        })
      })
      .finally(resultOrError => console.log(resultOrError))
      
      // return res.greyscale().write('lena-small-bw.jpg');
    }).catch(error => {
      console.error(error);
    })

    // Tesseract
    // // .create({
    // //   workerPath: 'https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/1.0.14/worker.js',
    // //   langPath: 'https://tessdata.projectnaptha.com/3.02/',
    // //   // corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',
    // // })
    // .recognize(file, { lang: 'kor' })
    // .progress(message => {
    //   const { status, progress }  = message;
    //   switch(status) {
    //     case 'loading tesseract core': // 코어 로딩
    //     case 'initializing tesseract': // 초기화
    //       if(this.state.status !== 0) {
    //         this.setState({
    //           status: 0,
    //         });
    //       }
          
    //       break;
    //     case 'recognizing text': // 분석중.
    //       const percentage =  progress * 100
    //       if(this.state.loading < percentage) {
    //         this.setState({
    //           loading: percentage > 0 ? percentage.toFixed(2) : percentage,
    //           status: 1,
    //         });
    //       }
          
    //       break;
    //     default:
    //       break;
    //   }
    // })
    // .catch(err => console.error(err))
    // .then(result => {
    //   this.setState({
    //     status: 2,
    //     loading: 0,
    //     disabled: false
    //   })
    // })
    // .finally(resultOrError => console.log(resultOrError))

    this.props.setValue('image', file)
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
                {
                  Boolean(this.state.procImage) ? (
                    <img className={cx('ocr-form-image')} src={this.state.procImage} alt="my picture"/>
                  ) : ''
                }
              </React.Fragment>
            )
          }}
        </DropZone>
      </React.Fragment>
      
    );
  }
}

export default withEstateForm(OCRForm);
