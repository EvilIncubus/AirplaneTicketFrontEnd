import {FlightManagement} from "../types/FlightManagement";

class FlightManagementDTO {
    flightManagement: FlightManagement;
    businessSeats: number;
    economySeats: number;
    priceBusinessSeats: number;
    priceEconomySeats: number;

    constructor(flightManagement: FlightManagement, businessSeats: number, economySeats: number, priceBusinessSeats: number, priceEconomySeats: number) {
        this.flightManagement = flightManagement;
        this.businessSeats = businessSeats;
        this.economySeats = economySeats;
        this.priceBusinessSeats = priceBusinessSeats;
        this.priceEconomySeats = priceEconomySeats;
    }

} export {FlightManagementDTO}