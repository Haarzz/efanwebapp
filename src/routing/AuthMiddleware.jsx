import { useJwt } from "react-jwt";
import localStorageKey from "../constant/localStorageKey.jsx";
import { Navigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
export default function AuthMiddleware({ children }) {
    const token = localStorage.getItem(localStorageKey.JWT_TOKEN_KEY);
    const decodedToken = useJwt(token);
    
    if (decodedToken.isExpired === false) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
}