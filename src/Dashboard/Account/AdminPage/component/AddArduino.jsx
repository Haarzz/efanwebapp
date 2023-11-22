/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";

// eslint-disable-next-line react/prop-types
export default function AddArduino({ setParentArduinoName , arduinoNames}) {
  let nextId = 0;
  const [name, setName] = useState("");
  const toast = useRef(null)
  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Success Adding Arduino', life: 2000});
  }
  function deleteArduino(deletedName){
    setParentArduinoName(arduinoNames.filter((value) => value !== deletedName))
  }
  const handleArduinoSubmit = async (e) => {
    e.preventDefault()
    try {
      showSuccess();
      setParentArduinoName([...arduinoNames, { name: name }]);
    } catch (error) {
      console.log(error)
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
        <Toast ref={toast} />
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
    </>
  );
}
