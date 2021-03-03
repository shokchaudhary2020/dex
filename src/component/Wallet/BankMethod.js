import React , {useEffect, useContext} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Context} from '../Context/CreateContext';


function  BankMethod (props){
var [state , setState] = useContext(Context);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width : 200,
      height : 140,
      margin : 10,
      backgroundColor : '#f3f3f3',
      flexDirection : 'column',
      alignItems : 'center'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }));

  const classes = useStyles();
  const theme = useTheme();

  function onClickHandler(e)
  {
    if(e.target.name === "bankTransfer")
    {
      setState(prevState => ({
        ...prevState ,
        "bankTransfer" : true ,
        "addWallet"  : false
      }))
    }
    else if(e.target.name === "addWallet")
    {
      setState(prevState => ({
        ...prevState ,
        "bankTransfer" : false ,
        "addWallet"  : true
      }))
    }
  }

    return (
      <div className="camera-card">
        <Card className={classes.root}>
           <div className={classes.details}>
             <CardContent className={classes.content}>
               <div id="container">
               </div>
               <Button onClick={onClickHandler}  color="secondary"><button name = "bankTransfer">Bank Transfer</button></Button>
             </CardContent>
             <Button  onClick={onClickHandler} color="primary"><button name = "addWallet" >Add to Wallet</button> </Button>
           </div>
         </Card>
    </div>
    );

}
export default BankMethod;
