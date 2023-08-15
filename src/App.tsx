import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {StackContext} from './StackContext';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import AdminDashboard from "./pages/admin/AdminDashboard";
import RegisterFlight from "./pages/regiserFlight/RegisterFlight";


function App() {
    return (
        <BrowserRouter>
            <StackContext>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
                    <Route path="/register-flight" element={<RegisterFlight/>}/>
                </Routes>
            </StackContext>
        </BrowserRouter>
    );
}

export default App;
