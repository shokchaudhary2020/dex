import React, {useState, useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import WarningAlerts from '../Alerts/Alerts';
import {Link} from 'react-router-dom';
import Alerts from '../Alerts/Alerts';
import './Login.module.css'

import {Context} from '../Context/CreateContext';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login() {

  const [state, setState] = useContext(Context);

  var defaultPassword = state.defaultPassword;

  const [warning , setWarning] = useState(true)  // slight change here 
  const [password , setPassword]  = useState('');

  function warningSetter()
  {
    setWarning(true);
  }

  function handleClick(e)
  {
    // e.preventDefault();

    if(e.target.value !== defaultPassword)
    {
      setWarning(true);
    }

     if(password === state.defaultPassword)
     setState(prevState => ({
       ...prevState,
       password
     }))


  }

  function handleOnChange(e)
  {
    setPassword(e.target.value);


    // if(e.target.value === defaultPassword)
    // {
    //   setWarning(false);
    // }
  }

  // fixing problems 

  const classes = useStyles();
  return (
    <div id="logo-wrapper">
      {warning ? <WarningAlerts/> : <></>}
      <form  noValidate autoComplete="off" action="">
      <div className="username">
          <TextField  id="outline-basic" label="User Name" variant="outlined"/>
        </div>
           <div className="password">
             <TextField id="outlined-basic" onChange={handleOnChange} type="password" label="Password" variant="outlined" />
           </div>
          <div className="submit">
            {
              password === defaultPassword ?
              <Link to='/payment'>
              <Button variant="outlined" onClick={handleClick} type="submit">Login</Button>
            </Link> :
            <Link to="/">
            <Button variant="outlined"  type="submit">Login</Button>
          </Link>
            }
           </div>
         </form>
    </div>
  )
}

export default Login
