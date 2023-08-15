import { useState, createContext, ReactNode } from "react";
import jwt_decode from "jwt-decode";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

interface User {
  // Define the user properties
  // Example: id: number;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

interface NumberOfPositionContextType {
  numberOfPosition: number;
  setNumberOfPosition: React.Dispatch<React.SetStateAction<number>>;
}

interface FlightManagementIdContextType {
  flightManagementId: any; // Define the order ID type
  setFlightManagementId: React.Dispatch<React.SetStateAction<any>>;
}

interface OrderDetailsContextType {
  orderDetails: any; // Define the order details type
  setOrderDetails: React.Dispatch<React.SetStateAction<any>>;
}

interface HeaderContextType {
  header: string;
  setHeader: React.Dispatch<React.SetStateAction<string>>;
}

interface ProfileIdContextType {
  profileId: any; // Define the profile ID type
  setProfileId: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = createContext<UserContextType>({ user: {}, setUser: () => {} });
export const NumberOfPosition = createContext<NumberOfPositionContextType>({ numberOfPosition: 0, setNumberOfPosition: () => {} });
export const FlightManagementId = createContext<FlightManagementIdContextType>({ flightManagementId: 0, setFlightManagementId: () => {} });
export const OrderDetails = createContext<OrderDetailsContextType>({ orderDetails: {}, setOrderDetails: () => {} });
export const Header = createContext<HeaderContextType>({ header: "", setHeader: () => {} });
export const ProfileId = createContext<ProfileIdContextType>({ profileId: undefined, setProfileId: () => {} });

interface StackContextProps {
  children: ReactNode;
}

export const StackContext = ({ children }: StackContextProps) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState<User | {}>(() => {
    if (token) {
      return jwt_decode(token);
    } else {
      return {};
    }
  });
  const [numberOfPosition, setNumberOfPosition] = useState<number>(0);
  const [flightManagementId, setFlightManagementId] = useState<any>();
  const [orderDetails, setOrderDetails] = useState<any>({});
  const [header, setHeader] = useState<string>("Operator Dashboard");
  const [profileId, setProfileId] = useState<any>();

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <UserContext.Provider value={{ user, setUser }}>
      <NumberOfPosition.Provider value={{ numberOfPosition, setNumberOfPosition }}>
        <FlightManagementId.Provider value={{ flightManagementId, setFlightManagementId }}>
          <OrderDetails.Provider value={{ orderDetails, setOrderDetails }}>
            <Header.Provider value={{ header, setHeader }}>
              <ProfileId.Provider value={{ profileId, setProfileId }}>
                {children}
              </ProfileId.Provider>
            </Header.Provider>
          </OrderDetails.Provider>
        </FlightManagementId.Provider>
      </NumberOfPosition.Provider>
    </UserContext.Provider>
      </LocalizationProvider>
  );
};