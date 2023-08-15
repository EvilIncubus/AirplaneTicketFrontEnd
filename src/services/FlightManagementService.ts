import axios from "axios";
import {url} from "../config/url";
import {FlightManagementDTO} from "../typesDTO/FlightManagementDTO";

export class FlightManagementService {
    async getListOfFlightManagement(page: number, rowsPerPage: number) {
        const savedToken = localStorage.getItem("token");
        return await axios
            .get((url + "/rest/api/flight/get-flight-list"),
                {
                    params: {
                        page: page + 1,
                        size: rowsPerPage
                    },
                    headers: {
                        Authorization: `Bearer ${savedToken}`,
                    },
                });
    }

    async selectAirplane() {
        const savedToken = localStorage.getItem("token");
        return await axios
            .get((url + "/rest/api/flight/get-airplane-list"),
                {
                    headers: {
                        Authorization: `Bearer ${savedToken}`,
                    },
                });
    }

    async submitFlightRegistration(flightManagementDTO: FlightManagementDTO){
        const savedToken = localStorage.getItem("token");
        console.log(flightManagementDTO)
        return await axios
            .post(url + "/rest/api/flight/create-flight", flightManagementDTO ,
                {
                    headers: {
                        Authorization: `Bearer ${savedToken}`,
                    },
                });
    }
}