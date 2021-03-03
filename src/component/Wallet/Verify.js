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
      width: '200',
    },
  },
}));

function Verify() {

  const [pin , setPin] = useState(false)
  var [state , setState ] = useContext(Context);

  function onChangeHandler(e)
  {
    setPin(e.target.value);
  }
  function handleClick(e)
  {
    e.preventDefault();
    setState(prevState => (
      {
        ...prevState,
        pin
      }
    ))
  }

  const classes = useStyles();
  return (
    <div id="logo-wrapper">
      <form  noValidate autoComplete="off" action="">

            <p className="border-b-4"> Verify Yourself </p>
            <div className="password m-2">
             <TextField id="outlined-basic" onChange={onChangeHandler} type="password" label="Enter Pin" variant="outlined" />
           </div>

          <div className="submit">
            <Button variant="outlined" onClick={handleClick} type="submit">Continue</Button>
           </div>
         </form>
    </div>
  )
}

export default Verify;
