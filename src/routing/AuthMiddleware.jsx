import { useJwt } from "react-jwt";
import localStorageKey from "../constant/localStorageKey.jsx";
import Login from "../components/login.jsx";

export default function AuthMiddleware({ children }) {
    const token = localStorage.getItem(localStorageKey.JWT_TOKEN_KEY);
    const decodedToken = useJwt(token);

    return decodedToken.isExpired === false ? children : <Login />;
}