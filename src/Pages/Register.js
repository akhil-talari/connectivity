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
import reduxModule from '../redux-modules';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import OpenQRCode from './QRscanner';
import debounce from 'lodash/debounce';

const styles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'pink'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  QRButton: {
    marginLeft: '200px'
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  }
});

function getSteps() {
  return ['Enter Details', 'Enter OTP', 'Scan QR Code'];
}

function getStepContent(
  step,
  classes,
  menuOption,
  reason,
  setReason,
  type,
  setType,
  steps,
  number,
  setNumber,
  country,
  ssn,
  setSSN,
  email,
  setEmail,
  isOpenQRScanner,
  setQRScanner,
  otp,
  setOTP,
  emailText,
  setEmailText,
  setText
) {
  switch (step) {
    case 0:
      return (
        <Details
          menuOption={menuOption}
          reason={reason}
          setReason={setReason}
          type={type}
          setType={setType}
          number={number}
          setNumber={setNumber}
          country={country}
          ssn={ssn}
          setSSN={setSSN}
          email={email}
          setEmail={setEmail}
          emailText={emailText}
          setEmailText={setEmailText}
        />
      );
    case 1:
      return (
        <TextField
          id="otp"
          label="Enter OTP"
          type="text"
          style={{ marginLeft: '180px', marginTop: '-20px' }}
          margin="normal"
          onChange={(e) => {
            setOTP(e.target.value);
          }}
          value={otp}
        />
      );

    case 2:
      return (
        <Typography style={{ color: 'blue' }}>
          QR code will be sent your registered mobile number along with the
          service request number once you click finish.
        </Typography>
      );
    default:
      return 'Unknown step';
  }
}

function FormDialog(props) {
  const { classes } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [reason, setReason] = React.useState('');
  const [type, setType] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [ssn, setSSN] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [skipped, setSkipped] = React.useState(new Set());
  const [isOpenQRScanner, setQRScanner] = React.useState(false);
  const [otp, setOTP] = React.useState();
  const [text, setText] = React.useState(
    'Please enter the OTP sent to your email address.'
  );
  const [emailText, setEmailText] = React.useState('');

  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;

    if (activeStep === 1) {
      if (props.actualOTP !== otp) {
        setText('Incorrect OTP. Please re-enter');
        setActiveStep((prevActiveStep) => prevActiveStep);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
      // } else if (activeStep === 0) {
      //   if (email.match(/conectivite.com/i)) {
      //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
      //   } else {
      //     setEmailText(
      //       'Please enter the email address registered with conectivite.com'
      //     );
      //     setActiveStep((prevActiveStep) => prevActiveStep);
      //   }
      // }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    setSkipped(new Set());
    setActiveStep(0);
    setReason('');
    setType('');
    setSSN('');
    setEmail('');
    setOTP();

    setText('Please enter the OTP sent to your email address.');

    setEmailText('');
    setNumber();
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

  return (
    <div className={classes.root}>
      <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
        onClose={props.handleClose}
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Register, please enter the following details here. We will send
            an OTP to your device.
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
                  Registration successful! The network settings will be
                  downloaded automatically. Your service request number is{' '}
                  <bold>{props.serviceRequestNumber}</bold>.
                </Typography>

                <Button
                  onClick={handleClose}
                  className={classes.button}
                  color="primary"
                  style={{ marginLeft: '240px' }}
                  variant="contained"
                >
                  Close
                </Button>
              </div>
            ) : (
              <div>
                {activeStep === 1 ? (
                  <Typography align="center">{text}</Typography>
                ) : null}
                <Typography className={classes.instructions}>
                  {getStepContent(
                    activeStep,
                    classes,
                    props.menuOption,
                    reason,
                    setReason,
                    type,
                    setType,
                    steps.length,
                    number,
                    setNumber,
                    props.country,
                    ssn,
                    setSSN,
                    email,
                    setEmail,
                    isOpenQRScanner,
                    setQRScanner,
                    otp,
                    setOTP,
                    emailText,
                    setEmailText,
                    setText
                  )}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0 || activeStep === 2}
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
                    onClick={
                      activeStep === steps.length - 1
                        ? () => {
                            handleNext(steps.length);
                            props.registerUser(
                              props.country,
                              props.serviceProvider,
                              props.configurator,
                              ssn,
                              number,
                              email,
                              type,
                              reason
                            );
                          }
                        : activeStep === 0
                        ? () => {
                            props.sendOTP(email);
                            handleNext(steps.length);
                          }
                        : () => handleNext(steps.length)
                    }
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
      <OpenQRCode isOpen={isOpenQRScanner} setQRScanner={setQRScanner} />
    </div>
  );
}

const mapState = (state, props) => {
  const serviceRequestNumber = reduxModule.screenSignIn.selectors.getServiceRequestNumber(
    state,
    props
  );
  const actualOTP = reduxModule.screenSignIn.selectors.getOTP(state, props);

  return {
    serviceRequestNumber,
    actualOTP
  };
};

export default compose(connect(mapState, null), withStyles(styles))(FormDialog);
