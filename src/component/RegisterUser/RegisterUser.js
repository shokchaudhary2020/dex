import './registeruser.module.css';
import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LinearBuffer from '../Loading/Loading';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export  function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log(props)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button className="register-button"  variant="outlined" color="primary" onClick={handleClickOpen}>
        Proceed
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Wallet needs a user to be registered first"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          You have to make a initial payment of <span>&#8377;</span> 4987 to proceed further.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={true}>
            Disagree
          </Button>
          <Link to="/wallet">
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

var loading = false;

export  function ValidationTextFields(props) {
  console.log(props)


  function handleButtonClick()
  {
    props.setLoading(true);
  }

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
        <TextField   label="UserName" />
        <TextField
          // error
          // id="standard-error-helper-text"
          label="Account Number"
          // helperText="Incorrect entry."
        />
      </div>

        <TextField
          // error
          // id="standard-error-helper-text"
          label="Amount"
          // helperText="Incorrect entry."
        />
        <div>
          <AlertDialogSlide loading={props.setLoading}/>
        </div>

      </div>
    </form>
  );
}

export default function RegisterUser()
{
  const [loading , setLoading] = useState(false);
  console.log(loading);
  return (
    <div>
      {loading ? <LinearBuffer/> : <></>}
      <ValidationTextFields loading={setLoading}/>
    </div>
  )
}
