import axios from "axios";
import { useEffect, useState } from "react";

export default function EnergyChart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/api/alldata')
        .then(response => {
            const mysqlData =response.data;
            setData(mysqlData);
        })
        .catch(error => {
            console.error('Error Fetching Data:', error);
        })
    }, [])
    
    return (
    <>

    </>
    )
}