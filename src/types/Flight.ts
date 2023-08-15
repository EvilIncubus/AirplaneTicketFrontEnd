import {Airplane} from "./Airplane";
import {Seat} from "./Seat";

class Flight {
    flightId: number;
    flightNumber: string;
    airplane: Airplane;
    seats: Array<Seat>;
    departureLocation: string;
    destination: string;
    departureDateTime: string;
    arrivalDateTime: string;
    flightDuration: string;

    constructor(flightId: number, flightNumber: string, airplane: Airplane, seats: Array<Seat>, departureLocation: string, destination: string, departureDateTime: string, arrivalDateTime: string, flightDuration: string) {
        this.flightId = flightId;
        this.flightNumber = flightNumber;
        this.airplane = airplane;
        this.seats = seats;
        this.departureLocation = departureLocation;
        this.destination = destination;
        this.departureDateTime = departureDateTime;
        this.arrivalDateTime = arrivalDateTime;
        this.flightDuration = flightDuration;
    }
} export {Flight}