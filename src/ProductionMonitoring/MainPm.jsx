import "./style/MainPm.css";
import ModelName from "./Component/ModelName";
import ProdPlan from "./Component/ProdPlan";
import Plan from "./Component/Plan";
import Actual from "./Component/Actual";
import Different from "./Component/Different";
import Efficiency from "./Component/Efficiency";
import RunModel from "./Component/RunModel";
import ModalFormInput from "./Component/ModalFormInput";
import DateTime from "./Component/DateTime.jsx";
import useMainPmViewModel from "./MainPmViewModel.jsx";

export default function MainProductionMonitoringScreen() {
  const viewModel = useMainPmViewModel();

  return (
    <>
      <ModalFormInput mainPmData={viewModel.getData}/>
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
                  chooseArduino={(newArduino) => viewModel.chooseArduino(newArduino)} />
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
