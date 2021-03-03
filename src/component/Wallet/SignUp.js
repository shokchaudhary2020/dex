import React, {useState, useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import WarningAlerts from '../Alerts/Alerts';
import {Context} from '../Context/CreateContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignUp() {
const [state, setState]  = useContext(Context);
  const [warning , setWarning] = useState(false)
  const [amount , setAmount] = useState(0);

  function handleChange(e)
  {
    setAmount(e.target.value);
  }

  function handleBankTransfer()
  {
    var value = parseInt(amount);
    if(typeof value === "number" && value  < state.totalMoney)
    {
      setState(prevState => ({
        ...prevState ,
        totalMoney : prevState.totalMoney - value,
        status  :  "done"
      }))
    }

  }

  function handleClick(e)
  {
    e.preventDefault();
    setState(prevState => ({
      ...prevState ,
      status  :  "waiting"
    }))
    setTimeout( handleBankTransfer , 30000);
  }

  const classes = useStyles();
  return (
    <div id="logo-wrapper">
      {warning ? <WarningAlerts/> : <></>}
      <form  noValidate autoComplete="off" action="/login">

            <p className="border-b-4"> Bank Transfer </p>
      <div className="username">
          <TextField  id="outline-basic" label="Account Number" variant="outlined"/>
        </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="Account Number" variant="outlined" />
           </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="IFSC Code" variant="outlined" />
           </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="Party Name" variant="outlined" />
           </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
           </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={handleChange} />
           </div>
          <div className="submit">
             <Button variant="outlined" onClick={handleClick} type="submit"><button name="bankTransfer">Continue</button></Button>
           </div>
         </form>
    </div>
  )
}

export default SignUp;
