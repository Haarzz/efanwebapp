import { useState } from "react";
import axios from "axios";

export default function AddModel() {
  const [modelMessage, setModelMessage] = useState("");
  const [message, setMessage] = useState("");
  const [model, setModel] = useState("");
  const refresh = () => window.location.reload(true);
  const handleModelChange = () => {
    setMessage("");
  };
    const handleAddModel = async () => {
      try {
        const response = await axios.post("http://localhost:4000/api/add-model", {
          modelname: model,
        });
        setMessage(response.data.message);
        if (response.status === 200) {
          setModelMessage("Success Adding New Model. Please Wait...");
          setTimeout(() => {
            refresh();
          }, 2000);
        }
      } catch (error) {
        setMessage("Error while Adding New Model, Please Try Again");
      }
    };
  return (
    <>
      <div className="card mb-3">
        <div className="card-header text-center fw-bolder" id="bgadmincardhead">
          ADD NEW MODEL
        </div>
        <div className="card-body" id="bgadmincardbody">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Model
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setModel(e.target.value);
              handleModelChange();
            }}
            placeholder="Add New Model"
            value={model}
            maxLength={90}
          ></input>
          <div className="text-center">
          <button type="submit" className="btn btn-success mt-4 rounded-pill" onClick={handleAddModel}>Add Model</button>
          <p className="text-success">{modelMessage}</p>
          <p className="text-danger">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
