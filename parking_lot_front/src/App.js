import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Maps from './components/Maps'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonAppBar from './components/Navbar'
import Login from './components/login'
import Register from './components/register'
import Profile from './components/profile'
import Booking from './components/Booking'
import MapView from './components/MapView'
import { Grid } from '@material-ui/core'
import BookedSlots from "./components/BookedSlots";

const App = () => {
  
    return (
      <div className="App">
        <ButtonAppBar/>
        {/* <Maps
          google={this.props.google}
          center={{lat: 18.5204, lng: 73.8567}}
          height='300px'
          zoom={15}
        /> */}
        <Grid container>   
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/bookedslots" component={BookedSlots} />
            <Route exact path="/book_lot" component={Booking} />
            <Route exact path="/lots" component={
              (props)=>(<MapView
                center={{lat: 38.9386885, lng: -94.6771676}}
                height='300px'
                zoom={15}
                {...props}
                />)
            } />
            <Route exact path="/add-lots/:id" component={(props)=>(<Maps
                center={{lat: 38.9386885, lng: -94.6771676}}
                height='300px'
                zoom={15}
                {...props}
                />)} />
            
          </Switch>
        </Grid>
      </div>
    );
  }

export default App;
