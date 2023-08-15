class Airline {
    airlineId: number;
    nameCompany: string;
    codeCompany: string;
    description: string;

    constructor(airlineId: number, nameCompany: string, codeCompany: string, description: string) {
        this.airlineId = airlineId;
        this.nameCompany = nameCompany;
        this.codeCompany = codeCompany;
        this.description = description;
    }
}export {Airline}