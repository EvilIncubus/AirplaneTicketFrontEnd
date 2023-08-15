import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {FlightManagementDTOWrapper} from "./RegisterFlight";

interface IFlightManagementDTOWrapper{
    flightManagementDTOWrapper: FlightManagementDTOWrapper,
    setFlightManagementDTOWrapper: React.Dispatch<React.SetStateAction<FlightManagementDTOWrapper>>
}
export default function DestinationFlight({flightManagementDTOWrapper, setFlightManagementDTOWrapper}: IFlightManagementDTOWrapper) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFlightManagementDTOWrapper((prevFlight) => ({
            ...prevFlight,
            [name]: value,
        }));
        console.log(flightManagementDTOWrapper)
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Destination Flight
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="firstName"
                        name="dFlightNumber"
                        label="Flight Nuber"
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="dFlightFrom"
                        label="Flight From"
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="dFlightTo"
                        label="Flight To"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address1"
                        name="dDateAndTimeFrom"
                        label="Date and Time Flight From"
                        fullWidth
                        autoComplete="shipping address-line1"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address2"
                        name="dDateAndTimeTo"
                        label="Date and Time Flight To"
                        fullWidth
                        autoComplete="shipping address-line2"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="city"
                        name="dFlightDuration"
                        label="Fight Duration"
                        fullWidth
                        autoComplete="shipping address-level2"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}