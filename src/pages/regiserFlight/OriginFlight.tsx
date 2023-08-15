import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {InputLabel} from "@mui/material";
import FormControl from '@mui/material/FormControl/FormControl';
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import {FlightManagementService} from "../../services/FlightManagementService";
import {Airplane} from "../../types/Airplane";
import {FlightManagementDTOWrapper} from "./RegisterFlight";

interface IFlightManagementDTOWrapper{
    flightManagementDTOWrapper: FlightManagementDTOWrapper,
    setFlightManagementDTOWrapper: React.Dispatch<React.SetStateAction<FlightManagementDTOWrapper>>
}

export default function OriginFlight ({flightManagementDTOWrapper, setFlightManagementDTOWrapper}: IFlightManagementDTOWrapper) {
    const [airplane, setAirplane] = React.useState('');
    const [formActive, setFormActive] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const flightManagementService = new FlightManagementService();
            flightManagementService.selectAirplane().then(r => {
                setData(r.data.content);
                console.log(r.data.content);
            });
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        const plane = event.target.value;
        setAirplane(plane);
        console.log(event.target)
        data.forEach(function (value: Airplane) {
            if(value.planeNumber === plane){
                setFlightManagementDTOWrapper((flight) => ({
                    ...flight,
                    airplaneId: value.airplaneId}));
            }
        })
        console.log(flightManagementDTOWrapper)
        setFormActive(false);
    };

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
                Origin Flight
            </Typography>
            <Grid spacing={3}>
                <FormControl variant={"standard"} fullWidth sx={{ paddingBottom : 3}}>
                    <InputLabel id="demo-simple-select-label">Airplane</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={airplane}
                        label="Airplane"
                        onChange={handleChange}
                    >
                        {data.map((airplane: Airplane) => (
                            <MenuItem
                                key={airplane.airplaneId}
                                value={airplane.planeNumber}
                            >
                                {airplane.planeNumber}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        disabled={formActive}
                        required
                        id="firstName"
                        name="flightNumber"
                        label="Flight Nuber"
                        value={flightManagementDTOWrapper.flightNumber}
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="firstName"
                        name="flightFrom"
                        label="Flight From"
                        value={flightManagementDTOWrapper.flightFrom}
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="lastName"
                        name="flightTo"
                        label="Flight To"
                        value={flightManagementDTOWrapper.flightTo}
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="address1"
                        name="dateAndTimeFrom"
                        label="Date and Time Flight From"
                        value={flightManagementDTOWrapper.dateAndTimeFrom}
                        fullWidth
                        autoComplete="shipping address-line1"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="address2"
                        name="dateAndTimeTo"
                        label="Date and Time Flight To"
                        value={flightManagementDTOWrapper.dateAndTimeTo}
                        fullWidth
                        autoComplete="shipping address-line2"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        disabled={formActive}
                        required
                        id="city"
                        name="flightDuration"
                        label="Flight Duration"
                        value={flightManagementDTOWrapper.flightDuration}
                        fullWidth
                        autoComplete="shipping address-level2"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="city"
                        name="businessSeats"
                        label="Business Seats"
                        value={flightManagementDTOWrapper.businessSeats}
                        fullWidth
                        autoComplete="shipping address-level2"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="state"
                        name="businessSeatsPrice"
                        label="Business Seats Price"
                        value={flightManagementDTOWrapper.businessSeatsPrice}
                        fullWidth
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="zip"
                        name="economySeats"
                        label="Economy Seats"
                        value={flightManagementDTOWrapper.economySeats}
                        fullWidth
                        autoComplete="shipping postal-code"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        disabled={formActive}
                        required
                        id="country"
                        name="economySeatsPrice"
                        label="Economy Seats Price"
                        value={flightManagementDTOWrapper.economySeatsPrice}
                        fullWidth
                        autoComplete="shipping country"
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}