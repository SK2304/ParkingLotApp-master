import React, { Component, useState, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import { GoogleMap, useLoadScript, InfoWindow, Marker } from '@react-google-maps/api';

import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import Alert from '@material-ui/lab/Alert';
import { Grid, TextField, Button } from '@material-ui/core'
import Form from "react-validation/build/form"
import LotsService from "../services/lots"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	map: {
		width: "100%"
	},
	form: {
		padding: 10
	}

});
const ChangeLot = (props) => {
	const id = props.location.state.id;
	const [address, setAddress] = useState("");
	const [geocode, setGeocode] = useState('');
	const [slots, setSlots] = useState(0);
    const [success, setSuccess] = useState('');

	const saveOrUpdateLot = (e) => {
		e.preventDefault();
		// let lot = { address: address, geocode: geocode, slots: slots};
        let lot = { slots: slots};
		console.log('lots => ' + JSON.stringify(lot));

		// step 5
		console.log('lots => ' + JSON.stringify(props));
        console.log(JSON.stringify(props.location.state.id));
		if (id === '_add') {
            console.log('hi111');
			const res = LotsService.createLots(lot).then(res => {
				props.history.push('/lots');
			});
		} else {
            console.log('hi222');
		     LotsService.updateLots(lot, id).then(res => {
                setSuccess(res.status) ;
				// props.history.push('/profile');
			});
		}
	}

	const classes = useStyles();
	const form = useRef();
	const containerStyle = {
		width: '100vw',
		height: '100vh'
	};


	let map;
		map = <div style={{ width: '100%' }}>

			<Form onSubmit={saveOrUpdateLot} ref={form}>

				{/* <Grid className={classes.form}>

					<TextField
						label='Address'
						value={address}
						onChange={event => setAddress(event.target.value)}
						variant='outlined'

						required
					/>
				</Grid>
				<Grid className={classes.form}>

					<TextField
						label='Geocode'
						value={geocode}
						onChange={event => setGeocode(event.target.value)}
						variant='outlined'
						autoFocus={true}
						required
					/>
				</Grid> */}
				<Grid className={classes.form}>

					<TextField
						label='Slots'
						value={slots}
						onChange={event => setSlots(event.target.value)}
						variant='outlined'

						required
					/>
				</Grid>


				<Button variant="outlined" type="submit" color="primary" style={{ textTransform: "none" }}>
					Submit
				</Button>
                {success == 200 && (
                    <Alert severity="success">successfully updated</Alert>
                  )}
			</Form>




		</div>
	
	return (map)
}

export default React.memo(ChangeLot)
