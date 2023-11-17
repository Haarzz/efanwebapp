import {  Navigate} from "react-router";
import { useUser } from "../Contexts/UserContext";


// eslint-disable-next-line react/prop-types
export default function AdminMiddleware({ children }){
    const user = useUser();
    console.log('USER ' , user)
    if (user.user == 'admin') return children;
    else return (<Navigate to={'..'}/>);
}