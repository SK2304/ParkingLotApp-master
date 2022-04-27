import React, { Component, useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { Grid, TextField, Button } from '@material-ui/core'
import LotsService from '../services/lots'
import { makeStyles } from '@material-ui/core/styles'
Geocode.setApiKey("AIzaSyD_b1NmcUmqAtXjhuB9frEePDIsujb5bqA")
Geocode.enableDebug()

const useStyles = makeStyles({

	form: {
		padding: 10
	}

});
var libraries = ["places", "geometry"]

const ModifyLots = (props) => {

	const [lots, setLots] = useState([])
	const [selectedLot, setSelectedLot] = useState(null)
	const [coor, setCoor] = useState({})
	const classes = useStyles();
	const park = [];
	const editlot = (id) => {
		props.history.push(`/add-lot/${id}`);
	}

	useEffect(() => {
		LotsService.getLots().then((res) => {
			setLots(res.data);

		});

	})
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyD_b1NmcUmqAtXjhuB9frEePDIsujb5bqA",
		libraries,
	});


	const sendToBooking = () => {
		props.history.push(
			{
				pathname: '/change_lot',
				state: selectedLot
			}
		)
	}

	const addlots = () => {
		props.history.push('/add-lots/_add');
	}
	const containerStyle = {
		width: '100vw',
		height: '100vh'
	};


	if (loadError) return "Load Error"
	if (!isLoaded) return "Not loaded"
	let map;
	if (props.center.lat !== undefined) {
		map = <div>



			<GoogleMap mapContainerStyle={containerStyle}
				zoom={props.zoom}
				center={props.center}

			>



				{lots.map(lot =>

				(<Marker
					key={lot.id}

					position={{
						lat: lot.lat,
						lng: lot.lng
					}}
					onClick={() => {
						setSelectedLot(lot);
						console.log(selectedLot)
					}}

				/>)

				)
				}


				{selectedLot && (

					<InfoWindow

						onCloseClick={() => {
							setSelectedLot(null);
						}}
						position={{
							lat: (selectedLot.lat + 0.0018),
							lng: (selectedLot.lng)
						}}
					>
						<div>
							<p>Address : {selectedLot.address}</p>
							<p>Created Slots : {selectedLot.slots}</p>
							<Button variant="outlined" onClick={sendToBooking} color="primary" style={{ textTransform: "none" }}>
								Modify
							</Button>
						</div>
					</InfoWindow>
				)}




			</GoogleMap>


		</div>
	} else {
		map = <div style={{ height: props.height }} />
	}
	return (map)
}


export default React.memo(ModifyLots)