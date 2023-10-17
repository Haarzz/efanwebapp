/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import '../style/ModalFormInput.css';

export default function ModalFormInput({ refresh }) {
  const initialSelectedGroup = "";
  const initialSelectedModel = "";
  const initialPlan = 1;  



  const groupOptions = [
    { value: "", text: "Choose Group" },
    { value: "Group A", text: "Group A" },
    { value: "Group B", text: "Group B" },
    { value: "Group C", text: "Group C" },
  ];
  const modelOptions = [
    { value: "", text: "Choose Model" },
    { value: "Model A", text: "Model A" },
    { value: "Model B", text: "Model B" },
    { value: "Model C", text: "Model C" },
  ];
  const [selectedGroup, setSelectedGroup] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [plan, setPlan] = useState(1);
  const [dismissTarget , setDismissTarget] = useState('');
  useEffect(()=>{
    // kalo ada yang undefined, buat dismiss targetnya kosong
    // artinya bakal gak ke dismiss kalo submit
    if (selectedGroup === undefined || selectedModel === undefined){
        setDismissTarget((_) => '');
    }
    else {
        setDismissTarget((_) => 'modal');
    }
  } , [selectedGroup , selectedModel]);
  console.log('dismiss target ' , dismissTarget);


  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };
  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };
//   ******************************************* SUBMIT FORM *********************************
  const handleSubmit = async (e) => {

    try {
      // Send a POST request to the API using Axios
      const formData = {
        group: selectedGroup,
        model: selectedModel,
        plan: plan,
      };

      const response = await axios.post('http://localhost:4000/formData', formData);

      setSelectedGroup(initialSelectedGroup);
      setSelectedModel(initialSelectedModel);
      setPlan(initialPlan);
      refresh();
      // Handle the API response here (e.g., show a success message)
      console.log('API response:', response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error:', error);
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
                {groupOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              <label className="text-light mt-1" htmlFor="model">
                    Model
                  </label>
              <select value={selectedModel} onChange={handleModelChange} className="form-select m-1 bg-secondary text-light" id="modelSelect" aria-label="Default select example" required>
                {modelOptions.map((options) => (
                  <option key={options.value} value={options.value}>
                    {options.text}
                  </option>
                ))}
              </select>
              <div className="row">
                <div className="col-md-12 m-1">
                  <label className="text-light mt-1 pb-1" htmlFor="plan1">
                    Plan
                  </label>
                  <input type="number" id="plan" className="form-control mb-2 bg-secondary text-light" min={"1"} max={"999"} value={plan} onChange={handlePlanChange} />
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="submit"
                  id="submitButton"
                  className="btn btn-primary mt-2"
                  data-bs-dismiss={dismissTarget}
                >
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
