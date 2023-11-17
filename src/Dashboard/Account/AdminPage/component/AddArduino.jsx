/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddArduino({ setParentArduinoName , arduinoNames}) {
  let nextId = 0;
  const [name, setName] = useState("");

  const [arduinoMessage, setArduinoMessage] = useState("");
  const [okArduinoMessage, setOkArduinoMessage] = useState("");
  function deleteArduino(deletedName){
    setParentArduinoName(arduinoNames.filter((value) => value !== deletedName))
  }
  const handleArduinoSubmit = async (e) => {
    e.preventDefault()
    try {
      setOkArduinoMessage(`Success Adding Arduino `);
      setParentArduinoName([...arduinoNames, { name: name }]);
    } catch (error) {
      setArduinoMessage(`Failed Adding Arduino to ${name}`);
    }
  };
  return (
    <>
      <label htmlFor="exampleInputArduino " className="form-label">
        Arduino
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Input Arduino Line"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className="btn btn-success ms-2 rounded-pill"
          onClick={(e) => {
            setParentArduinoName([...arduinoNames, { id: nextId++, name: name }]);
            handleArduinoSubmit(e);
          }}
          disabled ={name === ""}
        >
          Add Arduino
        </button>
      </div>
      <ol>
        {arduinoNames.map((arduinoName) => (
          <li key={arduinoName.name}>{arduinoName.name} <button type="button" className="btn btn-danger ms-2 bi bi-trash" onClick={() => deleteArduino(arduinoName)}
          ></button> </li>
        ))}
      </ol>
      <p className="text-success">{okArduinoMessage}</p>
      <p className="text-danger">{arduinoMessage}</p>
    </>
  );
}
