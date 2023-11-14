import "./style/MainPm.css";
import ModelName from "./Component/ModelName";
import ProdPlan from "./Component/ProdPlan";
import Plan from "./Component/Plan";
import Actual from "./Component/Actual";
import Different from "./Component/Different";
import Efficiency from "./Component/Efficiency";
import RunModel from "./Component/RunModel";
import axios from "axios";
import ModalFormInput from "./Component/ModalFormInput";
import DateTime from "./Component/DateTime.jsx";
import useMainPmViewModel from "./MainPmViewModel.jsx";

export default function MainProductionMonitoringScreen() {
  const viewModel = useMainPmViewModel();
  console.log("SELECTED ARDUINO " , viewModel.selectedArduino)
  console.log("ASSIGNED TRANSACTION " , viewModel.selectedArduino?.assigned_transactionId)

  return (
    <>
      <ModalFormInput refresh={viewModel.refresh} mainPmData={viewModel.getData}/>
      <div className="w-100 pt-2" id="pagelink">
        <div className="card" id="prodcard">
          <div className="card-header">
            <div className="row">
              <div className="col-10">
                <h2 className="text-center fw-bolder text-light">MOTOR ASSY 1</h2>
              </div>
              <div className="col-2" id="inputplan">
                <button className="btn btn-light btn-sm mt-1 text-dark fw-bolder" data-bs-toggle="modal" data-bs-target="#inputdata" disabled={!viewModel.isControlsEnabled}>
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
                <RunModel 
                  allArduino={viewModel.getData.allArduino} 
                  chooseArduino={(newArduino) => viewModel.setSelectedArduino(newArduino)} />
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-success" data-bs-toggle="button" onClick={viewModel.handleStartClick}>
                  Start
                </button>
                <button type="button" className="btn btn-danger ms-2 " data-bs-toggle="button" onClick={viewModel.handleStopClick}>
                  Stop
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8" id="prodleft">
            <div className="row m-2">
              <ModelName modelName={viewModel.selectedArduino?.assigned_transactionId?.model_id?.model_name} />
            </div>
            <div className="row m-2">
              <ProdPlan plan={viewModel.selectedArduino?.assigned_transactionId?.plan} />
            </div>
            <div className="row m-2">
              <Plan />
            </div>
            <div className="row m-2">
              <Actual actual={viewModel.selectedArduino?.assigned_transactionId?.actual} />
            </div>
            <div className="row m-2">
              <Different transaction={viewModel.selectedArduino?.assigned_transactionId} />
            </div>
          </div>
          <div className="col-4 " id="prodright">
            <Efficiency transaction={viewModel.selectedArduino?.assigned_transactionId} />
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
