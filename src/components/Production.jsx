import Sidebar from "./Sidebar";
import './Production.css';
import { useEffect, useState } from "react";
import ModalFormInput from "./ModalFormInput";
import PropTypes from 'prop-types';


Production.propTypes = {
    modelId : PropTypes.any,
    refresh : PropTypes.func,
};

export default function Production( modelId, refresh) {
    const prodTitle = "Production Monitoring";
  useEffect(()=>{
    const oriTitle = document.title;
    document.title = prodTitle;
    return () => {
      document.title = oriTitle;
    }
  })
    const [dateTime, setDateTime] = useState('');   

  useEffect(() => {
    // Function to update the date and time
    function updateDateTime() {
      const newDate = new Date();
      const date = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();
      const hours = newDate.getHours();
      const minutes = newDate.getMinutes();
      const seconds = newDate.getSeconds();

      // Format the time and date as desired (e.g., "DD-MM-YYYY HH:MM:SS")
      const formattedDateTime = `${date}/${month}/${year}  Time : ${hours}:${minutes}:${seconds}`;

      // Update the state with the formatted date and time
      setDateTime(formattedDateTime);
    }

    // Update the date and time immediately when the component mounts
    updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row full-width vw-100">
          <Sidebar />
          <div className="col-10 pt-2" id="pagelink">
            <div className="card" id="prodcard">
              <div className="card-header">
                <div className="row">
                    <div className="col-10">
                        <h2 className="text-center fw-bolder text-light">MOTOR ASSY 1</h2>
                    </div>
                    <div className="col-2" id="inputplan">
                        <button className="btn btn-light btn-sm mt-1 text-dark fw-bolder" data-bs-toggle="modal" data-bs-target="#inputdata" >Input Plan</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <p className="text-light fw-bolder py-1">Date : {dateTime} </p>
                </div>
                <div className="col-2">

                </div>
            </div>
          </div>
        </div>
      </div>
      <ModalFormInput refresh={refresh} />
    </>
  );
}
