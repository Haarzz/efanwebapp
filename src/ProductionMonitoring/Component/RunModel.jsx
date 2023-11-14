import Select from "react-select";
import PropTypes from "prop-types";

RunArduino.propTypes = {
    allArduino: PropTypes.any,
    chooseArduino: PropTypes.func,
  };

export default function RunArduino({allArduino , chooseArduino}) {
  console.log(allArduino)
  return (
    <>
      <Select options={allArduino} 
        getOptionLabel={(arduino) => `${arduino.nama_arduino}`} 
        onChange={chooseArduino} 
        isSearchable={false} />
    </>
  );
}
