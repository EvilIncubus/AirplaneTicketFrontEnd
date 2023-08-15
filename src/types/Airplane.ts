import {Airline} from "./Airline";

class Airplane {
    airplaneId: number;
    planeNumber: string;
    airline: Airline;
    numberOfSeats: number;

    constructor(airplaneId: number, planeNumber: string, airline: Airline, numberOfSeats: number) {
        this.airplaneId = airplaneId;
        this.planeNumber = planeNumber;
        this.airline = airline;
        this.numberOfSeats = numberOfSeats;
    }

}export{Airplane}