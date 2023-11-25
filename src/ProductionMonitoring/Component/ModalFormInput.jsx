/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../style/ModalFormInput.css";
import { Toast } from 'primereact/toast';

export default function ModalFormInput({ mainPmData }) {

  const initialSelectedGroup = mainPmData.allGroup[0];
  const initialSelectedModel = mainPmData.allModel[0];
  const initialSelectedArduino = mainPmData.allArduino[0];
  useEffect(() => {
    setSelectedGroup(initialSelectedGroup);
    setSelectedModel(initialSelectedModel);
    setSelectedArduino(initialSelectedArduino);
  } , [mainPmData])
  const initialPlan = 1;

  const groupOptions = mainPmData.allGroup;
  const modelOptions = mainPmData.allModel;
  const arduinoOptions = mainPmData.allArduino;
  const [selectedGroup, setSelectedGroup] = useState(initialSelectedGroup);
  const [selectedModel, setSelectedModel] = useState(initialSelectedModel);
  const [selectedArduino, setSelectedArduino] = useState(initialSelectedArduino);
  const [plan, setPlan] = useState(initialPlan);

  console.log('ARDUINO OPTIONS : ' , arduinoOptions)

  const handleGroupChange = (event) => {
    setSelectedGroup(groupOptions.find(group => group .group_name == event.target.value));
  };
  const handleModelChange = (event) => {
    setSelectedModel(modelOptions.find(model => model.model_name == event.target.value));
  };
  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };
  const handleArduinoChange = (event) => {
    setSelectedArduino(arduinoOptions.find(arduino => arduino.nama_arduino == event.target.value));
  };
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Success Adding Transaction', life: 2000});
  }
        
  //   ******************************************* SUBMIT FORM *********************************
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the API using Axios
      const response = await axios.post("http://localhost:4000/formData/", {
        group_id: selectedGroup?.id,
        model_id: selectedModel?.id,
        plan: plan,
        arduino : selectedArduino?.nama_arduino,
      });
      setSelectedGroup(initialSelectedGroup);
      setSelectedModel(initialSelectedModel);
      setSelectedArduino(initialSelectedArduino);
      setPlan(initialPlan);
      showSuccess();
      setTimeout(window.location.reload(true), 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   ******************************************* END OF SUBMIT FORM *********************************
  return (
    <>
    <Toast ref={toast} />
      <div className="modal fade" id="inputdata" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" id="bgmodal">
          <div className="modal-content" id="bgmodal">
            <div className="row">
              <div className="col-11">
                <h1 className="modal-title fs-5 text-light text-center fw-bolder mt-5 ps-5" id="exampleModalLabel">
                  PRODUCTION PLAN
                </h1>
              </div>
              <div className="col-1">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body">
              <form id="myForm" onSubmit={handleSubmit} className="formmodal">
                <label className="text-light" htmlFor="groupSelect">
                  Group
                </label>
                <select name="group" value={selectedGroup?.group_name} onChange={handleGroupChange} id="groupSelect" className="form-select m-1 bg-secondary text-light" aria-label="Default select example" required>
                  {groupOptions?.map((option) => (
                    <option key={option.id} value={option.group_name}>
                      {`${option.group_name} (ID: ${option.id})`}
                    </option>
                  ))}
                </select>
                <label className="text-light mt-1" htmlFor="modelSelect">
                  Model
                </label>
                <select value={selectedModel?.model_name} onChange={handleModelChange} className="form-select m-1 bg-secondary text-light" id="modelSelect" aria-label="Default select example" required>
                  {modelOptions?.map((options) => (
                    <option key={options.id} value={options.model_name}>
                      {`${options.model_name} (ID: ${options.id})`}
                    </option>
                  ))}
                </select>
                <label className="text-light mt-1" htmlFor="arduinoSelect">
                  Select Line
                </label>
                <select value={selectedArduino?.nama_arduino} onChange={handleArduinoChange} className="form-select m-1 bg-secondary text-light" id="arduinoSelect" aria-label="Default select example" required>
                  {arduinoOptions?.map((options) => (
                    <option key={options.nama_arduino} value={options.nama_arduino}>
                      {`${options.nama_arduino}`}
                    </option>
                  ))}
                </select>
                <div className="row">
                  <div className="col-md-12 m-1">
                    <label className="text-light mt-1 pb-1" htmlFor="input-plan">
                      Plan
                    </label>
                    <input type="number" id="input-plan" className="form-control mb-2 bg-secondary text-light" min={"1"} max={"999"} value={plan} onChange={handlePlanChange} />
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button  type="submit" id="submitButton" className="btn btn-primary mt-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
