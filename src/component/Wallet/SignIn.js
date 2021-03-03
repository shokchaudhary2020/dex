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

function SignIn() {

  const [state, setState]  = useContext(Context);
    const [warning , setWarning] = useState(false)
    const [amount , setAmount] = useState(0);

  function handleChange(e)
  {
    setAmount(e.target.value);
  }
  function handleAddWallet()
  {
    var value = parseInt(amount);
    if(typeof value === "number")
    {
      setState(prevState => ({
        ...prevState ,
        totalMoney : prevState.totalMoney +  value ,
        status : "done"
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

    setTimeout(handleAddWallet , 30000);
  }

  const classes = useStyles();
  return (
    <div id="logo-wrapper form-height">
      {warning ? <WarningAlerts/> : <></>}
      <form  noValidate autoComplete="off" action="/login">
      <p className="border-b-4">Add Money Wallet</p>
      <div className="username m-2">
          <TextField  id="outline-basic" label="Account Number" variant="outlined"/>
        </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="Confirm Account Number" variant="outlined" />
           </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="IFSC No" variant="outlined" />
           </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
           </div>
           <div className="password m-2">
             <TextField id="outlined-basic" label="Enter Amount" onChange={handleChange} variant="outlined" />
           </div>
          <div className="submit">
             <Button variant="outlined" onClick={handleClick} type="submit">ADD MONEY</Button>
           </div>
         </form>
    </div>
  )
}

export default SignIn;
