import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import WarningAlerts from '../Alerts/Alerts';
import './Login.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login() {

  const [warning , setWarning] = useState(false)

  function handleClick(e)
  {
    e.preventDefault();
    setWarning(prevState => true)
  }

  const classes = useStyles();
  return (
    <div id="logo-wrapper">
      {warning ? <WarningAlerts/> : <></>}
      <form  noValidate autoComplete="off" action="/login">
      <div className="username">
          <TextField  id="outline-basic" label="User Name" variant="outlined"/>
        </div>
           <div className="password">
             <TextField id="outlined-basic" label="Password" variant="outlined" />
           </div>
          <div className="submit">
             <Button variant="outlined" onClick={handleClick} type="submit">Login</Button>
           </div>
         </form>
    </div>
  )
}

export default Login
