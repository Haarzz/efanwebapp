import Sidebar from "./Sidebar";
import "./Production.css";
import { useEffect, useState } from "react";
import ModalFormInput from "./ModalFormInput";
import PropTypes from "prop-types";

Production.propTypes = {
  modelId: PropTypes.any,
  refresh: PropTypes.func,
};

export default function Production(modelId, refresh) {
  const prodTitle = "Production Monitoring";
  useEffect(() => {
    const oriTitle = document.title;
    document.title = prodTitle;
    return () => {
      document.title = oriTitle;
    };
  });
  const [dateTime, setDateTime] = useState("");

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
                    <button className="btn btn-light btn-sm mt-1 text-dark fw-bolder" data-bs-toggle="modal" data-bs-target="#inputdata">
                      Input Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <p className="text-light fw-bolder py-1">Date : {dateTime} </p>
              </div>
              <div className="col-2">
                <select>
                  <option>TRX....</option>
                </select>
              </div>
            </div>
            <div className="row">
                <div className="col-8" id="prodleft">
                    <div className="row m-2">
                        <div className="col-4">
                            <div className="card" id="prodbgleft">
                                <div className="card-body fs-3 fw-bolder h-auto my-2 ">MODEL NAME</div>
                        </div>
                        </div>
                        <div className="col-8">
                            <div className="card" id="prodbgright">
                                <div className="card-body fs-1 fw-bolder text-end h-auto">17CDUN</div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-4">
                            <div className="card" id="prodbgleft">
                                <div className="card-body fs-2 fw-bolder" id="leftpadd">PROD. PLAN</div>
                        </div>
                        </div>
                        <div className="col-8">
                            <div className="card" id="prodbgright">
                                <div className="card-body fw-bolder text-end" id="fontprodleft">750</div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-4">
                            <div className="card" id="prodbgleft">
                                <div className="card-body fs-2 fw-bolder" id="leftpadd">PLAN</div>
                        </div>
                        </div>
                        <div className="col-8">
                            <div className="card" id="prodbgright">
                                <div className="card-body fw-bolder text-end " id="fontprodleft">37</div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-4">
                            <div className="card" id="prodbgleft">
                                <div className="card-body fs-2 fw-bolder" id="leftpadd">ACTUAL</div>
                        </div>
                        </div>
                        <div className="col-8">
                            <div className="card" id="prodbgright">
                                <div className="card-body fw-bolder text-end h-auto" id="fontprodleft">35</div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-4">
                            <div className="card" id="prodbgleft">
                                <div className="card-body fs-2 fw-bolder" id="leftpadd">DIFFERENT</div>
                        </div>
                        </div>
                        <div className="col-8">
                            <div className="card" id="prodbgright">
                                <div className="card-body fw-bolder text-end h-auto" id="fontprodleft">-2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 " id="prodright">
                    <div className="card my-2" id="prodbgleft">
                        <div className="card-body fs-3 fw-bolder text-center m-2" >PROD./HEAD</div>
                    </div>
                    <div className="card my-2" id="prodbgright">
                        <div className="card-text fs-3 fw-bolder text-start ps-4 h-auto">TARGET : 14.05</div>
                    </div>
                    <div className="card my-2" id="prodbgright">
                        <div className="card-body  fw-bolder text-center h-auto " id="fonttext">3.85</div>
                    </div>
                    <div className="card my-2" id="prodbgleft">
                        <div className="card-text fs-3 fw-bolder text-center ps-4 h-auto">EFFICIENCY</div>
                    </div>
                    <div className="card my-2" id="prodbgright">
                        <div className="card-body fw-bolder text-center h-auto" id="fonttext">90%</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ModalFormInput refresh={refresh} />
    </>
  );
}
