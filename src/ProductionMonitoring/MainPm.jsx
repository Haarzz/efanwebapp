import Sidebar from "../components/Sidebar";
import "./MainPm.css";
import { useEffect, useState } from "react";
import ModelName from "./ModelName";
import ProdPlan from "./ProdPlan";
import Plan from "./Plan";
import Actual from "./Actual";
import Different from "./Different";
import Efficiency from "./Efficiency";
import socket from "../websocket/websocket.jsx";
import RunModel from "./RunModel";
import axios from "axios";
import ModalFormInput from "./ModalFormInput";

export default function MainProductionMonitoringScreen() {
  // need refresh untuk ngerefresh satu page
  const [needRefresh, setNeedRefresh] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const refresh = () => {
    setNeedRefresh((needRefresh) => {
      return !needRefresh;
    });
  };
  // ini kenapa kok ditaruh disini, karena ini dipake di run model sama di tabel
  // eslint-disable-next-line no-unused-vars
  const [allTransactionData, setAllTransactionData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/alldata") // Update with your API endpoint
        .then((response) => response.json())
        .then((newData) => setAllTransactionData(newData))
        .catch((error) => console.error("Error fetching all transaction data:", error));
  }, [needRefresh]);

  const [id, setModelId] = useState();

  useEffect(() => {
    socket.setModelId(id, refreshPage);
  }, [id, refreshPage]);

  const model = allModel.find((model) => model.ID === id);

  const prodTitle = "Production Monitoring";
  const [isControlsEnabled, setIsControlsEnabled] = useState(true);
  useEffect(() => {
    const oriTitle = document.title;
    document.title = prodTitle;
    return () => {
      document.title = oriTitle;
    };
  });
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

  const handleStartClick = () => {
    setIsControlsEnabled(false);
  };

  const handleStopClick = () => {
    setIsControlsEnabled(true);
  };
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
                    <button className="btn btn-light btn-sm mt-1 text-dark fw-bolder" data-bs-toggle="modal" data-bs-target="#inputdata" disabled={!isControlsEnabled}>
                      Input Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <p className="text-light fw-bolder py-1">Date : {dateTime} </p>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <RunModel allModel={allModel} chooseModel={(newModel) => setModelId(newModel.ID)} />
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-success" data-bs-toggle="button" onClick={handleStartClick}>
                      Start
                    </button>
                    <button type="button" className="btn btn-danger ms-2 " data-bs-toggle="button" onClick={handleStopClick}>
                      Stop
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8" id="prodleft">
                <div className="row m-2">
                  <ModelName model={model} />
                </div>
                <div className="row m-2">
                  <ProdPlan model={model} />
                </div>
                <div className="row m-2">
                  <Plan model={model} />
                </div>
                <div className="row m-2">
                  <Actual model={model} />
                </div>
                <div className="row m-2">
                  <Different model={model} />
                </div>
              </div>
              <div className="col-4 " id="prodright">
                <Efficiency model={model} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalFormInput refresh={refreshPage} />
    </>
  );
}

// eslint-disable-next-line no-unused-vars
function triggerNode(modelId, refresh) {
  if (modelId !== undefined)
    axios
      .put(`http://localhost:4000/api/increment-transaction/${modelId}`) // Update with your API endpoint
      .then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          refresh();
        }
      )
      .catch((error) => console.error("Error fetching data:", error));
}
