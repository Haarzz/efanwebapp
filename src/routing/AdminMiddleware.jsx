import {  useNavigate } from "react-router";
import { useUser } from "../Contexts/UserContext";


// eslint-disable-next-line react/prop-types
export default function AdminMiddleware({ children }){
    const navigate = useNavigate()
    const user = useUser();
    if (user == 'admin') return children;
    return navigate(-1);
}