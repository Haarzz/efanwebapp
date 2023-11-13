import axios from "axios";
import { useState } from "react";

export default function AddGroup() {
  const [groupMessage, setGroupMessage] = useState("");
  const [message, setMessage] = useState("");
  const [group, setGroup] = useState("");
  const refresh = () => window.location.reload(true);
  const handleGroupChange = () => {
    setMessage("");
  };
    const handleAddGroup = async () => {
      try {
        const response = await axios.post("http://localhost:4000/api/add-group", {
          groupname: group,
        });
        setMessage(response.data.message);
        if (response.status === 200) {
          setGroupMessage("Success Adding New Group. Please Wait...");
          setTimeout(() => {
            refresh();
          }, 2000);
        }
      } catch (error) {
        setMessage("Error while Adding New Group, Please Try Again");
      }
    };
  return (
    <>
      <div className="card mb-3">
        <div className="card-header text-center fw-bolder" id="bgadmincardhead">
          ADD NEW GROUP
        </div>
        <div className="card-body" id="bgadmincardbody">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Group
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setGroup(e.target.value);
              handleGroupChange
            }}
            placeholder="Add New Group"
            value={group}
            maxLength={90}
          ></input>
          <div className="text-center">
          <button type="submit" className="btn btn-success mt-4 rounded-pill" onClick={handleAddGroup }>Add Group</button>
            <p className="text-danger">{message}</p>
            <p className="text-success">{groupMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}
