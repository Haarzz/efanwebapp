import { useEffect, useState } from "react";
 
export default function DateTime({}){
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
      function updateDateTime() {
        const newDate = new Date();
        const date = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        const hours = newDate.getHours();
        const minutes = newDate.getMinutes();
        const seconds = newDate.getSeconds();
        const formattedDateTime = `${date}/${month}/${year}  Time : ${hours}:${minutes}:${seconds}`;
  
        setDateTime(formattedDateTime);
      }
  
      updateDateTime();
  
      const intervalId = setInterval(updateDateTime, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

    return ( <p className="text-light fw-bolder py-1">Date : {dateTime} </p>);
}