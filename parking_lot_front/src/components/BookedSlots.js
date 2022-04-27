import React, { Component, useState, useEffect } from 'react';
import AuthService from "../services/auth.service";
import { Paper, Grid, TextField, Button, Card, CircularProgress } from '@material-ui/core'
import BookingService from '../services/BookingService';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CheckButton from "react-validation/build/button";
import Table from "react-bootstrap/Table";
import Moment from 'react-moment';

const BookedSlots = () => {
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser)
    console.log(currentUser.roles[0]);

    const [bookedlots, setBookedlots] = useState([]);
    useEffect(() => {
        console.log("hii");

        if (bookedlots.length == 0) {
            BookingService.getBooking(currentUser.username, currentUser.roles[0]).then((res) => {
                setBookedlots(res.data);
                console.log(res.data);
            });
        }
    })
    return (
        <Grid container alignItems="center" direction="column" >
            
            <div>
                {bookedlots.length ? (
                <><Typography variant="h2">
                        Booked Slot Details Can be Viewed Here
                    </Typography>
                    <table class="center" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th> <th>Geocode</th> <th>Vehicle No</th><th>Start time</th> <th>End time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookedlots.map((i) => {
                                    const cust_s = new Date(i.starttime * 1000);
                                    const cust_e = new Date(i.endtime * 1000);
                                    const st_time = cust_s.toLocaleDateString() + ' ' + cust_s.toLocaleTimeString();
                                    const end_time = cust_e.toLocaleDateString() + ' ' + cust_e.toLocaleTimeString();
                                    return (
                                        <tr>
                                            <td>{i.username}</td>
                                            <td>{i.geocode}</td>
                                            <td>{i.vehicleno}</td>
                                            <td>{st_time}</td>
                                            <td>{end_time}</td>
                                        </tr>
                                    );

                                })}


                            </tbody>
                        </table></> ) : <Typography variant="h2">
                No Booked Slots for you. Please start booking. 
            </Typography>

                }
            </div>
        </Grid>

    );
};

export default BookedSlots;
