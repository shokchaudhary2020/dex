import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>Stop</AlertTitle>
        Wallet is completed. <strong>(Under review work......)</strong>
      </Alert>
    </div>
  );
}
