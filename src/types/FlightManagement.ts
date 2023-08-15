import {Flight} from "./Flight";

class FlightManagement{
    flightManagementId: number;
    originFlight: Flight;
    destinationFlight: Flight;

    constructor(flightManagementId: number, flightTo: Flight, flightFrom: Flight) {
        this.flightManagementId = flightManagementId;
        this.originFlight = flightTo;
        this.destinationFlight = flightFrom;
    }
} export {FlightManagement}