import axios from "axios";
import localStorageKey from "../constant/localStorageKey";
import jwt from "jwt-decode";
import { useEffect } from "react";

export default function AuthViewModel(){
    const token = localStorage.getItem(localStorageKey.JWT_TOKEN_KEY)
    const user = jwt(token);
    console.log(user);
    useEffect(() => {
        AuthViewModel();
    })
    
}