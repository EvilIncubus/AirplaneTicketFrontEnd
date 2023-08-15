import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import {Header, FlightManagementId} from "../../StackContext";
import {useNavigate} from "react-router-dom";
import {FlightManagement} from "../../types/FlightManagement";

interface Props {
    flightManagement: FlightManagement;
}

export const AdminDashboardRow: React.FC<Props> = ({flightManagement}) => {
    // const { flightManagementId, setFlightManagementId } = React.useContext(FlightManagementId);
    // const { header, setHeader } = React.useContext(Header);
    let navigate = useNavigate();


    // const hanldeViewOrder = async () => {
    //   setFlightManagementId(flightManagemnt.flightManagemntId);
    // };

    // const handleSetHeader = (value) => {
    //   console.log(value);
    //   setHeader(value);
    // };

    return (
        <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>{flightManagement.flightManagementId.toString()}</TableCell>
            <TableCell>{flightManagement.destinationFlight.flightNumber}</TableCell>
            <TableCell>{flightManagement.destinationFlight.departureLocation}</TableCell>
            <TableCell>{flightManagement.destinationFlight.destination}</TableCell>
            <TableCell>{flightManagement.originFlight.flightNumber}</TableCell>
            <TableCell>{flightManagement.originFlight.departureLocation}</TableCell>
            <TableCell>{flightManagement.originFlight.destination}</TableCell>
            <TableCell>
                <Button
                    onClick={() => {
                        navigate("/admin-panel/current-flight-management");
                        // hanldeViewOrder(),
                        //   handleSetHeader("Flight Management");
                    }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 1, mb: 1}}
                >
                    View Details
                </Button>
            </TableCell>
        </TableRow>
    );
};