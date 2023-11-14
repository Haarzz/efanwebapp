import Select from "react-select";
import PropTypes from "prop-types";

RunArduino.propTypes = {
    allArduino: PropTypes.any,
    chooseArduino: PropTypes.func,
  };

export default function RunArduino({allArduino , chooseArduino}) {
  return (
    <>
      <Select options={allArduino} getOptionLabel={(arduino) => `${arduino.modelname}`} onChange={chooseArduino} isSearchable={false} />
    </>
  );
}
