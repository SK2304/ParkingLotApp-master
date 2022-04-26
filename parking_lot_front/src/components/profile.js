import React from "react";
import AuthService from "../services/auth.service";
import { Paper, Grid, TextField, Button, Card, CircularProgress } from '@material-ui/core'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CheckButton from "react-validation/build/button";
const useStyles = makeStyles({
  root:{
    textAlign: "left",
  },
  card: {
    minWidth: 275,
    margin: 20
  },
  inCard:{
    margin:30,
  },
  form:{
    padding:100
  }
 
});

const Profile = () => {
  const classes = useStyles();
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser)
  return (
    <Grid className={classes.root} container alignItems="center" direction="column" >
      
       <Typography variant="h2">
        Welcome to Parking App: <strong>{currentUser.username}</strong>
       </Typography>
        
       <Typography variant="h6"> 
        <strong>Please click on Book Parking Lot to reserve your booking</strong>
        
        </Typography>
    </Grid>
    
  );
};

export default Profile;
