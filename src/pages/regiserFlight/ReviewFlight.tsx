import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {FlightManagementDTOWrapper} from "./RegisterFlight";
import Button from "@mui/material/Button";
import {FlightManagementService} from "../../services/FlightManagementService";
import {FlightManagementDTO} from "../../typesDTO/FlightManagementDTO";
import {Flight} from "../../types/Flight";
import {Airplane} from "../../types/Airplane";
import {Airline} from "../../types/Airline";
import {Seat} from "../../types/Seat";
import {FlightManagement} from "../../types/FlightManagement";

const products = [
    {
        name: 'FLight Number',
        price: 'TFH 34E',
    },
    {
        name: 'FLight From',
        desc: 'KIV',
        price: '13-07-2023 14:20',
    },
    {
        name: 'FLight To',
        desc: 'OTP',
        price: '13-07-2023 15:20',
    },
    {
        name: 'FLight Number',
        price: 'TFF  E23',
    },
    {
        name: 'FLight From',
        desc: 'OTP',
        price: '13-07-2023 18:20',
    },
    {
        name: 'FLight To',
        desc: 'KIV',
        price: '13-07-2023 19:20',
    },
];
const payments = [
    { name: 'Business seat price', detail: ' $ 60' },
    { name: 'Economy seat price', detail: '$ 40' },
];
interface IFlightManagementDTOWrapper{
    flightManagementDTOWrapper: FlightManagementDTOWrapper,
    setFlightManagementDTOWrapper: React.Dispatch<React.SetStateAction<FlightManagementDTOWrapper>>
}

export default function ReviewFlight({flightManagementDTOWrapper, setFlightManagementDTOWrapper}: IFlightManagementDTOWrapper) {
    const handleSubmitFlight = () => {
        const airline = new Airline(0, '', '', '');
        const airplane = new Airplane(flightManagementDTOWrapper.airplaneId,'', airline, 0);
        const flightTo = new Flight(0, flightManagementDTOWrapper.flightNumber, airplane, new Array<Seat>() ,flightManagementDTOWrapper.flightFrom, flightManagementDTOWrapper.flightTo, new Date(flightManagementDTOWrapper.dateAndTimeFrom).toISOString().slice(0, -1), new Date(flightManagementDTOWrapper.dateAndTimeTo).toISOString().slice(0, -1), flightManagementDTOWrapper.flightDuration);
        const flightFrom = new Flight(0, flightManagementDTOWrapper.dFlightNumber, airplane, new Array<Seat>() ,flightManagementDTOWrapper.dFlightFrom, flightManagementDTOWrapper.dFlightTo, new Date(flightManagementDTOWrapper.dDateAndTimeFrom).toISOString().slice(0, -1), new Date(flightManagementDTOWrapper.dDateAndTimeTo).toISOString().slice(0, -1), flightManagementDTOWrapper.dFlightDuration);
        const flightManagement = new FlightManagement(0, flightTo, flightFrom);
        const flightManagementDTO = new FlightManagementDTO(flightManagement, flightManagementDTOWrapper.businessSeats, flightManagementDTOWrapper.economySeats, flightManagementDTOWrapper.businessSeatsPrice, flightManagementDTOWrapper.economySeatsPrice);
        const flightManagementService = new FlightManagementService();
        console.log(flightManagementDTO);
        flightManagementService.submitFlightRegistration(flightManagementDTO).then((r) => {console.log(r) });
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Flight Review
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Airplane
                    </Typography>
                    <Typography gutterBottom>TU 134</Typography>
                    <Typography gutterBottom>Number of seats 120</Typography>
                    <Typography gutterBottom>Amount business Seats 30</Typography>
                    <Typography gutterBottom>Amount business Seats 90</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Flight details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Button
                variant="contained"
                onClick={handleSubmitFlight}
                sx={{ mt: 3, ml: 1 }}
            >
                Confirm Flight!
            </Button>
        </React.Fragment>
    );
}