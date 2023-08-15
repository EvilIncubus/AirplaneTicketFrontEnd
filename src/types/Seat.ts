import {SeatType} from "./SeatType";

class Seat {
    seatId: number;
    seatType: SeatType;
    placeNumber: number;
    availablePlace:boolean;
    priceSeat:number;
    //TODO remove flight id
    flightId:bigint;

    constructor(seatId: number, seatType: SeatType, placeNumber: number, availablePlace: boolean, priceSeat: number, flightId: bigint) {
        this.seatId = seatId;
        this.seatType = seatType;
        this.placeNumber = placeNumber;
        this.availablePlace = availablePlace;
        this.priceSeat = priceSeat;
        this.flightId = flightId;
    }
} export {Seat}