class SearchAirportDTO {
    airportName: string;
    page: number;
    size: number;

    constructor(airportName: string, page: number, size: number) {
        this.airportName = airportName;
        this.page = page;
        this.size = size;
    }
} export {SearchAirportDTO}