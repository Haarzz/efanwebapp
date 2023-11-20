import Select from "react-select";
import PropTypes from "prop-types";

SelectTransID.propTypes = {
    listTransaction: PropTypes.any,
    chooseTransaction: PropTypes.func,
    currentTransaction: PropTypes.any,
    isControlsEnabled: PropTypes.any
  };


export default function SelectTransID({listTransaction , chooseTransaction , currentTransaction, isControlsEnabled}) {
  
  return (
    <Select options={listTransaction} 
        getOptionLabel={(transaction) => `${transaction.model_id.model_name}`} 
        onChange={chooseTransaction} 
        isSearchable={false}
        value={currentTransaction}
        isDisabled={isControlsEnabled} />
  )
}