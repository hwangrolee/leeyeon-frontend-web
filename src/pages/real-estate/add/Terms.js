import React from "react";
import { Card, Button } from "@material-ui/core";

import { withEditRealEstate } from '../../../contexts/EditRealEstate';

class Terms extends React.Component {
    render() {
        const { activeStep, steps } = this.props;
        console.log(this.props);
        return (
            <div style={{marginTop: '3%', marginRight: '8%', marginLeft: '8%'}}>
              <Card style={{ height: '40vw' }}>
                {this.getStepContent(activeStep)}
              </Card>
              <div style={{textAlign:'right', display: 'block', marginTop: '2%'}}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                //   className={classes.backButton}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={activeStep === steps.length && this.handleDisable()}
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
        )
    }
}

export default withEditRealEstate(Terms);