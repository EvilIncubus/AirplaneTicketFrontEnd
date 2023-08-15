import axios from "axios";
import {url} from "../config/url";
import {SearchAirportDTO} from "../typesDTO/SearchAirportDTO";

export class AirportService {
    async getSearchListAirport(searchAirportDTO: SearchAirportDTO) {
        console.log(searchAirportDTO);
        return await axios
            .post(url + "/rest/api/airport/get-search-airport-list", searchAirportDTO);
    }
}