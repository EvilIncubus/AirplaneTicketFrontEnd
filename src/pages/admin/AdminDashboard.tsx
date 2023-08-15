import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import {Container} from "@mui/material";
import {FlightManagementService} from "../../services/FlightManagementService";
import {AdminDashboardRow} from "./AdminDashboardRow";
import {FlightManagement} from "../../types/FlightManagement";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";

export default function AdminDashboard() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData] = React.useState([]);
    const [count, setCount] = React.useState([]);
    let navigate = useNavigate();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        const flightManagementService = new FlightManagementService();
        flightManagementService.getListOfFlightManagement(newPage, rowsPerPage).then(r => {
            setData(r.data.content);
            setCount(r.data);
            console.log(r.data.content);
        });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        const flightManagementService = new FlightManagementService();
        flightManagementService.getListOfFlightManagement(0, +event.target.value).then(r => {
            setData(r.data.content);
            setCount(r.data);
            console.log(r.data.content);
        });
    };

    React.useEffect(() => {
        const flightManagementService = new FlightManagementService();
            flightManagementService.getListOfFlightManagement(page, rowsPerPage).then(r => {
                setData(r.data.content);
                setCount(r.data);
                console.log(r.data.content);
            });
    }, [page, rowsPerPage]);

    return (
        <>
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Company name
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Flight Management Id</TableCell>
                                <TableCell align="left">Flight Tur Number</TableCell>
                                <TableCell align="left">Flight Tur From</TableCell>
                                <TableCell align="left">Flight Tur To</TableCell>
                                <TableCell align="left">Flight Re Tur Number</TableCell>
                                <TableCell align="left">Flight Re Tur From </TableCell>
                                <TableCell align="left">Flight Re Tur To</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((flightManagementProp: FlightManagement) => (
                                <AdminDashboardRow flightManagement={flightManagementProp}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={count.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Box textAlign='center'>
                <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    onClick={() => {navigate("/register-flight")}}>
                    Register Flight
                </Button>
                </Box>
            </Container>
        </>
    )
        ;
}