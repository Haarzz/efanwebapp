import Select from "react-select";
import PropTypes from "prop-types";

RunArduino.propTypes = {
    allArduino: PropTypes.any,
    chooseArduino: PropTypes.func,
    isControlEnable: PropTypes.any,
  };

export default function RunArduino({allArduino , chooseArduino, isControlEnable}) {
  return (
    <>
      <Select options={allArduino} 
        getOptionLabel={(arduino) => `${arduino.nama_arduino}`} 
        onChange={chooseArduino} 
        isSearchable={false}
        isDisabled={isControlEnable}/>
    </>
  );
}
