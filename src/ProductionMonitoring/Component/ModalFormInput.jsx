/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../style/ModalFormInput.css";
import { useUser } from "../../Contexts/UserContext";

export default function ModalFormInput({ refresh }) {
  const [getData, setGetData] = useState({
    allModel: [],
    allGroup: [],
    allArduino: [],
  });
  const { user } = useUser();
  useEffect(() => {
    if (user != undefined && user != null) {
      axios
        .get(`http://localhost:4000/api/get-Data/${user}`)
        .then((response) => {
          setGetData(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  const initialSelectedGroup = "";
  const initialSelectedModel = "";
  const initialSelectedArduino = "";
  const initialPlan = 1;

  const groupOptions = getData.allGroup;
  const modelOptions = getData.allModel;
  const arduinoOptions = getData.allArduino;
  const [selectedGroup, setSelectedGroup] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [selectedArduino, setSelectedArduino] = useState();
  const [plan, setPlan] = useState(1);
  const [dismissTarget, setDismissTarget] = useState("");
  useEffect(() => {
    // kalo ada yang undefined, buat dismiss targetnya kosong
    // artinya bakal gak ke dismiss kalo submit
    if (selectedGroup === undefined || selectedModel === undefined) {
      setDismissTarget((_) => "");
    } else {
      setDismissTarget((_) => "modal");
    }
  }, [selectedGroup, selectedModel]);

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };
  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };
  const handleArduinoChange = (event) => {
    setSelectedArduino(event.target.value);
  };
  //   ******************************************* SUBMIT FORM *********************************
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the API using Axios
      const response = await axios.post("http://localhost:4000/formData/", {
        group_id: groupOptions.find((option) => option.group_name === selectedGroup)?.id,
        model_id: modelOptions.find((option) => option.model_name === selectedModel)?.id,
        plan: plan,
        arduino : selectedArduino,
      });
      console.log("API response:", response.data);
      setSelectedGroup(initialSelectedGroup);
      setSelectedModel(initialSelectedModel);
      setSelectedArduino(initialSelectedArduino);
      setPlan(initialPlan);
      refresh();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //   ******************************************* END OF SUBMIT FORM *********************************
  return (
    <>
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
                <select name="group" value={selectedGroup} onChange={handleGroupChange} id="groupSelect" className="form-select m-1 bg-secondary text-light" aria-label="Default select example" required>
                  {groupOptions?.map((option) => (
                    <option key={option.id} value={option.group_name}>
                      {`${option.group_name} (ID: ${option.id})`}
                    </option>
                  ))}
                </select>
                <label className="text-light mt-1" htmlFor="modelSelect">
                  Model
                </label>
                <select value={selectedModel} onChange={handleModelChange} className="form-select m-1 bg-secondary text-light" id="modelSelect" aria-label="Default select example" required>
                  {modelOptions?.map((options) => (
                    <option key={options.id} value={options.model_name}>
                      {`${options.model_name} (ID: ${options.id})`}
                    </option>
                  ))}
                </select>
                <label className="text-light mt-1" htmlFor="arduinoSelect">
                  Select Line
                </label>
                <select value={selectedArduino} onChange={handleArduinoChange} className="form-select m-1 bg-secondary text-light" id="arduinoSelect" aria-label="Default select example" required>
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
                  <button type="submit" id="submitButton" className="btn btn-primary mt-2" data-bs-dismiss={dismissTarget}>
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
