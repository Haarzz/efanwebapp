import "./style/MainPm.css";
import { useEffect, useState } from "react";
import ModelName from "./Component/ModelName";
import ProdPlan from "./Component/ProdPlan";
import Plan from "./Component/Plan";
import Actual from "./Component/Actual";
import Different from "./Component/Different";
import Efficiency from "./Component/Efficiency";
import RunModel from "./Component/RunModel";
import axios from "axios";
import ModalFormInput from "./Component/ModalFormInput";
import WebsocketService from "../websocket/websocket.jsx";
import DateTime from "./Component/DateTime.jsx";
import { useUser } from "../Contexts/UserContext.jsx";

export default function MainProductionMonitoringScreen() {

  // need refresh untuk ngerefresh satu page
  const [needRefresh, setNeedRefresh] = useState(false);
  const { user } = useUser();
  const refresh = () => {
    setNeedRefresh((needRefresh) => {
      return !needRefresh;
    });
  };

  const [allArduino, setAllArduino] = useState([]);
  const [selectedArduino, setSelectedArduino] = useState();

  // let [socket , setSocket] = useState(null);
  // useEffect(() => {
  //   setSocket(new WebsocketService);
  //   console.log('socket berhasil di inisiasi')
  // } , []);
  
  // useEffect(() => {
  //   console.log('model id ' , id , socket);
  //   socket?.setModelId(id, refresh);
  // }, [id, refresh, socket]);

  const selectedArduinoName = allArduino.find((arduino) => arduino.nama_arduino === selectedArduino.nama_arduino);

  
  const [isControlsEnabled, setIsControlsEnabled] = useState(true);
  useEffect(() => {
    const prodTitle = "Production Monitoring";
    const oriTitle = document.title;
    document.title = prodTitle;
    return () => {
      document.title = oriTitle;
    };
  } , []);


  const handleStartClick = () => {
    setIsControlsEnabled(false);
  };

  const handleStopClick = () => {
    setIsControlsEnabled(true);
  };
  return (
    <>
      <ModalFormInput refresh={refresh} />
      <div className="w-100 pt-2" id="pagelink">
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
            <DateTime />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-6">
                <RunModel allArduino={allArduino} chooseArduino={(newArduino) => setSelectedArduino(newArduino)} />
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
              <ModelName modelName={selectedArduino?.assignedTransactionId.model_id.model_name} />
            </div>
            <div className="row m-2">
              <ProdPlan plan={selectedArduino?.assignedTransactionId.plan} />
            </div>
            <div className="row m-2">
              <Plan />
            </div>
            <div className="row m-2">
              <Actual actual={selectedArduino?.assignedTransactionId.actual} />
            </div>
            <div className="row m-2">
              <Different transaction={selectedArduino?.assignedTransactionId} />
            </div>
          </div>
          <div className="col-4 " id="prodright">
            <Efficiency transaction={selectedArduino?.assignedTransactionId} />
          </div>
        </div>
      </div>

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
