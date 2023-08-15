import axios from "axios";
import {url} from "../config/url";
import {AuthenticationRequest} from "../typesDTO/AuthenticationRequest";

export class LoginService {
    async login(authenticationRequest: AuthenticationRequest) {
        return await axios.post<string>(url + `/rest/api/auth/login`, authenticationRequest);
    }
}