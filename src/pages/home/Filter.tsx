import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {Autocomplete} from "@mui/material";
import {AirportService} from "../../services/AirportService";
import {SearchAirportDTO} from "../../typesDTO/SearchAirportDTO";
import {Airport} from "../../types/Airport";
import {DatePicker} from "@mui/x-date-pickers";

interface Airports {
    label: string;
    airportCode: string;
}

function disableRandomDates() {
    return Math.random() > 0.7;
}

// function disableNonFlightsDay(date) {
//     return date.getDay() === 0 || date.getDay() === 6;
// }

export default function Filter() {

    const [company, setCompany] = React.useState<Airports[]>([]);
    const [selectFlightFrom, setSelectFlightFrom] = React.useState<string>();
    const [selectFlightTo, setSelectFlightTo] = React.useState<string>();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {value},
        } = event;
        const airportService = new AirportService();
        const searchAirportDTO = new SearchAirportDTO(value, 1, 5);
        airportService.getSearchListAirport(searchAirportDTO).then(r => {
            console.log(r.data);
            const responseData: Airport[] = r.data.content;
            console.log(responseData);
            const renamedDataArray: Airports[] = responseData.map(item => ({
                label: item.airportName + " " + item.airportCode,
                airportCode: item.airportCode
            }));
            console.log(renamedDataArray);
            setCompany(
                renamedDataArray
            );
            console.log(company);
            console.log(selectFlightTo);
        });
    };

    const handleDate = () => {
        const airportCode = selectFlightTo?.split(" ", 1);
        console.log(airportCode);
    }

    return (
        <React.Fragment>
            <Container component="main" maxWidth="lg" sx={{mb: 4}}>
                <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                    <Typography component="h1" variant="h4" align="center">
                        Flights
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id="combo-box-demo"
                                options={company}
                                onInputChange={(event, newInputValue) => {
                                    setSelectFlightFrom(newInputValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        onChange={handleChange}
                                        label="Flight From"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Autocomplete
                                disablePortal
                                fullWidth
                                id="combo-box-demo"
                                options={company}
                                onInputChange={(event, newInputValue) => {
                                    setSelectFlightTo(newInputValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        onChange={handleChange}
                                        label="Flight To"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <DatePicker label="Flight Date" shouldDisableDate={disableRandomDates}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <DatePicker label="Retur Date" shouldDisableDate={disableRandomDates}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
}