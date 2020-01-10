import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Details from './Details';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  QRButton: {
    marginLeft: '200px'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps(menuOption) {
  if (menuOption === 'physicalToeSIM')
    return ['Enter Details', 'Enter OTP', 'Scan QR Code'];

  return ['Enter Details', 'Scan QR Code'];
}

function getStepContent(
  step,
  classes,
  menuOption,
  reason,
  setReason,
  type,
  setType,
  steps
) {
  if (steps === 3) {
    switch (step) {
      case 0:
        return (
          <Details
            menuOption={menuOption}
            reason={reason}
            setReason={setReason}
            type={type}
            setType={setType}
          />
        );
      case 1:
        return (
          <TextField
            id="otp"
            label="Enter OTP"
            type="text"
            style={{ marginLeft: '180px', marginTop: '-40px' }}
            margin="normal"
          />
        );

      case 2:
        return (
          <Button
            variant="contained"
            color="secondary"
            className={classes.QRButton}
          >
            Scan QR Code
          </Button>
        );
      default:
        return 'Unknown step';
    }
  } else {
    switch (step) {
      case 0:
        return (
          <Details
            menuOption={menuOption}
            reason={reason}
            setReason={setReason}
            type={type}
            setType={setType}
          />
        );

      case 1:
        return (
          <Button
            variant="contained"
            color="secondary"
            className={classes.QRButton}
          >
            Scan QR Code
          </Button>
        );
      default:
        return 'Unknown step';
    }
  }
}

export default function FormDialog(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [reason, setReason] = React.useState('');
  const [type, setType] = React.useState('');
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps(props.menuOption);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    setSkipped(new Set());
    setActiveStep(0);

    props.handleClose();
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Register, please enter the following details here. We will an OTP
            to your device.
          </DialogContentText>

          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re successfully registered! The
                  network settings will be downloaded automatically.
                </Typography>
                <Button
                  onClick={handleReset}
                  className={classes.button}
                  color="secondary"
                  style={{ marginLeft: '100px' }}
                  variant="contained"
                >
                  Reset
                </Button>
                <Button
                  onClick={handleClose}
                  className={classes.button}
                  color="primary"
                  style={{ marginLeft: '170px' }}
                  variant="contained"
                >
                  Close
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(
                    activeStep,
                    classes,
                    props.menuOption,
                    reason,
                    setReason,
                    type,
                    setType,
                    steps.length
                  )}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {isStepOptional(activeStep) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                      className={classes.button}
                    >
                      Skip
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleNext(steps.length)}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
